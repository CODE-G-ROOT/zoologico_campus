import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
import { animales } from "../models/animales.js";
import { empleados } from "../models/empleados.js";
import { infraestrutura} from "../models/infraestructura.js"
import { historial_mantenimiento } from '../models/historial_mantenimiento.js'
import { historial_medico } from '../models/historial_medico.js'
import { eventos } from '../models/evento.js'
import { finanzas } from '../models/finanzas.js'
import { organizaciones } from '../models/organizaciones.js'

dotenv.config("../");
const appToken = Router();
const appVerify = Router();

const DTO = (p1) => {
    const match = {
        'animales': animales,
        'empleados': empleados,
        'infraestructura':infraestrutura,
        'hmant':historial_mantenimiento,
        'hmed':historial_medico,
        'eventos':eventos,
        'finanzas':finanzas,
        'org':organizaciones
    };
    const inst = match[p1];
    if(!inst) throw {status: 404, message: "Token solicitado no valido"}
    return { atributos: plainToClass(inst, {}, { ignoreDecorators: true }), class: inst}
};

appToken.use('/:collection' ,async(req,res)=>{
    try {
        let inst = DTO(req.params.collection).atributos;
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({},  classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({status: 201,jwt});
    } catch (error) {
        res.status(404).send({status: 404,message: 'Token solicitado no existente'})
    }
});

appVerify.use("/", async(req,res, next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token caducado"});
    }
})


export {
    appToken,
    appVerify,
    DTO
}
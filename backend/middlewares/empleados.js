import { plainToClass, classToPlain } from 'class-transformer';
import { Validate, validate } from 'class-validator';
import { DTO } from '../helpers/jwt';
import { Router } from 'express';
import 'reflect-metadata';

const middle_verify_empleados = Router();
const DTO_data_empleados = Router();

middle_verify_empleados.use((req, res, next)=>{
    if(!req.rateLimit) return;

    let { payload } = req.data;
    const { ait, exp, ...newPayload } = payload;
    payload = new payload;

    console.log({payload});

    let Clone = JSON.stringify( classToPlain( plainToClass( DTO('empleados').class(), {}, { ignoreDecorators: true})));
    console.log(Clone);

    let Verify = Clone === JSON.stringify(payload);
    req.data = undefined;

    (!Verify)
        ? res.status(406).send({ status: 406, message: 'Not Autorized', reference: 'https//http.cat/406'})
        : next()
});

DTO_data_empleados.use( async (req, res, next)=>{
    try {
        let data = plainToClass(DTO('empleados').class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();

    } catch (error) {
        res.status(error.status).send(error);
    }
});

export { middle_verify_empleados, DTO_data_empleados}
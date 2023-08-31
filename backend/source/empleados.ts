import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';

export class empleados {
    @Expose({name:'id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no id cumple los parametros`};},{toClassOnly: true})
        id:number;

    @Expose({name:'nombre_completo'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        nombre_completo:string;

    @Expose({name:'cc'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^\d{10}$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        cc:string;
        
    @Expose({name:'cargo'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        cargo:string;

    @Expose({name:'fecha_contratacion'})
    @Transform(({value})=>{
        if(/^\d{4}-\d{2}-\d{2}$/.test(value)) 
            return new Date(value);
        else 
            throw {status:400, message:`el dato no aa cumple los parametros`};
    },{toClassOnly:true})
    fecha_contratacion:Date;

    @Expose({name:'salario'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        salario:number;

    @Expose({name:'especialidad'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        especialidad:string;

    @Expose({name:'telefono'})
    @Transform(({value})=>{if(/^\d{10}$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        telefono:string;
    
    @Expose({name:'email'})
    @Transform(({value})=>{if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        email:string;

        constructor(data:Partial<empleados>) {
            Object.assign(this, data);
            this.id
            this.nombre_completo 
            this.email 
            this.cargo 
            this.cc 
            this.especialidad 
            this.fecha_contratacion
            this.salario 
            this.telefono 
        }
    
}
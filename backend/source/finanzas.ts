import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';

export class finanzas {
    @Expose({name:'id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no id cumple los parametros`};},{toClassOnly: true})
        id:number;
        
    @Expose({name:'tipo'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        tipo:string;


    @Expose({name:'cantidad'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no id cumple los parametros`};},{toClassOnly: true})
        cantidad:number;

    @Expose({name:'descripcion'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        descripcion:string;

    @Expose({name:'fecha'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(/^\d{4}-\d{2}-\d{2}$/.test(value)) 
            return new Date(value);
        else 
            throw {status:400, message:`el dato no aa cumple los parametros`};
    },{toClassOnly:true})
    fecha:Date;


    constructor(data:Partial<finanzas>) {
        Object.assign(this, data);
        this.id = 0;
        this.tipo = "";
        this.cantidad = 0;
        this.descripcion = "";
        this.fecha=new Date();;
    }  
}
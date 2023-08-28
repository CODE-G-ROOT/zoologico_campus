import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';

export class historial_medico {
    @Expose({name:'id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no id cumple los parametros`};},{toClassOnly: true})
        id:number;
        
    @Expose({name:'nombre_animal'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        nombre_animal:string;


    @Expose({name:'nombre_veterinario'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        nombre_veterinario:string;

    @Expose({name:'fecha'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(/^\d{4}-\d{2}-\d{2}$/.test(value)) 
            return new Date(value);
        else 
            throw {status:400, message:`el dato no aa cumple los parametros`};
    },{toClassOnly:true})
    fecha:Date;

    @Expose({name:'descripcion'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no nn cumple los parametros`};},{toClassOnly:true})
        descripcion:string;

    constructor(data:Partial<historial_medico>) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre_animal = "";
        this.nombre_veterinario = "";
        this.fecha=new Date();;
        this.descripcion = "";
    }  
}
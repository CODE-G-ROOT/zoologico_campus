import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined, isDecimal, IsNumber} from 'class-validator';

export class infraestrutura {

    @Expose({name:'id'})
    @IsNumber({}, { message: ()=>{throw{ status:400, message:'el campo id_infra debe ser de tipo number', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=> { throw {status:400, message:'el campo id_infra es obligatorio'}}})
    id_infra: number = 0;

    @Expose({name:'nombre_lugar'})
    @IsString({message: ()=> {throw {status: 400, message:'el campo nombre_lugar debe ser de tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=>{throw {status:400, message:'el campo nombre_lugar es obligatorio'}}})
    nombre_lugar: string = '';

    @Expose({name:'tipo'})
    @IsString({message: ()=> {throw {status: 400, message:'el campo tipo debe ser de tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=>{throw {status:400, message:'el campo tipo es obligatorio'}}})
    tipo: string = '';

    @Expose({name:'descripcion'})
    @IsString({message: ()=> {throw {status: 400, message:'el campo descripcion debe ser de tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=>{throw {status:400, message:'el campo descripcion es obligatorio'}}})
    descripcion: string = '';

    @Expose({name:'dimensiones'})
    @IsString({message: ()=> {throw {status: 400, message:'el campo dimensiones debe ser de tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=>{throw {status:400, message:'el campo dimensiones es obligatorio'}}})
    dimensiones: string = '';

    constructor(data: Partial<infraestrutura>) {
        Object.assign(this, data);
    }
}
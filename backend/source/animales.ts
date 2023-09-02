import { Expose, Transform } from "class-transformer";
import { IsString, IsEmpty, IsArray, IsDefined, IsNumber, Matches } from "class-validator";

export class DTO_animales {
    @Expose({ name: 'id' })
    @IsNumber({}, { message: ()=> { throw { status: 400, message:' el campo id_animal debe ser de tipo number', reference: 'https://http.cat/400'}}})
    @IsDefined({ message: () => { throw { status: 400, message: 'el campo id es obligatorio', reference: 'https://http.cat/401' }}})
    ID_animal: number = 0;

    @Expose({ name: 'nombre'})
    @IsString({message: ()=> { throw { status: 400, message:'el campo nombre_aninmal debe ser de tipo string y no debe tener numeros', reference: 'https://http.cat/400'}}})
    @IsDefined({message: ()=> { throw { status: 400, message:'el campo nombre_animal es obligatorio'}}})
    nombre_animal: string = '';

    @Expose({name: 'animal'})
    @IsString({message: ()=> {throw { status: 400, message:'el campo animal debe ser de tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=> {throw { status: 400, message:' el cmapo animal es obligatorio'}}})
    animal: string = '';

    @Expose({name: 'edad'})
    @IsNumber({}, {message: ()=> { throw { status: 400, message:'el campo edad debe de ser tipo number', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=> {throw { status: 400, message:'el campo edad_animal es obligatorio'}}})
    edad_animal: number = 0;

    @Expose({name: 'genero'})
    @IsString({message: ()=>{throw { status:400, message:'el campo genero_animal debe ser de tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=> {throw { status:400, message:'el campo genero animal es obligatorio'}}})
    genero_animal: string = '';

    @Expose({name:'habitat_zoo'})
    @IsNumber({}, {message: ()=> {throw { status:400, message:' el campo habitat_zoo debe de ser tipo number', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=> {throw { status:400, message:'el campo habitat_zoo es obligatorio'}}})
    habitat_zoo: number = 0;

    @Expose({name:'cuidados'})
    @IsString({message: ()=> {throw { status:400, message:' el campo cuidados debe de ser tipo string', reference:'https://http.cat/400'}}})
    @IsDefined({message: ()=> {throw { status:400, message:'el campo habitat_zoo es obligatorio'}}})
    cuidados: string = '';

    @Expose({name: 'relacion_animales'})
    @IsString({message: ()=> {throw { status:400, message:'el campo relacion_animales debe de ser de tipo'}}})
    @IsDefined({message: ()=>{throw {status:400, message: 'el campo relacion_animales es obligatorio'}}})
    relacion_animales: string = '';

    @Expose({name: 'estado_salud'})
    @IsString({message: ()=> {throw { status:400, message:'el campo estado_salud debe de ser de tipo'}}})
    @IsDefined({message: ()=>{throw {status:400, message: 'el campo estado_salud es obligatorio'}}})
    estado_salud: string = '';

    @Expose({name: 'historia'})
    @IsString({message: ()=> {throw { status:400, message:'el campo historia debe de ser de tipo'}}})
    @IsDefined({message: ()=>{throw {status:400, message: 'el campo historia es obligatorio'}}})
    historia: string = '';

    @Expose({name: 'interaccion_humanos'})
    @IsString({message: ()=> {throw { status:400, message:'el campo interaccion_humanos debe de ser de tipo'}}})
    @IsDefined({message: ()=>{throw {status:400, message: 'el campo interaccion_humanos es obligatorio'}}})
    interaccion_humanos: string = '';

    @Expose({name: 'enlaces_geneticos'})
    @IsString({message: ()=> {throw { status:400, message:'el campo enlaces_geneticos debe de ser de tipo'}}})
    @IsDefined({message: ()=>{throw {status:400, message: 'el campo enlaces_geneticos es obligatorio'}}})
    enlaces_geneticos: string = '';

    constructor(data: Partial<DTO_animalesv>) {
        Object.assign(this, data);
    }
}
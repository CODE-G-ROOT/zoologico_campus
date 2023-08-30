var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsString, IsDefined, IsNumber } from "class-validator";
export class animales {
    constructor(data) {
        this.ID_animal = 0;
        this.nombre_animal = '';
        this.animal = '';
        this.edad_animal = 0;
        this.genero_animal = '';
        this.habitat_zoo = 0;
        this.cuidados = '';
        this.relacion_animales = '';
        this.estado_salud = '';
        this.historia = '';
        this.interaccion_humanos = '';
        this.enlaces_geneticos = '';
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsNumber({}, { message: () => { throw { status: 400, message: ' el campo id_animal debe ser de tipo number', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo id es obligatorio', reference: 'https://http.cat/401' }; } }),
    __metadata("design:type", Number)
], animales.prototype, "ID_animal", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo nombre_aninmal debe ser de tipo string y no debe tener numeros', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo nombre_animal es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "nombre_animal", void 0);
__decorate([
    Expose({ name: 'animal' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo animal debe ser de tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: ' el cmapo animal es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "animal", void 0);
__decorate([
    Expose({ name: 'edad' }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'el campo edad debe de ser tipo number', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo edad_animal es obligatorio' }; } }),
    __metadata("design:type", Number)
], animales.prototype, "edad_animal", void 0);
__decorate([
    Expose({ name: 'genero' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo genero_animal debe ser de tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo genero animal es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "genero_animal", void 0);
__decorate([
    Expose({ name: 'habitat_zoo' }),
    IsNumber({}, { message: () => { throw { status: 400, message: ' el campo habitat_zoo debe de ser tipo number', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo habitat_zoo es obligatorio' }; } }),
    __metadata("design:type", Number)
], animales.prototype, "habitat_zoo", void 0);
__decorate([
    Expose({ name: 'cuidados' }),
    IsString({ message: () => { throw { status: 400, message: ' el campo cuidados debe de ser tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo habitat_zoo es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "cuidados", void 0);
__decorate([
    Expose({ name: 'relacion_animales' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo relacion_animales debe de ser de tipo' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo relacion_animales es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "relacion_animales", void 0);
__decorate([
    Expose({ name: 'estado_salud' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo estado_salud debe de ser de tipo' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo estado_salud es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "estado_salud", void 0);
__decorate([
    Expose({ name: 'historia' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo historia debe de ser de tipo' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo historia es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "historia", void 0);
__decorate([
    Expose({ name: 'interaccion_humanos' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo interaccion_humanos debe de ser de tipo' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo interaccion_humanos es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "interaccion_humanos", void 0);
__decorate([
    Expose({ name: 'enlaces_geneticos' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo enlaces_geneticos debe de ser de tipo' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo enlaces_geneticos es obligatorio' }; } }),
    __metadata("design:type", String)
], animales.prototype, "enlaces_geneticos", void 0);

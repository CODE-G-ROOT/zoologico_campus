var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsString, IsDefined, IsNumber } from 'class-validator';
export class infraestrutura {
    constructor(data) {
        this.id_infra = 0;
        this.nombre_lugar = '';
        this.tipo = '';
        this.descripcion = '';
        this.dimensiones = '';
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'el campo id_infra debe ser de tipo number', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo id_infra es obligatorio' }; } }),
    __metadata("design:type", Number)
], infraestrutura.prototype, "id_infra", void 0);
__decorate([
    Expose({ name: 'nombre_lugar' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo nombre_lugar debe ser de tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo nombre_lugar es obligatorio' }; } }),
    __metadata("design:type", String)
], infraestrutura.prototype, "nombre_lugar", void 0);
__decorate([
    Expose({ name: 'tipo' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo tipo debe ser de tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo tipo es obligatorio' }; } }),
    __metadata("design:type", String)
], infraestrutura.prototype, "tipo", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo descripcion debe ser de tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo descripcion es obligatorio' }; } }),
    __metadata("design:type", String)
], infraestrutura.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'dimensiones' }),
    IsString({ message: () => { throw { status: 400, message: 'el campo dimensiones debe ser de tipo string', reference: 'https://http.cat/400' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el campo dimensiones es obligatorio' }; } }),
    __metadata("design:type", String)
], infraestrutura.prototype, "dimensiones", void 0);

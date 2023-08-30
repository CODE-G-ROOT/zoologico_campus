var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class organizaciones {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "";
        this.ubicacion = "";
        this.encargado = "";
        this.fecha_creacion = new Date();
        ;
        this.area_encargada = "";
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no id cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], organizaciones.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], organizaciones.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'ubicacion' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], organizaciones.prototype, "ubicacion", void 0);
__decorate([
    Expose({ name: 'encargado' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], organizaciones.prototype, "encargado", void 0);
__decorate([
    Expose({ name: 'fecha_creacion_creacion' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value))
            return new Date(value);
        else
            throw { status: 400, message: `el dato no aa cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], organizaciones.prototype, "fecha_creacion", void 0);
__decorate([
    Expose({ name: 'area_encargada' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], organizaciones.prototype, "area_encargada", void 0);

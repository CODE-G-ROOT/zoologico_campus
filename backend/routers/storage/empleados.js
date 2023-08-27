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
export class empleados {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre_completo = "";
        this.email = "";
        this.cargo = "";
        this.cc = "";
        this.especialidad = "";
        this.fecha_contratacion = new Date();
        this.salario = 0;
        this.telefono = "";
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
], empleados.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre_completo' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], empleados.prototype, "nombre_completo", void 0);
__decorate([
    Expose({ name: 'cc' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^\d{10}$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], empleados.prototype, "cc", void 0);
__decorate([
    Expose({ name: 'cargo' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], empleados.prototype, "cargo", void 0);
__decorate([
    Expose({ name: 'fecha_contratacion' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value))
            return new Date(value);
        else
            throw { status: 400, message: `el dato no aa cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Date)
], empleados.prototype, "fecha_contratacion", void 0);
__decorate([
    Expose({ name: 'salario' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], empleados.prototype, "salario", void 0);
__decorate([
    Expose({ name: 'especialidad' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no nn cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], empleados.prototype, "especialidad", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    Transform(({ value }) => {
        if (/^\d{10}$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], empleados.prototype, "telefono", void 0);
__decorate([
    Expose({ name: 'email' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], empleados.prototype, "email", void 0);

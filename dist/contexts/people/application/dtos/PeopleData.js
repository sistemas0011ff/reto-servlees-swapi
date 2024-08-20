"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleData = void 0;
class PeopleData {
    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.altura = data.altura;
        this.masa = data.masa;
        this.colorCabello = data.colorCabello;
        this.colorPiel = data.colorPiel;
        this.colorOjos = data.colorOjos;
        this.anioNacimiento = data.anioNacimiento;
        this.genero = data.genero;
        this.nombreMundoNatal = data.nombreMundoNatal;
        this.creado = data.creado;
        this.editado = data.editado;
    }
}
exports.PeopleData = PeopleData;

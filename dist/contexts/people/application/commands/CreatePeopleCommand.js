"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePeopleCommand = void 0;
class CreatePeopleCommand {
    constructor(PeopleData) {
        this.PeopleData = PeopleData;
    }
    validate() {
        if (!this.PeopleData.nombre) {
            throw new Error("Datos del Peoplea incompletos o inválidos.");
        }
    }
}
exports.CreatePeopleCommand = CreatePeopleCommand;

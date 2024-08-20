"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanetCommand = void 0;
class CreatePlanetCommand {
    constructor(planetData) {
        this.planetData = planetData;
    }
    validate() {
        if (!this.planetData.nombre || !this.planetData.periodoRotacion) {
            throw new Error("Datos del planeta incompletos o inválidos.");
        }
    }
}
exports.CreatePlanetCommand = CreatePlanetCommand;

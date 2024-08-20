"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
class Planet {
    constructor(data) {
        this.nombre = data.nombre;
        this.periodoRotacion = data.periodoRotacion;
        this.periodoOrbital = data.periodoOrbital;
        this.diametro = data.diametro;
        this.clima = data.clima;
        this.gravedad = data.gravedad;
        this.terreno = data.terreno;
        this.aguaSuperficial = data.aguaSuperficial;
        this.poblacion = data.poblacion;
    }
}
exports.Planet = Planet;

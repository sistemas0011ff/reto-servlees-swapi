"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetData = void 0;
// dtos/PlanetData.ts
class PlanetData {
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
exports.PlanetData = PlanetData;

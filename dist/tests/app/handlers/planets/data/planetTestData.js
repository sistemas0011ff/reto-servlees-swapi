"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockPlanetsData = exports.fakePlanetData = void 0;
const Planet_1 = require("../../../../../contexts/planets/application/dtos/Planet");
exports.fakePlanetData = {
    nombre: 'Tierra',
    periodoRotacion: 24,
    periodoOrbital: 365,
    diametro: 12742,
    clima: 'templado',
    gravedad: '1 estándar',
    terreno: 'montañoso, bosques, desiertos',
    aguaSuperficial: 70,
    poblacion: 7000000000
};
exports.mockPlanetsData = [
    new Planet_1.Planet({ nombre: 'Earth', periodoRotacion: null, periodoOrbital: null, diametro: null, clima: null, gravedad: null, terreno: null, aguaSuperficial: null, poblacion: 7000000000 }),
    new Planet_1.Planet({ nombre: 'Mars', periodoRotacion: null, periodoOrbital: null, diametro: null, clima: null, gravedad: null, terreno: null, aguaSuperficial: null, poblacion: 0 })
];

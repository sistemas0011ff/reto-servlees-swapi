"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetRepository = void 0;
const Planet_1 = require("../../application/dtos/Planet");
class PlanetRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // async save(planetData: Planet): Promise<string> {
    //     const planet = await this.prisma.planets.create({
    //         data: {
    //             name: planetData.nombre,
    //             rotation_period: planetData.periodoRotacion,
    //             orbital_period: planetData.periodoOrbital,
    //             diameter: planetData.diametro,
    //             climate: planetData.clima,
    //             gravity: planetData.gravedad,
    //             terrain: planetData.terreno,
    //             surface_water: planetData.aguaSuperficial,
    //             population: planetData.poblacion
    //         },
    //     });
    //     return planet.id.toString();
    // }
    save(planetData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!planetData.nombre || !planetData.diametro || !planetData.clima) {
                throw new Error("Missing required fields");
            }
            const planet = yield this.prisma.planets.create({
                data: {
                    name: planetData.nombre,
                    rotation_period: planetData.periodoRotacion,
                    orbital_period: planetData.periodoOrbital,
                    diameter: planetData.diametro,
                    climate: planetData.clima,
                    gravity: planetData.gravedad,
                    terrain: planetData.terreno,
                    surface_water: planetData.aguaSuperficial,
                    population: planetData.poblacion
                },
            });
            return planet.id.toString();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const planet = yield this.prisma.planets.findUnique({
                where: { id: id },
            });
            if (planet) {
                return new Planet_1.Planet({
                    nombre: planet.name,
                    periodoRotacion: planet.rotation_period,
                    periodoOrbital: planet.orbital_period,
                    diametro: planet.diameter,
                    clima: planet.climate,
                    gravedad: planet.gravity,
                    terreno: planet.terrain,
                    aguaSuperficial: planet.surface_water,
                    poblacion: planet.population ? Number(planet.population) : null
                });
            }
            return null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const planetsData = yield this.prisma.planets.findMany();
            return planetsData.map(p => new Planet_1.Planet({
                nombre: p.name,
                periodoRotacion: p.rotation_period,
                periodoOrbital: p.orbital_period,
                diametro: p.diameter,
                clima: p.climate,
                gravedad: p.gravity,
                terreno: p.terrain,
                aguaSuperficial: p.surface_water,
                poblacion: p.population ? Number(p.population) : null
            }));
        });
    }
}
exports.PlanetRepository = PlanetRepository;

"use strict";
// src/tests/contexts/planets/application/usecases/RetrievePlanetsUseCase.test.ts
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
const RetrievePlanetsUseCase_1 = require("../../../../../contexts/planets/application/usecases/RetrievePlanetsUseCase");
const PlanetQueryValues_1 = require("../../../../../contexts/planets/application/queries/PlanetQueryValues");
const Planet_1 = require("../../../../../contexts/planets/application/dtos/Planet");
// Asegúrate de que la ruta relativa al módulo que estás simulando sea correcta
jest.mock('../../../../../contexts/planets/application/queries/GetPlanetQueryHandler', () => {
    return {
        GetPlanetQueryHandler: jest.fn().mockImplementation(() => {
            return { execute: jest.fn() };
        })
    };
});
describe('RetrievePlanetsUseCase', () => {
    let retrievePlanetsUseCase;
    let mockPlanetQueryHandler;
    beforeEach(() => {
        mockPlanetQueryHandler = new (require('../../../../../contexts/planets/application/queries/GetPlanetQueryHandler').GetPlanetQueryHandler)();
        retrievePlanetsUseCase = new RetrievePlanetsUseCase_1.RetrievePlanetsUseCase(mockPlanetQueryHandler);
    });
    it('should successfully retrieve a list of planets', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockPlanets = [
            new Planet_1.Planet({
                nombre: 'Tierra',
                periodoRotacion: 24,
                periodoOrbital: 365,
                diametro: 12742,
                clima: 'Templado',
                gravedad: '1g',
                terreno: 'Montañoso',
                aguaSuperficial: 71,
                poblacion: 7000000000
            }),
            new Planet_1.Planet({
                nombre: 'Marte',
                periodoRotacion: 25,
                periodoOrbital: 687,
                diametro: 6792,
                clima: 'Árido',
                gravedad: '0.38g',
                terreno: 'Desierto',
                aguaSuperficial: 0,
                poblacion: 0
            }),
            // Puedes agregar más planetas de prueba aquí si es necesario
        ];
        mockPlanetQueryHandler.execute.mockResolvedValue(mockPlanets);
        const result = yield retrievePlanetsUseCase.execute();
        expect(mockPlanetQueryHandler.execute).toHaveBeenCalledWith(new PlanetQueryValues_1.PlanetQueryValues());
        expect(result).toEqual(mockPlanets);
        expect(result.length).toBe(mockPlanets.length);
    }));
    // Aquí puedes agregar más pruebas para otros casos, como errores en la ejecución
});

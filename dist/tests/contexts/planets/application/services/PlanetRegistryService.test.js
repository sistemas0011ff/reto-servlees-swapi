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
const Planet_1 = require("../../../../../contexts/planets/application/dtos/Planet");
const PlanetDataSpanishApp_1 = require("../../../../../contexts/planets/application/dtos/PlanetDataSpanishApp");
const PlanetRegistryService_1 = require("../../../../../contexts/planets/application/services/PlanetRegistryService");
jest.mock('../../../../../contexts/planets/application/interfaces/IPlanetCreationUseCase');
jest.mock('../../../../../contexts/planets/application/interfaces/IRetrievePlanetsUseCase');
jest.mock('../../../../../contexts/planets/application/interfaces/IRetrievePlanetFromApiUseCase');
describe('PlanetRegistryService', () => {
    let service;
    let mockPlanetCreationUseCase;
    let mockRetrievePlanetsUseCase;
    let mockRetrievePlanetFromApiUseCase;
    beforeEach(() => {
        mockPlanetCreationUseCase = {
            createPlanet: jest.fn()
        };
        mockRetrievePlanetsUseCase = {
            execute: jest.fn()
        };
        mockRetrievePlanetFromApiUseCase = {
            execute: jest.fn()
        };
        service = new PlanetRegistryService_1.PlanetRegistryService(mockPlanetCreationUseCase, mockRetrievePlanetsUseCase, mockRetrievePlanetFromApiUseCase);
    });
    it('debería crear un planeta correctamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const planetData = new PlanetDataSpanishApp_1.PlanetDataSpanishApp({
            nombre: 'Tierra',
            periodoRotacion: 24,
            periodoOrbital: 365,
            diametro: 12742,
            clima: 'Templado',
            gravedad: '1g',
            terreno: 'Montañoso',
            aguaSuperficial: 70,
            poblacion: 7000000000
        });
        const expectedPlanet = new Planet_1.Planet({
            nombre: 'Tierra',
            periodoRotacion: 24,
            periodoOrbital: 365,
            diametro: 12742,
            clima: 'Templado',
            gravedad: '1g',
            terreno: 'Montañoso',
            aguaSuperficial: 70,
            poblacion: 7000000000
        });
        mockPlanetCreationUseCase.createPlanet.mockResolvedValue(expectedPlanet);
        const result = yield service.createPlanet(planetData);
        expect(mockPlanetCreationUseCase.createPlanet).toHaveBeenCalledWith(planetData);
        expect(result).toEqual(expectedPlanet);
    }));
    it('debería listar planetas correctamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockPlanets = [
            new Planet_1.Planet({
                nombre: 'Tierra',
                periodoRotacion: 24,
                periodoOrbital: 365,
                diametro: 12742,
                clima: 'Templado',
                gravedad: '1g',
                terreno: 'Montañoso',
                aguaSuperficial: 70,
                poblacion: 7000000000
            }),
            new Planet_1.Planet({
                nombre: 'Júpiter',
                periodoRotacion: 24,
                periodoOrbital: 365,
                diametro: 12742,
                clima: 'Templado',
                gravedad: '1g',
                terreno: 'Montañoso',
                aguaSuperficial: 70,
                poblacion: 7000000000
            })
        ];
        mockRetrievePlanetsUseCase.execute.mockResolvedValue(mockPlanets);
        const result = yield service.listPlanets();
        expect(mockRetrievePlanetsUseCase.execute).toHaveBeenCalled();
        expect(result).toEqual(mockPlanets);
    }));
    it('debería obtener datos de un planeta desde la API correctamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const planetId = 1;
        const expectedPlanetData = new PlanetDataSpanishApp_1.PlanetDataSpanishApp({
            nombre: 'Tierra',
            periodoRotacion: 24,
            periodoOrbital: 365,
            diametro: 12742,
            clima: 'Templado',
            gravedad: '1g',
            terreno: 'Montañoso',
            aguaSuperficial: 70,
            poblacion: 7000000000
        });
        mockRetrievePlanetFromApiUseCase.execute.mockResolvedValue(expectedPlanetData);
        const result = yield service.getPlanetsFromApi(planetId);
        expect(mockRetrievePlanetFromApiUseCase.execute).toHaveBeenCalledWith(planetId);
        expect(result).toEqual(expectedPlanetData);
    }));
});

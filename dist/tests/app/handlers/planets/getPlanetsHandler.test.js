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
const testUtils_1 = require("./utils/testUtils");
const mockPlanetRegistryService_1 = require("./mocks/mockPlanetRegistryService");
const getPlanets_1 = require("../../../../app/handlers/planets/getPlanets");
const planetTestData_1 = require("./data/planetTestData");
jest.mock('../../../../app/di/iocContainer', () => ({
    get: jest.fn(),
}));
(0, testUtils_1.setupMockContainer)();
describe('getPlanetsHandler', () => {
    it('should return 200 and a list of planets on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockPlanets = planetTestData_1.mockPlanetsData;
        mockPlanetRegistryService_1.mockPlanetRegistryService.listPlanets.mockResolvedValue(mockPlanets);
        const mockEvent = {}; // Mock vacío del evento
        const result = yield (0, getPlanets_1.handler)(mockEvent, testUtils_1.mockContext, jest.fn());
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).toEqual(mockPlanets.map(planet => (Object.assign({}, planet))));
    }));
    it('should return 500 if an error occurs', () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = 'Internal Server Error';
        mockPlanetRegistryService_1.mockPlanetRegistryService.listPlanets.mockRejectedValue(new Error(errorMessage));
        const mockEvent = {}; // Mock vacío del evento
        const result = yield (0, getPlanets_1.handler)(mockEvent, testUtils_1.mockContext, jest.fn());
        expect(result.statusCode).toBe(500);
        expect(JSON.parse(result.body).error).toBe('Error interno del servidor al obtener los planetas.');
        expect(JSON.parse(result.body).errorMessage).toBe(errorMessage);
    }));
});

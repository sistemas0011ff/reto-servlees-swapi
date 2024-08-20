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
const createPlanet_1 = require("../../../../app/handlers/planets/createPlanet");
const testUtils_1 = require("./utils/testUtils");
const mockPlanetRegistryService_1 = require("./mocks/mockPlanetRegistryService");
const planetTestData_1 = require("./data/planetTestData");
const testFunctions_1 = require("./utils/testFunctions");
const Planet_1 = require("../../../../contexts/planets/application/dtos/Planet");
jest.mock('../../../../app/di/iocContainer', () => ({
    get: jest.fn(),
}));
(0, testUtils_1.setupMockContainer)();
describe('createPlanetHandler', () => {
    it('should return 400 if no body is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const event = { body: null };
        const result = yield (0, createPlanet_1.handler)(event, testUtils_1.mockContext, jest.fn());
        expect(result.statusCode).toBe(400);
        expect(result.body).toBe(JSON.stringify({ error: 'No se proporcionaron datos.' }));
    }));
    it('should create a planet and return 200 on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, testFunctions_1.testCreatePlanetSuccess)();
        expect(mockPlanetRegistryService_1.mockPlanetRegistryService.createPlanet).toHaveBeenCalledWith(new Planet_1.Planet(planetTestData_1.fakePlanetData));
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).toEqual({ message: "Planeta creado con éxito", planet: new Planet_1.Planet(planetTestData_1.fakePlanetData) });
    }));
    it('should return 500 if an error occurs', () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = 'Internal Server Error';
        const result = yield (0, testFunctions_1.testCreatePlanetFailure)(errorMessage);
        expect(mockPlanetRegistryService_1.mockPlanetRegistryService.createPlanet).toHaveBeenCalledWith(planetTestData_1.fakePlanetData);
        expect(result.statusCode).toBe(500);
        expect(JSON.parse(result.body).error).toBe('Error interno del servidor al crear el planeta.');
        expect(JSON.parse(result.body).errorMessage).toBe(errorMessage);
    }));
});

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
const getPlanetsSWApi_1 = require("../../../../app/handlers/planets/getPlanetsSWApi");
const PlanetDataSpanishApp_1 = require("../../../../contexts/planets/application/dtos/PlanetDataSpanishApp");
jest.mock('../../../../app/di/iocContainer', () => ({
    get: jest.fn(),
}));
(0, testUtils_1.setupMockContainer)();
describe('getPlanetByIdHandler', () => {
    it('should return 400 if no planet ID is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const event = {
            queryStringParameters: null,
        };
        const result = yield (0, getPlanetsSWApi_1.handler)(event, testUtils_1.mockContext, jest.fn());
        if (typeof result === 'object' && result !== null) {
            expect(result.statusCode).toBe(400);
            expect(JSON.parse(result.body).error).toBe('Planet ID is required');
        }
        else {
            fail('Handler did not return a result');
        }
    }));
    it('should return 200 and planet details on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockPlanetData = new PlanetDataSpanishApp_1.PlanetDataSpanishApp({
            nombre: 'Tatooine',
            periodoRotacion: 23,
            periodoOrbital: 304,
            diametro: 10465,
            clima: 'árido',
            gravedad: '1 estándar',
            terreno: 'desierto',
            aguaSuperficial: 1,
            poblacion: 200000
        });
        mockPlanetRegistryService_1.mockPlanetRegistryService.getPlanetsFromApi.mockResolvedValue(mockPlanetData);
        const event = {
            queryStringParameters: { id: '1' },
        };
        const result = yield (0, getPlanetsSWApi_1.handler)(event, testUtils_1.mockContext, jest.fn());
        if (typeof result === 'object' && result !== null) {
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockPlanetData);
        }
        else {
            fail('Handler did not return a result');
        }
    }));
    it('should return 500 if an error occurs', () => __awaiter(void 0, void 0, void 0, function* () {
        const errorMessage = 'Error retrieving planet';
        mockPlanetRegistryService_1.mockPlanetRegistryService.getPlanetsFromApi.mockRejectedValue(new Error(errorMessage));
        const event = {
            queryStringParameters: { id: '1' },
        };
        const result = yield (0, getPlanetsSWApi_1.handler)(event, testUtils_1.mockContext, jest.fn());
        if (typeof result === 'object' && result !== null) {
            expect(result.statusCode).toBe(500);
            expect(JSON.parse(result.body).error).toBe('Internal server error occurred while retrieving the planet.');
            expect(JSON.parse(result.body).errorMessage).toBe(errorMessage);
        }
        else {
            fail('Handler did not return a result');
        }
    }));
});

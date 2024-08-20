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
const PlanetDataEnglishApp_1 = require("../../../../../contexts/planets/application/dtos/PlanetDataEnglishApp");
const PlanetDataSpanishApp_1 = require("../../../../../contexts/planets/application/dtos/PlanetDataSpanishApp");
const RetrievePlanetFromApiUseCase_1 = require("../../../../../contexts/planets/application/usecases/RetrievePlanetFromApiUseCase");
jest.mock('../../../../../contexts/planets/application/queries/GetPlanetQueryHandler');
describe('RetrievePlanetFromApiUseCase', () => {
    let retrievePlanetFromApiUseCase;
    let mockGetPlanetQueryHandler;
    beforeEach(() => {
        mockGetPlanetQueryHandler = {
            execute: jest.fn(),
        };
        retrievePlanetFromApiUseCase = new RetrievePlanetFromApiUseCase_1.RetrievePlanetFromApiUseCase(mockGetPlanetQueryHandler);
    });
    it('should successfully retrieve planet data from the API', () => __awaiter(void 0, void 0, void 0, function* () {
        const planetId = 1;
        const planetEnglishData = new PlanetDataEnglishApp_1.PlanetDataEnglishApp({
            name: 'Tierra',
            rotation_period: '24',
            orbital_period: '365',
            diameter: '12742',
            climate: 'Templado',
            gravity: '1g',
            terrain: 'Montañoso',
            surface_water: '71',
            population: '7000000000'
        });
        mockGetPlanetQueryHandler.execute.mockResolvedValue([planetEnglishData]);
        const result = yield retrievePlanetFromApiUseCase.execute(planetId);
        expect(mockGetPlanetQueryHandler.execute).toHaveBeenCalledWith({ planetId });
        expect(result).toBeInstanceOf(PlanetDataSpanishApp_1.PlanetDataSpanishApp);
        expect(result.nombre).toEqual(planetEnglishData.name);
    }));
});

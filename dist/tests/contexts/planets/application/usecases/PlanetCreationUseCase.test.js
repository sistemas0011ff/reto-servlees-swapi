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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iocContainer_1 = __importDefault(require("../../../../../app/di/iocContainer"));
const CreatePlanetCommand_1 = require("../../../../../contexts/planets/application/commands/CreatePlanetCommand");
const CreatePlanetCommandHandler_1 = require("../../../../../contexts/planets/application/commands/CreatePlanetCommandHandler");
const Planet_1 = require("../../../../../contexts/planets/application/dtos/Planet");
const PlanetCreationUseCase_1 = require("../../../../../contexts/planets/application/usecases/PlanetCreationUseCase");
jest.mock('../../../../../contexts/planets/application/commands/CreatePlanetCommandHandler');
describe('PlanetCreationUseCase', () => {
    let planetCreationUseCase;
    let mockCreatePlanetCommandHandler;
    beforeEach(() => {
        // Crear un mock del CreatePlanetCommandHandler
        const mockHandler = {
            handle: jest.fn().mockImplementation((command) => {
                const planetData = command.planetData;
                const expectedPlanet = new Planet_1.Planet(planetData);
                const commandResult = {
                    result: true,
                    value: {
                        success: true,
                        responseCode: '0',
                        message: 'Planet Created Successfully',
                        planetId: '123',
                        planet: expectedPlanet,
                    },
                };
                return Promise.resolve(commandResult);
            }),
        };
        // Registrar el mock en el contenedor de Typedi
        iocContainer_1.default.set(CreatePlanetCommandHandler_1.CreatePlanetCommandHandler, mockHandler);
        // Ahora obtén el mock del contenedor
        mockCreatePlanetCommandHandler = iocContainer_1.default.get(CreatePlanetCommandHandler_1.CreatePlanetCommandHandler);
        planetCreationUseCase = new PlanetCreationUseCase_1.PlanetCreationUseCase(mockCreatePlanetCommandHandler);
    });
    it('should successfully create a planet', () => __awaiter(void 0, void 0, void 0, function* () {
        const planetData = {
            nombre: 'Tierra',
            periodoRotacion: 24,
            periodoOrbital: 365,
            diametro: 12742,
            clima: 'Templado',
            gravedad: '1g',
            terreno: 'Montañoso',
            aguaSuperficial: 71,
            poblacion: 7000000000
        };
        const expectedPlanet = new Planet_1.Planet(planetData);
        const commandResult = {
            result: true,
            value: {
                success: true,
                responseCode: '0',
                message: 'Planet Created Successfully',
                planetId: '123',
                planet: expectedPlanet,
            },
        };
        mockCreatePlanetCommandHandler.handle.mockResolvedValue(commandResult);
        const result = yield planetCreationUseCase.createPlanet(planetData);
        expect(mockCreatePlanetCommandHandler.handle).toHaveBeenCalledWith(new CreatePlanetCommand_1.CreatePlanetCommand(planetData));
        expect(result).toEqual(expectedPlanet);
    }));
});

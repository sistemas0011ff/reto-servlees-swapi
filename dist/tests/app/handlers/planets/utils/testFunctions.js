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
exports.testCreatePlanetSuccess = testCreatePlanetSuccess;
exports.testCreatePlanetFailure = testCreatePlanetFailure;
const testUtils_1 = require("./testUtils");
const planetTestData_1 = require("../data/planetTestData");
const mockPlanetRegistryService_1 = require("../mocks/mockPlanetRegistryService");
const Planet_1 = require("../../../../../contexts/planets/application/dtos/Planet");
const createPlanet_1 = require("../../../../../app/handlers/planets/createPlanet");
function testCreatePlanetSuccess() {
    return __awaiter(this, void 0, void 0, function* () {
        const fakePlanet = new Planet_1.Planet(planetTestData_1.fakePlanetData);
        mockPlanetRegistryService_1.mockPlanetRegistryService.createPlanet.mockResolvedValueOnce(fakePlanet);
        const event = {
            body: JSON.stringify(planetTestData_1.fakePlanetData),
        };
        return yield (0, createPlanet_1.handler)(event, testUtils_1.mockContext, jest.fn());
    });
}
function testCreatePlanetFailure(errorMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        const error = new Error(errorMessage);
        mockPlanetRegistryService_1.mockPlanetRegistryService.createPlanet.mockRejectedValueOnce(error);
        const event = {
            body: JSON.stringify(planetTestData_1.fakePlanetData),
        };
        return yield (0, createPlanet_1.handler)(event, testUtils_1.mockContext, jest.fn());
    });
}

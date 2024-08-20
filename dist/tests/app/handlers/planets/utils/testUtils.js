"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMockContainer = exports.mockContext = void 0;
const mockPlanetRegistryService_1 = require("../mocks/mockPlanetRegistryService");
const iocContainer_1 = __importDefault(require("../../../../../app/di/iocContainer"));
// Configuración del contexto de AWS Lambda para las pruebas
exports.mockContext = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: 'testFunction',
    functionVersion: '1',
    invokedFunctionArn: 'arn:aws:lambda:region:account-id:function:testFunction',
    memoryLimitInMB: '128',
    awsRequestId: 'unique-id',
    logGroupName: 'log-group',
    logStreamName: 'log-stream',
    getRemainingTimeInMillis: () => 3000,
    done: () => { },
    fail: () => { },
    succeed: () => { },
};
// Configuración de los mocks y limpieza para las pruebas
const setupMockContainer = () => {
    beforeEach(() => {
        // Configuración del mock para el contenedor de inyección de dependencias
        iocContainer_1.default.get = jest.fn().mockReturnValue(mockPlanetRegistryService_1.mockPlanetRegistryService);
    });
    afterEach(() => {
        // Limpieza de mocks después de cada prueba
        jest.clearAllMocks();
    });
};
exports.setupMockContainer = setupMockContainer;

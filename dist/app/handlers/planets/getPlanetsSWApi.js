"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.handler = void 0;
const iocContainer_1 = __importStar(require("../../di/iocContainer"));
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const planetRegistryService = iocContainer_1.default.get(iocContainer_1.IPlanetRegistryServiceToken);
        const planetId = (_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.id;
        if (!planetId) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Planet ID is required' }),
            };
        }
        const planet = yield planetRegistryService.getPlanetsFromApi(parseInt(planetId));
        return {
            statusCode: 200,
            body: JSON.stringify(planet),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal server error occurred while retrieving the planet.',
                errorMessage: error instanceof Error ? error.message : 'Unknown error',
            }),
        };
    }
});
exports.handler = handler;

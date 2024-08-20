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
const People_1 = require("../../../../../contexts/people/application/dtos/People");
const PeopleDataSpanishApp_1 = require("../../../../../contexts/people/application/dtos/PeopleDataSpanishApp");
const PeopleRegistryService_1 = require("../../../../../contexts/people/application/services/PeopleRegistryService");
jest.mock('../../../../../contexts/people/application/interfaces/IPeopleCreationUseCase');
jest.mock('../../../../../contexts/people/application/interfaces/IRetrievePeopleUseCase');
jest.mock('../../../../../contexts/people/application/interfaces/IRetrievePeopleFromApiUseCase');
describe('PeopleRegistryService', () => {
    let service;
    let mockPeopleCreationUseCase;
    let mockRetrievePeoplesUseCase;
    let mockRetrievePeopleFromApiUseCase;
    beforeEach(() => {
        mockPeopleCreationUseCase = {
            createPeople: jest.fn()
        };
        mockRetrievePeoplesUseCase = {
            execute: jest.fn()
        };
        mockRetrievePeopleFromApiUseCase = {
            execute: jest.fn()
        };
        service = new PeopleRegistryService_1.PeopleRegistryService(mockPeopleCreationUseCase, mockRetrievePeoplesUseCase, mockRetrievePeopleFromApiUseCase);
    });
    it('should create a person correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const peopleData = new PeopleDataSpanishApp_1.PeopleDataSpanishApp({
            id: 2,
            nombre: 'Ana Smith',
            altura: '165',
            masa: '60',
            colorCabello: 'moreno',
            colorPiel: 'blanca',
            colorOjos: 'azules',
            anioNacimiento: '1985',
            genero: 'femenino',
            nombreMundoNatal: 'Marte',
            creado: new Date('2024-01-24T00:00:00Z'),
            editado: new Date('2024-01-24T00:00:00Z')
        });
        const expectedPeople = new People_1.People({
            id: 2,
            name: 'Ana Smith',
            height: '165',
            mass: '60',
            hair_color: 'moreno',
            skin_color: 'blanca',
            eye_color: 'azules',
            birth_year: '1985',
            gender: 'femenino',
            homeworld_name: 'Marte',
            created: new Date('2024-01-24T00:00:00Z'),
            edited: new Date('2024-01-24T00:00:00Z')
        });
        mockPeopleCreationUseCase.createPeople.mockResolvedValue(expectedPeople);
        const result = yield service.createPeople(peopleData);
        expect(mockPeopleCreationUseCase.createPeople).toHaveBeenCalledWith(peopleData);
        expect(result).toEqual(expectedPeople);
    }));
    it('should list people correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockPeoples = [
            new People_1.People({
                id: 1,
                name: 'Juan Pérez',
                height: '170',
                mass: '70',
                hair_color: 'negro',
                skin_color: 'moreno',
                eye_color: 'marrón',
                birth_year: '1990',
                gender: 'masculino',
                homeworld_name: 'Tierra',
                created: new Date('2024-01-23T00:00:00Z'),
                edited: new Date('2024-01-23T00:00:00Z')
            }),
            // ...otros objetos People
        ];
        mockRetrievePeoplesUseCase.execute.mockResolvedValue(mockPeoples);
        const result = yield service.listPeople();
        expect(mockRetrievePeoplesUseCase.execute).toHaveBeenCalled();
        expect(result).toEqual(mockPeoples);
    }));
    it('should retrieve person data from API correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const peopleId = 1;
        const expectedPeopleDataFromApi = new PeopleDataSpanishApp_1.PeopleDataSpanishApp({
            id: 1,
            nombre: 'Juan Pérez',
            altura: '170',
            masa: '70',
            colorCabello: 'negro',
            colorPiel: 'moreno',
            colorOjos: 'marrón',
            anioNacimiento: '1990',
            genero: 'masculino',
            nombreMundoNatal: 'Tierra',
            creado: new Date('2024-01-23T00:00:00Z'),
            editado: new Date('2024-01-23T00:00:00Z')
        });
        mockRetrievePeopleFromApiUseCase.execute.mockResolvedValue(expectedPeopleDataFromApi);
        const result = yield service.getPeopleFromApi(peopleId);
        expect(mockRetrievePeopleFromApiUseCase.execute).toHaveBeenCalledWith(peopleId);
        expect(result).toEqual(expectedPeopleDataFromApi);
    }));
});

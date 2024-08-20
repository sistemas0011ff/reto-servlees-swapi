"use strict";
// repositories/PeopleRepository.ts
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
exports.PeopleRepository = void 0;
const People_1 = require("../../application/dtos/People");
class PeopleRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    save(peopleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPeople = yield this.prisma.people.create({
                data: {
                    name: peopleData.name,
                    height: peopleData.height,
                    mass: peopleData.mass,
                    hair_color: peopleData.hair_color,
                    skin_color: peopleData.skin_color,
                    eye_color: peopleData.eye_color,
                    birth_year: peopleData.birth_year,
                    gender: peopleData.gender,
                    homeworld_name: peopleData.homeworld_name,
                    created: peopleData.created,
                    edited: peopleData.edited
                },
            });
            return newPeople.id.toString();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const people = yield this.prisma.people.findUnique({
                where: { id: id },
            });
            if (people) {
                return new People_1.People(people);
            }
            return null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const peopleList = yield this.prisma.people.findMany();
            return peopleList.map(p => new People_1.People(p));
        });
    }
}
exports.PeopleRepository = PeopleRepository;

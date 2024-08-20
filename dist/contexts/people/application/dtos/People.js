"use strict";
// dtos/People.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
class People {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.height = data.height;
        this.mass = data.mass;
        this.hair_color = data.hair_color;
        this.skin_color = data.skin_color;
        this.eye_color = data.eye_color;
        this.birth_year = data.birth_year;
        this.gender = data.gender;
        this.homeworld_name = data.homeworld_name;
        this.created = data.created;
        this.edited = data.edited;
    }
}
exports.People = People;

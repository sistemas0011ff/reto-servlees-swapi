"use strict";
// dtos/PeopleDataEnglishApp.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleDataEnglishApp = void 0;
class PeopleDataEnglishApp {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.height = data.height;
        this.mass = data.mass;
        this.hairColor = data.hairColor;
        this.skinColor = data.skinColor;
        this.eyeColor = data.eyeColor;
        this.birthYear = data.birthYear;
        this.gender = data.gender;
        this.homeworldName = data.homeworldName;
        this.created = data.created;
        this.edited = data.edited;
    }
}
exports.PeopleDataEnglishApp = PeopleDataEnglishApp;

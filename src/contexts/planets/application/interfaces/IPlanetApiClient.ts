 
import { PlanetDataEnglishApp } from '../dtos/PlanetDataEnglishApp';

export interface IPlanetApiClient {
    getPlanet(planetId: number): Promise<PlanetDataEnglishApp>;
}

import faker from 'faker';
import { Mappable } from './CustomMap';

// (implements Mappable) o implementar la interfaz de la clase principal nos permite ayudar a 
// typescript a poner el error en la ubicacion correcta 
export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())  
        };
    }

    contentMarker(): string {
        return `
            <div>
                Company Name: ${this.companyName}
                CatchPhrase: ${this.catchPhrase}
            </div>
        `;
    }

}
// faker js es un generador de datos falso 'npmjs.com'
import faker from 'faker';
import { Mappable } from './CustomMap';

// (implements Mappable) o implementar la interfaz de la clase principal nos permite ayudar a 
// typescript a poner el error en la ubicacion correcta 
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

// Latitud y Longitud vienen desde el fake api con un valor predeterminado string, para asignarle que sea number,
// debemos de usar la funcion parseFloat
    constructor(){
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    contentMarker(): string {
        return `User Name: ${this.name}`;
    }
}


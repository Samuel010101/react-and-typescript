// CustomMap --> Esta clase la utilizamos para personalizar nuestra app y privatizarla utilizando un metodo private
// de la clase en cuestion para que no se pueda acceder al mismo fuera de esta clase


// Instructions to every other class on how they can be an argument to 'addMarker'
// Todas las clases que cumplan con esta interfaz pueden ser un argumento de la pro
export interface Mappable {
    location: {
        lat: number
        lng: number
    };
    contentMarker(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
         });
    }
    // A este metodo puedo pasarle directamente las clases que pueden ser un argumento de la misma
    // pero utilizando una interfaz generalizar que las clases que cumplan con esta puedan ser un argumento de la misma
    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        // Este metodo sirve para agregar informacion al marker de cada location
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content:  mappable.contentMarker()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }

    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     });
    // }
}
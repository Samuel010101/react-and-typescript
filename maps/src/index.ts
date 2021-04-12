// Estamos usando parcel-bundler para generar un servidor
// Para los archivos ts dentro del src que representan los componentes del proyecto, 
// los class component que seran exportados deben iniciar con letra mayuscula de lo contrario puede iniciar con minuscula


// import { Company } from './Company';

//  const user = new User();
//  console.log(user);

//  const company = new Company();
//  console.log(company);

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
// Instancio la clase CustomMap y le paso el id del index.html
const customMap = new CustomMap('map'); 
// Luego desde la clase CustomMap accedo al metodo addUserMarker y le paso la clase que vamos a llamar desde esta
customMap.addMarker(user);
customMap.addMarker(company);


/**
 * CONVIERTE UN ARREGLO DE SEGUNDO GRADO EN UNO DE PRIMER GRADO
 */
const matriz = [
    [ 1, 2, 3 ],
    [ 4, 5, 6, [1, 2, [1, 2, [4,5]]] ],
    [ 7, 8, 9 ]
];
const rta = matriz.flat( 3 ); 

/** Resolviendo el problema de recurción sin el método flat */
function profundidad( list ) {
    let newList = [];
    if( typeof list != "object" ) return [list];
    list.forEach(element => {
        newList = newList.concat( profundidad( element ) );
    });
    return newList;
}

const newArray = profundidad( matriz );
console.log( 'Sin flat',  newArray);
/**
 * RETORNA EL PRIMER ELEMENTO(Y SOLO ESE) QUE HAGA CUMPLA CON LA CONDICION
 */
const numbers = [ 1, 30, 49, 29, 10, 13 ];

const rta = numbers.find( item => item === 30 );

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];
const rta2 = products.find( item => item.id === '🍔' );
/** FINDINDEX RETORNA LA POCICION DEL ELEMENTO EN EL ARREGLO */
const rta3 = products.findIndex( item => item.id === '🍔' );
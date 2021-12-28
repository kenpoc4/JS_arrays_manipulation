/**
 * CREA UN NUEVO ARREGLO CON LOS ELEMENTOS QUE CUMPLAN CON LA CONDICION
 */
const words = [ 'spray', 'limit', 'elite', 'exuberant' ];

// Filtrando elementos que no sean mayores de 6 letras
const rta = words.filter( item => item.length >= 6 );

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
// Filtrando por ordenes que fueron entregadas y tengan un precio mayor a 100
const rta2 = orders.filter( item => item.delivered && item.total >= 100 );

// Creando un sencillo buscador por medio de filter
const search = ( query ) => {
    return orders.filter( item => {
        return item.customerName.includes( query );
    } );
}
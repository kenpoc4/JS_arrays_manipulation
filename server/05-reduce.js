const totals = [ 1, 2, 3, 4 ];

/**
 * Reduciendo el array con la sintaxis -> reduce( ( sum, element ) => function, init ):
 * sum -> Es un elemento arbitrario
 * element -> Es nuestro item a iterar en el array
 * function -> Es la funcion a realizar
 * init -> Es el valor inicial que sum tendra
 */
const rta = totals.reduce( ( sum, element ) => sum + element, 0 );
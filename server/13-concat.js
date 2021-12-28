/**
 * CONCATENA 2 ARREGLOS EN UNO SOLO, NO ALTERA LOS ARREGLOS SIMPLEMENTE GENERA UNO NUEVO
 */
const elements = [ 1, 1, 2, 2 ];
const othersElements = [ 3, 3, 4, 4 ];

/** concat genera un nuevo arreglo */
const rta = elements.concat( othersElements );
/** push y split-operation cambia el arreglo original */
elements.push( ...othersElements );
/**
 * UNE TODOS LOS ELEMENTOS DE UN ARREGLO Y LO DEVUELVE EN UNA CADENA
 */
const elements = ['fire', 'air', 'water' ];
const rta = elements.join( '--' );

const title = 'Curso de manipulación de arrays';
/** Slit crea una arreglo en base a la cadena de texto, separando cada elemento por el valor asignado */
const urlFinal = title.split( ' ' ).join( '-' ).toLocaleLowerCase(  );
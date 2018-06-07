'use strict'

/**
 * Devuelve un string con la matriz en formato para imprimir con títulos
 * @method get_ImprimirMatriz
 * @param {} matriz
 * @param {} titulo_columnas
 * @param {} titulo_filas
 * @return imp_linea dsfdsfasfsa
 */
function get_ImprimirMatriz( matriz, titulo_columnas, titulo_filas ) {

    let imp_linea = '';

    if (titulo_filas==undefined) {
        let ancho_matriz = 0;
        matriz.forEach(element => {
            ancho_matriz = element.length
        });
        for ( let i = 0; i < matriz.length; i++ ) {
            for ( let j = 0; j < ancho_matriz; j++ ) {
                imp_linea = imp_linea + matriz[i][j] + '\t'    
            }    
            imp_linea = imp_linea + '\n'
        }
    }else{
        imp_linea = '\t'
        titulo_columnas.forEach( titulo_columna => {
            imp_linea = imp_linea + titulo_columna + '\t'
        });
        imp_linea = imp_linea + '\n'
        for ( let i = 0; i < titulo_filas.length; i++ ) {
            imp_linea = imp_linea + titulo_filas[i] + '\t'
            for ( let j = 0; j < titulo_columnas.length; j++ ) {
                imp_linea = imp_linea + matriz[i][j] + '\t'    
            }    
            imp_linea = imp_linea + '\n'
        }
    }
    return imp_linea
}

module.exports.get_ImprimirMatriz = get_ImprimirMatriz;



var matriz = []
var titulo_columnas = []
var titulo_filas = []

matriz.push( [1,2,3,4,5,6] )
matriz.push( [1,2,3,4,5,6] )
matriz.push( [1,2,3,4,5,6] )

titulo_columnas.push( 'F1', 'F2', 'F3', 'F4', 'F5', 'F6' )
titulo_filas.push   ( 'A', 'B', 'C' )

console.log()
var impresion_matriz = get_ImprimirMatriz( matriz, titulo_columnas,titulo_filas )
console.log(impresion_matriz)
var impresion_matriz = get_ImprimirMatriz( matriz )
get_ImprimirMatriz()
console.log(impresion_matriz)



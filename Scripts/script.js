function convertToRoman() {

    num = document.getElementById('frase').value;

    let RomArab = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        romanos = "",
        x;/* Definicion de variables, con el objeto de los numeros romanos y sus propiedades */

    for (x in RomArab) { /* Busqueda de las propiedades en la variable RomArab */
        while (num >= RomArab[x]) { /* Mientras que el input sea mas grande que la propiedad en RomArab */
            romanos += x; /*romanos se establece en lo que sea x*/
            num -= RomArab[x]; /* Quita el primer numero que encuentre que sea menor que el input, agrega el valor de X y lo elimina del Input, y asi sucesivamente hasta que desciende a 0 lo que activa el bucle while para que se detenga*/


        }
    }
    return romanos;
}

function recogerDatos() {
    num = document.getElementById('frase').value;
    respues = convertToRoman(num);
    swal ('Su numero es', `${respues}`, 'success')
}


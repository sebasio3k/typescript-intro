export let name: string | boolean = "Sebastian";
export const age: number = 25;
export const isValid: boolean = true;

name = true;
name = 'Sebas';

console.log("isValid", isValid);

export const templateString = `Esto es un string
multilinea 
que puede tener
" dobles
' simple
intectar valores ${name}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}`;

console.log('templateString', templateString)

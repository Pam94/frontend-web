const i: 3 = 3;
i = 4; // Error TS2322: Type '4' is not assignable to type '3'
//La variable i se está especificando que es de tipo "3", por lo que no será válido asignarle ningún otro valor

const j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
//La variable j es un array de elementos de tipo number, por ello no será válido asignarle un elemento de tipo string

let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
//La variable k es de tipo never, siendo éste un subtipo de TypeScript, por lo que sólo es asignable de forma válida a sí mismo.

let l: unknown = 4;
let m = l * 2; // Error TS2571: Object is of type 'unknown'.
//La variable l es de tipo unknow, por lo que sólo permitirá realizar operaciones sobre ella después de definir y refinar alguno de sus atributos y operaciones permitidas
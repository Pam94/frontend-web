let n: number = 1; // 1 es asignable a una variable de tipo number
let uno: 1 = n; // un tipo number NO es asignable a una variable de tipo 1
n = 1; //Sin embargo, un tipo 1 si es asignable a un tipo number, ya que es englobado por este 

let ns: (number | string) = 'a'; //es posible porque corrobora una de las restricciones del tipo, que es ser string

n = true; //true es un valor booleano que no es asignable a una variable de tipo number

let ans: (number | string)[] = [1, 2, 3];// es posible ya que el array de numeros valida una de las restricciones del tipo, si fuese un array de strings también sería válido, pero si fuese un array de booleanos, ya no

let an: number[] = ans; //no es posible ya que el tipo de array de numeros es mas restrictivo que el tipo de ans, que podría almacenar un array de strings, siendo esto inválido para la asignación

let tr: true = true;
let bool: boolean = false;
let object = { a: tr };
let objectB = { a: bool };
objectB = object;//la asignación es posible, ya que ambos son de tipo boolean, aunque el segundo es más restrictivo

let objectA = { a: { b: ['a', 'b', 'c'] } };
let objectAN = { a: { b: ['a', 1, 2, 'b'] } };
objectAN = objectA;//es asignable, porque es más restrictivo y por tanto permite que el atributo b contenta un array de elementos de tipo string, si fuesen de tipo number también sería válido, y si fuesen de ambos tipo lo mismo

let numbertoString = (a: number) => { return ""; }
let numbertoStringb = (b: number) => { return ""; }
numbertoString = numbertoStringb;
//La asignación es posible ya que ambas variables tienen el mismo tipo de entrada que de salida

let stringtoString = (a: string) => { return ""; }
numbertoString = stringtoString;
//No es asignable debido a que los tipos de sus parámetros no son compatibles, en este caso number y string no se pueden asignar entre ellos

let numberStoString = (a: number | string) => { return ""; }
numberStoString = stringtoString;
//Es asignable debido a que esta vez el tipo del elemento de la izquierda de la asginación es más flexible y admite un parametro de tipo number y string
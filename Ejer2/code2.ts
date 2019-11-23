const a = 1042; //-> al ser una variable constante, es del tipo de su valor,                         sin embarjo si dejase de serlo, sería de tipo number
const b = 'apples and oranges'; //-> al ser una variable constante, es del tipo                                      de su valor, sin embarjo si dejase de                                           serlo, sería de tipo string
const c = 'pineapples'; //-> El mismo caso que el anterior
const d = [true, true, false]; //-> array de elementos de tipo boolean ya que                                       es una secuencia de valores booleanos, 
const e = { type: 'ficus' };// -> su tipo es un objeto, concretamente con las                                     mismas propiedades que el valor que se le                                       asigna. Lo interpreta como un objeto por                                        estar definido entre llaves
const f = [1, false]; //-> array de valores que pueden ser o de tipo number o                              de tipo boolean. Para que fuese una tupla, habría                               que indicarlo de forma explícita
const g = [3]; //-> array de elementos de tipo number, por la notación de                           corchetes
const h = null; //-> elemento del tipo any, al no especificarle ningún valor,                        TypeScript infiere el tipo any por defecto
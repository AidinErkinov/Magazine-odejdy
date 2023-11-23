"use strict";

var glo = 'academy';
var age = 2;
var name = "daniil";

function func1() {
    var name = "fghlhjtyhp";
    surname = "Apple";
    var surname = void 0;
    if (true) {
        console.log(name);
    }
    console.log(name);
}
/* hoisting важно для интеревью. Вобщем можно написать прееменную и потом ей дать значение. let внутри блока имеет значение этого блока*/

function func2() {
    var name;
    surname = "Dewa";
    var surname = void 0;
    if (true) {
        console.log(name);
    }
    console.log(name);
}

func1();
func2();
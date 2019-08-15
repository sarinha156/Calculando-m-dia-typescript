var n1 = 10;
var n2 = 4;
//let n3: number  = 9
//---------- MODO FUNCTION SIMPLES SEM UM PARAMETRO ------------
var fmedia = function (n1, n2, n3) {
    if (n3 === void 0) { n3 = 7; }
    return (n1 + n2 + n3) / 3;
};
console.log("Sua media e : " + fmedia(n1, n2));
/* ---------- MODO FUNCTION SIMPLES ------------
let fmedia = (n1:number,n2:number, n3:number) => (n1+n2+n3)/3

console.log(`Sua media e : ${fmedia (n1,n2,n3)}`)


---------- MODO SEM FUNCTION SIMPLES ---------------
let media = (n1+n2+n3)/3

if (media >= 7) {
    console.log("Aprovado, sua média é  "+ media)
    
}
else {
    console.log("Reprovado, sua média é  "+ media)
}

---------- MODO COM FUNCTION COMPLICADO ------------

let fmedia = function(n1:number,n2:number, n3:number):number{
    return (n1+n2+n3)/3
}
console.log(`Sua media e : ${fmedia (n1,n2,n3)}`)*/ 

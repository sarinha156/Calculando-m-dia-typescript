let n1: number =  8
let n2: number = 4
let n3: number  = 9
/*let media = (n1+n2+n3)/3

if (media >= 7) {
    console.log("Aprovado, sua média é  "+ media)
    
} 
else {
    console.log("Reprovado, sua média é  "+ media)
}
*/
let fmedia = function(n1:number,n2:number, n3:number):number{
    return (n1+n2+n3)/3
}
console.log(`Sua media e : ${fmedia (n1,n2,n3)}`)
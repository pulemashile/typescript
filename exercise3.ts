var calculator= (a:number,b:number) :number=>{
    return a+b
}

console.log(calculator(3,2));
    

var fixednumber= () :number=>{
    return 8
}
var result = fixednumber();
console.log(result); 

  
function STRINGCHECK(str: string, toUppercase?: boolean): string {
    if (toUppercase === true) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  console.log(STRINGCHECK("PULE"));
  console.log(STRINGCHECK("BEGINNER", true));
  console.log(STRINGCHECK("HELLO", false)); 

  
  
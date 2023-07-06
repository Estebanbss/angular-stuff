

function addNumbers(a:number,b:number){

                      return a+b;
}

const addNumebrsArrow = (a:number,b:number):string=>{
                      return (`${a + b}`);
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ){
                      return firstNumber*base;
}
const result: number = addNumbers(1,2);
const result2: string = addNumebrsArrow(1,2);
const multiplyResult: number = multiply(5);

console.log({result,result2,multiplyResult})



 

export{};
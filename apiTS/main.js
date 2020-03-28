const calculator = require("../api/calculator_API").default;

let calc = new calculator();

calc.Result(result=>{
    console.log(result);
    
})

calc.setNUmber(2,result=>{
    console.log(result);
    
});

calc.setOperation(calc.Addition,result=>{
    console.log(result);
    
})
// calc.setOperation(calc.Multiplication,result=>{
//     console.log(result);
    
// })

calc.setNUmber(5,result=>{
    console.log(result);
    
});

// calc.setOperation(calc.Addition,result=>{
//     console.log(result);
    
// })

calc.Result(result=>{
    console.log(result);
    
})











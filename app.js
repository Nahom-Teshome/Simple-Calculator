const textField = document.querySelector("#view-textarea")
const addBtn = document.querySelector("#op-add")
const subBtn = document.querySelector("#op-sub")
const mulBtn = document.querySelector("#op-mul")
const divBtn = document.querySelector("#op-div")
const clearBtn = document.querySelector("#op-clear")
const equalsBtn = document.querySelector("#op-equals")
//numbers
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const num3 = document.querySelector("#num3")
const num4 = document.querySelector("#num4")
const num5 = document.querySelector("#num5")
const num6 = document.querySelector("#num6")
const num7 = document.querySelector("#num7")
const num8 = document.querySelector("#num8")
const num9 = document.querySelector("#num9")
const num0 = document.querySelector("#num0")
const point = document.querySelector("#point")

let clicked = true
let numb1 = []
let numb2 = []
let operands =" "

addBtn.addEventListener("click",add)
subBtn.addEventListener("click",sub)
mulBtn.addEventListener("click",mul)
divBtn.addEventListener("click",div)
clearBtn.addEventListener("click",function(){
    textField.value = " "
    clicked = true
    numb1 = []
    numb2 = []
})
equalsBtn.addEventListener("click",getNumber)

function getNumber()
{
    clicked = true
    numb1 = []
    numb2 = []
    operands = textField.value

        for(let i = 0; i < operands.length; i++)
            {
                if(clicked)
                    {
                    
                        if(operands[i]=== "+" || operands[i]=== "-" ||  operands[i]=== "*" ||  operands[i]=== "/")
                            {clicked = false
                                continue
                            }numb1 += operands[i]
                }
                if(!clicked)
                    {
                        numb2 += operands[i]
                    }
                
            }     
}
equalsBtn.addEventListener("click",function(number1,number2){
    if(textField.value.includes("+")){
     textField.value = add(numb1,numb2)
    }
    else if(textField.value.includes("-")){
   textField.value = sub(numb1,numb2)
    }
    else if(textField.value.includes("*")){
   textField.value = mul(numb1,numb2)
    }
    else if(textField.value.includes("/")){
   textField.value = div(numb1,numb2)
    }
    else{textField.value = 0}

console.log(numb1,numb2)

})




function add(number1,number2){
    textField.value += "+"
   return Number(number1) + Number(number2)
}
function sub (number1,number2){
    textField.value += "-"
    return Number(number1) - Number(number2)
}
function mul (number1,number2){
    textField.value += "*"
    return Number(number1) * Number(number2)
}
function div(number1,number2){
    textField.value += "/"
    return ( Number(number1) / Number(number2)).toFixed(5)
}

num1.addEventListener("click",function(){
    textField.value += num1.innerHTML
})
num2.addEventListener("click",function(){
    textField.value += num2.innerHTML
})
num3.addEventListener("click",function(){
    textField.value += num3.innerHTML
})
num4.addEventListener("click",function(){
    textField.value += num4.innerHTML
})
num5.addEventListener("click",function(){
    textField.value += num5.innerHTML
})
num6.addEventListener("click",function(){
    textField.value += num6.innerHTML
})
num7.addEventListener("click",function(){
    textField.value += num7.innerHTML
})
num8.addEventListener("click",function(){
    textField.value += num8.innerHTML
})
num9.addEventListener("click",function(){
    textField.value += num9.innerHTML
})
num0.addEventListener("click",function(){
    textField.value += num0.innerHTML
})
point.addEventListener("click",function(){
    textField.value += point.innerHTML
})
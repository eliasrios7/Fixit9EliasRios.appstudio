
num1 = ""
num2 = ""

btnAdd.onclick=function(){
  num1 = Number(inptNum1.value)
  num2 = Number(inptNum2.value)
  sum = num1 + num2
  lblAnswer.value = sum
}

btnMultiply.onclick=function(){
  num3 = Number(inptNum1.value)
  num4 = Number(inptNum2.value)
  sum2 = num3 * num4
  lblAnswer.value = sum2
}

btnReset.onclick=function(){
  inptNum1.value = ""
  inptNum2.value = ""
  lblAnswer.value = ""
}

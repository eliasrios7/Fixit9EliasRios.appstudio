
dropdownYear.onclick=function(s){
  if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(dropdownYear.selection);
}

checkboxExp.onclick=function(){
var schoolYear = "Year: ";
    for (i = 0; i <= checkboxExp.length - 1; i++) {
        if (checkboxExp.getValue(i)) {
            schoolYear = schoolYear + i;
        }
    }
    NSB.MsgBox(schoolYear);
}


var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
memberSubmit = ""

bttnSubmit.onclick=function(){
  memberSubmit = inptFirstName.value
  if (memberSubmit === "Mary" || "Sam" || "Joey" || "Paul" || "Mike" || "Char" || "Jenny" || "Kennedy" || "Kaden" || "Kurt" || "Anne")
    lblMemberMessage.value = "You are a member!"
  else    
    lblMemberMessage.value = "You were not previously a member. Your name has been added to the list."
    members.pop(memberSubmit)
}

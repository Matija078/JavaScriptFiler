function Helloworld(){
    console.log("Hello world")
}
Helloworld();
function functionMedParameter1(text){
    console.log(text)
}
Helloworld();

function functionMedParameter2(text,text2){
    return text +" "+text2;
}
let nav = functionMedParameter2("Matija","Jovanovic");
functionMedParameter1(nav);
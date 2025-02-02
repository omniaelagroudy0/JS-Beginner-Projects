let btn= document.getElementsByTagName("body")
let count = 0
let colors=["red","black","yellow","white","orange","pink","grey","purple","blue","lightblue",""];
function changeColor(){
btn[0].style.background= colors[count]
count++
if(count>(colors.length-1))
{
    count=0
}
}
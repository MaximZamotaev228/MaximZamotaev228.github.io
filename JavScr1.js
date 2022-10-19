function onClick()
{
var kolvo=document.getElementById("kolvo").value;
var cena=document.getElementById("cena").value;
var resultat=document.getElementById("resultat");
var i;
var j;
 resultat.innerHTML = "";
i = kolvo;
j = cena;
if (i>0 && i!=NaN && j>0 && j!=NaN)
resultat.innerHTML=i*j;       
}
window.document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    var j = document.getElementById("butn");
    j.addEventListener("click", onClick);
});

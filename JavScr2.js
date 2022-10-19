function onClick(){
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


var document;
var window;
var alert;
var console;

function updatePrice() {
    var koltovara = document.getElementById("koltovara").value;
    var L = document.getElementsByName("prodType");
    var select = L[0];
    var price;
    var optionPrice;
    var checkDiv;
    var propPrice;
    var prodPrice;
    var checkboxes;
    var prices = getPrices();
    var priceIndex = parseInt(select.value) - 1;
    var radioDiv = document.getElementById("radios");
    var radios = document.getElementsByName("prodOptions");
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    if (select.value === "3" || select.value === "1") {
        radioDiv.style.display = "none";
    } else {
        radioDiv.style.display = "block";
    }
    radios.forEach(function (radio) {
        if (radio.checked) {
            optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });


    checkDiv = document.getElementById("checkboxes");
    if (select.value === "2" || select.value === "1") {
        checkDiv.style.display = "none";
    } else {
        checkDiv.style.display = "block";
    }


    checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });

    prodPrice = document.getElementById("resultat_2");
    prodPrice.innerHTML = (price * koltovara);
    if (/\D/.test(koltovara)) {
        prodPrice.innerHTML = "Неверные данные";
    }
}

function getPrices() {
    return {
        prodOptions: {
            option2: 10,
            option3: 20
        },
        prodProperties: {
            prop1: 5
        },
        prodTypes: [100, 200, 300]
    };
}

window.addEventListener("DOMContentLoaded", function () {

    var radioDiv = document.getElementById("radios");
    var L;
    var select;
    var radios;
    var checkboxes;
    var koltovara;
    radioDiv.style.display = "none";


    L = document.getElementsByName("prodType");
    select = L[0];

    select.addEventListener("change", function () {
        updatePrice();
    });


    radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            updatePrice();
        });
    });


    checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updatePrice();
        });
    });

    koltovara = document.getElementById("koltovara");
    koltovara.oninput = function () {
        updatePrice();
    };

    updatePrice();
});

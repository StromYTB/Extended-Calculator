const display = document.getElementById("display");
const displayPower = document.getElementById("displayPower");
do{

    var email = prompt("Jaký je email? (Je to email)");
    var password = prompt("Jaké je heslo? (Je to heslo)");

}while(password !== "heslo" && email !== "email"){7

    alert("správně")
};

function appendToDisplay(input){
    display.value += input;
}

function squareRoot(){

    display.value = Math.sqrt(display.value);

}

function power(){
    display.value = Math.pow(display.value, displayPower.value)
}

function pos_to_neg() {

    display.value = -Math.abs(display.value);

}; 

function neg_to_pos() {

    display.value = +Math.abs(display.value);

}; 

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function refresh(){
    location.reload()
}





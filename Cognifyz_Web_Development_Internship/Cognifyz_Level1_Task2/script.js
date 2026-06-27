// Button Color Change

function changeColor(){

    let btn=document.getElementById("colorButton");

    if(btn.style.backgroundColor=="red"){

        btn.style.backgroundColor="#0077cc";
        btn.innerHTML="Click Here";

    }

    else{

        btn.style.backgroundColor="red";
        btn.innerHTML="Color Changed";

    }

}



// Greeting Alert

function showGreeting(){

    let hour=new Date().getHours();

    if(hour<12){

        alert("Good Morning!");

    }

    else if(hour<18){

        alert("Good Afternoon!");

    }

    else{

        alert("Good Evening!");

    }

}



// Calculator

function add(){

    let a=parseFloat(document.getElementById("num1").value);

    let b=parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML="Addition : "+(a+b);

}

function subtract(){

    let a=parseFloat(document.getElementById("num1").value);

    let b=parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML="Subtraction : "+(a-b);

}

function multiply(){

    let a=parseFloat(document.getElementById("num1").value);

    let b=parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML="Multiplication : "+(a*b);

}

function divide(){

    let a=parseFloat(document.getElementById("num1").value);

    let b=parseFloat(document.getElementById("num2").value);

    if(b==0){

        document.getElementById("result").innerHTML="Cannot Divide By Zero";

    }

    else{

        document.getElementById("result").innerHTML="Division : "+(a/b);

    }

}
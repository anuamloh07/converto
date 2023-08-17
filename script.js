

// function C2F(){
//     fahrenheit= (9/5 * celsius)+32;
// }

// function F2C(){
//     celsius= (fahrenheit-32)*5/9;
// }

// function C2K(){
//     kelvin=celsius+273;
// }

// function K2C(){
//     celsius = kelvin-273;
// }

// document.getElementById('submit'){
//     onclick=celsius;
// }

// document.getElementById('converted').innerHTML=celsius;

// document.getElementById(''){

// }








// document.getElementById('submit').onclick=function(){
//     var fahrenheit = document.getElementById('fahrenheit').value;
//     var celsius = document.getElementById('celsius').value;
//     var kelvin = document.getElementById('kelvin').value;

//     if(celsius!='' && fahrenheit =='' && kelvin==''){

//         fahrenheit= (9/5 * celsius)+32;
//         kelvin=celsius + 273;
//         console.log(fahrenheit,kelvin);
    
//         document.getElementById('c').innerHTML="The temperature in celsius is:" + " " + celsius;
//         document.getElementById('f').innerHTML="The temperature in fahrenheit is:" + " " + fahrenheit;
//         document.getElementById('k').innerHTML="The temperature in kelvin is:" + " " + kelvin;
    
//         console.log(fahrenheit);
//         console.log(kelvin);
//     }

//     else if(celsius=='' && fahrenheit !='' && kelvin==''){
        
//         celsius= (fahrenheit-32)*5/9;
//         kelvin=celsius + 273;
//         console.log(celsius,kelvin);
    
//         document.getElementById('c').innerHTML="The temperature in celsius is:" + " " + celsius;
//         document.getElementById('f').innerHTML="The temperature in fahrenheit is:" + " " + fahrenheit;
//         document.getElementById('k').innerHTML="The temperature in kelvin is:" + " " + kelvin;
//     }

//     else if(celsius=='' && fahrenheit =='' && kelvin!='' && kelvin>0){

//         celsius= kelvin-32;
//         fahrenheit= (9/5 * celsius)+32;
//         console.log(celsius, fahrenheit);
    
//         document.getElementById('c').innerHTML="The temperature in celsius is:" + " " + celsius;
//         document.getElementById('f').innerHTML="The temperature in fahrenheit is:" + " " + fahrenheit;
//         document.getElementById('k').innerHTML="The temperature in kelvin is:" + " " + kelvin;
//     }
// }



document.getElementById('submit').onclick = function () {
    var fahrenheitInput = parseFloat(document.getElementById('fahrenheit').value);
    var celsiusInput = parseFloat(document.getElementById('celsius').value);
    var kelvinInput = parseFloat(document.getElementById('kelvin').value);

    if (!isNaN(celsiusInput) && isNaN(fahrenheitInput) && isNaN(kelvinInput)) {
        var fahrenheit = ((celsiusInput * 9/5) + 32).toFixed(2);
        var kelvin = (celsiusInput + 273.15).toFixed(2);

        document.getElementById('c').innerHTML = "The temperature in celsius is: " + celsiusInput;
        document.getElementById('f').innerHTML = "The temperature in fahrenheit is: " + fahrenheit;
        document.getElementById('k').innerHTML = "The temperature in kelvin is: " + kelvin;
    }

    else if (isNaN(celsiusInput) && !isNaN(fahrenheitInput) && isNaN(kelvinInput)) {
        var celsius = ((fahrenheitInput - 32) * 5/9);
        var kelvin = (celsius + 273.15).toFixed(2);

        document.getElementById('c').innerHTML = "The temperature in celsius is: " + celsius;
        document.getElementById('f').innerHTML = "The temperature in fahrenheit is: " + fahrenheitInput;
        document.getElementById('k').innerHTML = "The temperature in kelvin is: " + kelvin;
    }

    else if (isNaN(celsiusInput) && isNaN(fahrenheitInput) && !isNaN(kelvinInput) && kelvinInput > 0) {
        var celsius = (kelvinInput - 273.15).toFixed(2);
        var fahrenheit = ((celsius * 9/5) + 32).toFixed(2);

        document.getElementById('c').innerHTML = "The temperature in celsius is: " + celsius;
        document.getElementById('f').innerHTML = "The temperature in fahrenheit is: " + fahrenheit;
        document.getElementById('k').innerHTML = "The temperature in kelvin is: " + kelvinInput;
    }
};


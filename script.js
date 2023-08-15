

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

document.getElementById('submit').onclick=function(){
    var celsius=document.getElementById('celsius').value;
    var fahrenheit //=document.getElementsById('fahrenheit').value;
    var kelvin  //=document.getElementById('kelvin').value;
    fahrenheit= (9/5 * celsius)+32;
    var c=document.getElementById('celsius').value;
    c+=273;
    console.log(c);

    kelvin=c;

    document.getElementById('f').innerHTML="The temperature in fahrenheit is:" + "" + fahrenheit;
    document.getElementById('k').innerHTML="The temperature in kelvin is:" + "" + kelvin;

    console.log(fahrenheit);
    console.log(kelvin);

}

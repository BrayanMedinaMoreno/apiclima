let laTemperatura=0
let ciudad =''
let humedad=0
let descripcion=''
let velocidadViento=0
let elClima= ''
let laCiudad=''


const clima =()=>{
  ciudad=document.getElementById('ciudad').value.toLowerCase()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=db39f52d74cf53d87dcfed725fcd5257`)
  .then(response=> response.json()) .then(res=> {console.log(res);
  laTemperatura=Math.round(res.main.temp- 273.15 )
  humedad=res.main.humidity
  descripcion=res.weather[0].description
  velocidadViento=res.wind.speed
  laCiudad=res.name
  document.getElementById("div1").innerHTML=`Temperatura es de: ${laTemperatura} grados <br> Humedad: ${humedad} g/m<sup>3</sup> <br> Velocidad del viento : ${velocidadViento} m/s <br> Ciudad: ${laCiudad}`
  })
}
//
let texto = document.getElementById('ciudad');
// teclas 
document.addEventListener('keydown', (event) => {
  if (event.keyCode == 81) {
    btnq();
  }else if (event.keyCode == 87) { 
    btnw();
  }else if (event.keyCode == 69) { 
    btne();
  }else if (event.keyCode == 82) { 
    btnr();
  }else if (event.keyCode == 84) { 
    btnt();
  }else if (event.keyCode == 89) {
    btny();
  }else if (event.keyCode == 85) {  
    btnu();
  }else if (event.keyCode == 73) {
    btni();
  }else if (event.keyCode == 79) {
    btno();
  }else if (event.keyCode == 80) {
    btnp();
  }else if (event.keyCode == 65) {
    btna();
  }else if (event.keyCode == 83) {
    btns();
  }else if (event.keyCode == 68) {
    btnd();
  }else if (event.keyCode == 70) {
    btnf();
  }else if (event.keyCode == 71) {
    btng();
  }else if (event.keyCode == 72) {
    btnh();
  }else if (event.keyCode == 74) {
    btnj();
  }else if (event.keyCode == 75) {
    btnk();
  }else if (event.keyCode == 76) {
    btnl();
  }else if (event.keyCode == 192) {
    btnñ();
  }else if (event.keyCode == 90) {
    btnz();
  }else if (event.keyCode == 88) {
    btnx();
  }else if (event.keyCode == 67) {
    btnc();
  }else if (event.keyCode == 86) {
    btnv();
  }else if (event.keyCode == 66) {
    btnb();
  }else if (event.keyCode == 78) {
    btnn();
  }else if (event.keyCode == 77) {
    btnm();
  // end
  }else if (event.keyCode == 8) { 
    btnlimpiar();
  }else if (event.keyCode == 13) {
    clima();
  }
    console.log(event.keyCode);
  }); 
  // funciones
const btnq = () => {
  texto.value += "q";
  return texto.value;
}
const btnw = () => {
  texto.value += "w";
  return texto.value;
}
const btne = () => {
  texto.value += "e";
  return texto.value;
}
const btnr = () => {
  texto.value += "r";
  return texto.value;
}
const btnt = () => {
  texto.value += "t";
  return texto.value;
}
const btny = () => {
  texto.value += "y";
  return texto.value;
}
const btnu = () => {
  texto.value += "u";
  return texto.value;
}
const btni = () => {
  texto.value += "i";
  return texto.value;
}
const btno = () => {
  texto.value += "o";
  return texto.value;
}
const btnp = () => {
  texto.value += "p";
  return texto.value;
}
const btna = () => {
  texto.value += "a";
  return texto.value;
}
const btns = () => {
  texto.value += "s";
  return texto.value;
}
const btnd = () => {
  texto.value += "d";
  return texto.value;
}
const btnf = () => {
  texto.value += "f";
  return texto.value;
}
const btng = () => {
  texto.value += "g";
  return texto.value;
}
const btnh = () => {
  texto.value += "h";
  return texto.value;
}
const btnj = () => {
  texto.value += "j";
  return texto.value;
}
const btnk = () => {
  texto.value += "k";
  return texto.value;
}
const btnl = () => {
  texto.value += "l";
  return texto.value;
}
const btnñ = () => {
  texto.value += "ñ";
  return texto.value;
}
const btnz = () => {
  texto.value += "z";
  return texto.value;
}
const btnx = () => {
  texto.value += "x";
  return texto.value;
}
const btnc = () => {
  texto.value += "c";
  return texto.value;
}
const btnv = () => {
  texto.value += "v";
  return texto.value;
}
const btnb = () => {
  texto.value += "b";
  return texto.value;
}
const btnn = () => {
  texto.value += "n";
  return texto.value;
}
const btnm = () => {
  texto.value += "m";
  return texto.value;
}
const btnlimpiar = () => {
  texto.value = texto.value.substring(0, texto.value.length - 1);
  return texto.value;
}
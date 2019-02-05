var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");

var fondo = {
  url:"tile.png",
  cargaOk: false
}
var vaca = {
  url:"vaca.png",
  cargaOk: false
};
var cerdo = {
  url:"cerdo.png",
  cargaOk: false
}


var cantidad = aleatorio(0, 10);
var cantidadC = aleatorio(0, 5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}



function dibujar()
{
  if (fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk)
  {
    console.log(cantidad);
    for (var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0,5);
      var y = aleatorio(0,5);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOk)
  {
    console.log(cantidadC);
    for (var c=0; c < cantidadC; c++)
    {
      var x = aleatorio(0,5);
      var y = aleatorio(0,5);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

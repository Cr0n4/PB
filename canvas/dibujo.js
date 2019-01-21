
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea('#90CAF9', 0, 0, 10, 300);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

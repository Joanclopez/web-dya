//document.querySelector("body").style.height = "100%";
document.querySelector("#contenedor").style.height = "100%";
			
var escenas = document.querySelectorAll(".escena");
for (var i = 0, tamanio = escenas.length; i < tamanio; i++)
	escenas[i].style.height = window.innerHeight + "px";

window.onscroll = function(evento) {
	console.log(evento.pageY);
	document.querySelector("#simbolo").style.backgroundPosition = "0px " + -(evento.pageY / 1.5) + "px";

	if (evento.pageY > 500)
		document.querySelector("#sol").style.display = "none";

	if (evento.pageY < 500)
	{
		document.querySelector("#sol").style.display = "inline";
		document.querySelector("#sol").style.transform = "scale(1)";
	}
		

	if (evento.pageY > 2500)
	{
		document.querySelector("#sol").style.display = "inline";
		document.querySelector("#sol").style.transform = "scale(2)";
	}
		

	if (evento.pageY >= 1854)
		document.querySelector("#nave-completa").style.top = "67%";

}
var tablero,direccion;
var fondo={
	imagenURL:"images/fondo.png",
	imagenOk:false
};
var tifis={
	x:100,
	y:100,
	frenteURL:"images/diana-frente.png",
	frenteOK:false,
	atrasURL:"images/diana-atras.png",
	atrasOK:false,
	derURL:"images/diana-der.png",
	derOK:false,
	izqURL:"images/diana-izq.png",
	izqOK:false,
	velocidad:20
};
var liz={
	x:400,
	y:200,
	lizURL:"images/liz.png",
	lizOK:false
};
var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};
function inicio(){
	var canvas=document.getElementById("campo");
	tablero=canvas.getContext("2d");

	fondo.imagen=new Image();
	fondo.imagen.src=fondo.imagenURL;
	fondo.imagen.onload=confirmarFondo;	//evento de carga de la imagen
									//sin parentesis para que no cargue inmediatamente
	tifis.frente=new Image();
	tifis.frente.src=tifis.frenteURL;
	tifis.frente.onload=confirmarFrente;

	tifis.atras=new Image();
	tifis.atras.src=tifis.atrasURL;
	tifis.atras.onload=confirmarAtras;

	tifis.izq=new Image();
	tifis.izq.src=tifis.izqURL;
	tifis.izq.onload=confirmarIzq;

	tifis.der=new Image();
	tifis.der.src=tifis.derURL;
	tifis.der.onload=confirmarDer;

	liz.lizy=new Image();
	liz.lizy.src=liz.lizURL;
	liz.lizy.onload=confirmarLiz;



	document.addEventListener("keydown",teclado);


}
function teclado(datos){
	var codigo=datos.keyCode;
	if(codigo==teclas.UP){

		tifis.y-=tifis.velocidad;
	}
	if(codigo==teclas.DOWN){
		if(tifis.y<300){
			tifis.y+=tifis.velocidad;
		}
		
	}
	if(codigo==teclas.LEFT){
		tifis.x-=tifis.velocidad;
	}
	if(codigo==teclas.RIGHT){
		tifis.x+=tifis.velocidad;
	}
	direccion=codigo;
	dibujar();
}
function confirmarLiz(){
	liz.lizOK=true;
	dibujar();
}
function confirmarFondo(){
	fondo.imagenOk=true;
	dibujar();
}
function confirmarFrente(){
	tifis.frenteOK=true;
	dibujar();
}
function confirmarAtras(){
	tifis.atrasOK=true;
	dibujar();
}
function confirmarIzq(){
	tifis.izqOK=true;
	dibujar();
}
function confirmarDer(){
	tifis.derOK=true;
	dibujar();
}
function dibujar(){
	//dibujamos el fondo
	if(fondo.imagenOk==true){
		tablero.drawImage(fondo.imagen,0,0);

	}
	var tifiDibujo=tifis.frente;
	//Tifis
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK){
		if(direccion==teclas.UP){
			tifiDibujo=tifis.atras;
		}
		if(direccion==teclas.DOWN){
			tifiDibujo=tifis.frente;
		}
		if(direccion==teclas.LEFT){
			tifiDibujo=tifis.izq;
		}
		if(direccion==teclas.RIGHT){
			tifiDibujo=tifis.der;
		}

		tablero.drawImage(tifiDibujo,tifis.x,tifis.y);
	}
	//liz
	if(liz.lizOK){
		tablero.drawImage(liz.lizy,liz.x,liz.y);
	}

}

	

//cada vez que hagamos un cambio->dibujarlo todo
// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
$('#btnjugar').on ('click',function(){

	var pantalla=$.mobile.getScreenHeight();
	var encabezado=$('.ui-header').outerHeight();
	var pie=$('.ui-footer').outerHeight();
	var contenido=$('.ui-content').outerHeight();
	//alert ('pantalla ' + pantalla);
	//alert ('encabezado ' + encabezado);
	//alert ('pie' + pie);
	//alert ('contenido ' + contenido);
	var alto=(pantalla-encabezado-pie)/2;
	$('.cuadro').height(alto);
	
	
	
});//btnjugar


$('.cuadro').on ('mousedown', function(){
	$(this).addClass('pulsado');	
    });	
	
	$('.cuadro').on ('mouseup', function(){
	$(this).removeClass('pulsado');	
    });	
	function quien (q)
	{ return q.substring (1);
	}
	$('.cuadro').on('mousedown', function() {
		$('#pantalla').append(quien($(this).attr('id')));
	});
});//cuadro

//});


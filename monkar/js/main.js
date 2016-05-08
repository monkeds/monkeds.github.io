//eventos
var _ID_USER;

$('document').ready(function(){
	loadComponents();
});



function loadComponents(){
	$('.ui.dropdown').dropdown({
	    allowAdditions: true
	});
	$('.ui.checkbox').checkbox();
	
	///
	$('.link.dropdown').dropdown({
		action: 'hide'
		});

	$('.accordion').accordion();
	
	$('.progress').progress();

	$('.modal').modal();

	
	//menus laterales
	$('#wrapper>#content>#left_content>nav .item').tab({
		context:$("#wrapper>#content>#center_content")
	});


	$('.tabContainer>.menu>.item:not(.disabled)')
	.tab({
		context: $('.tabContainer')
	});


	$('#btnContact').click(function(){
		$('#contactModal').modal("show");
	});
}


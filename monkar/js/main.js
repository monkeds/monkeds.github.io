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
	$('.dropdown').dropdown();

	$('.accordion').accordion();
	
	$('.progress').progress();


	//menus laterales
	$('#wrapper>#content>#left_content>nav .item').tab({
		context:$("#wrapper>#content>#center_content")
	});

}

var _tipoPrenda='R';
var _colorFondo='R';
var _colorCuello='R';
var _colorManga='R';
var _tipoManga='R';

function initComponents(){
    //FORMULARIO
    $('#checkTipoPrenda').change(function(){
        $('#wrapTipoPrenda').toggleClass('d-none', $(this).is(':checked'));
    });
    $('#checkColorFondo').change(function(){
        $('#wrapColorFondo').toggleClass('d-none', $(this).is(':checked'));
    });
    $('#checkManga').change(function(){
        $('#wrapManga').toggleClass('d-none', $(this).is(':checked'));
    });
    $('#checkColorCuello').change(function(){
        $('#wrapColorCuello').toggleClass('d-none', $(this).is(':checked'));
    });
}
function readParameters(){

    if($('#checkTipoPrenda').is(':checked')){
        _tipoPrenda='R';
    }else{
        if($('#checkTipoPrendaOption').is(':checked')){
            _tipoPrenda='C';
        }else{
            _tipoPrenda='P';
        }
    }

    if($('#checkColorFondo').is(':checked')){
        _colorFondo='R';
    }else{
        if($('#checkColorFondoOption').is(':checked')){
            _colorFondo='G';
        }else{
            _colorFondo='S';
        }
    }


    if($('#checkColorCuello').is(':checked')){
        _colorCuello='R';
    }else{
        if($('#checkColorCuelloOption').is(':checked')){
            _colorCuello='Y';
        }else{
            _colorCuello='N';
        }
    }


    if($('#checkManga').is(':checked')){
        _colorManga='R';
    }else{
        if($('#checkColorMangaOption').is(':checked')){
            _colorManga='Y';
        }else{
            _colorManga='N';
        }
    }

    if($('#checkManga').is(':checked')){
        _tipoManga='R';
    }else{
        if($('#checkTipoMangaOption').is(':checked')){
            _tipoManga='S';
        }else{
            _tipoManga='L';
        }
    }

    
    console.log("_tipoPrenda: "+_tipoPrenda);
    console.log("_colorFondo: "+_colorFondo);
    console.log("_colorCuello: "+_colorCuello);
    console.log("_colorManga: "+_colorManga);
    console.log("_tipoManga: "+_tipoManga);

}
 
function drawCloths(){
    var finalTemplate='';
    const cantItems = 20;
    for (var i = 0; i < cantItems; i ++){
        finalTemplate = finalTemplate + generateTemplate("sample-"+i);
    }
    $(".main-wrapper").html(finalTemplate);


    for (var i = 0; i < cantItems; i ++){
       var paleta = generateColorsPalette();
       putColorToCloth("#sample-"+i,paleta);

       putColorPaletteInHTML("#sample-"+i,paleta);
    }
}
 
 $(document).ready(() => {    

    drawCloths();

    //initComponents();





    //$("#clickme").click(function(){

        
        //readParameters();


        


    //});



 });



/** */
function putColorToCloth(indicator,pantonePalette){

    var cantColors = pantonePalette.length;

    //colorPolo
    //var cantColorPolo =1;

    putColorToBackground(indicator,pantonePalette,cantColors)
    putColorToNeck(indicator,pantonePalette[1]);
    putColorToSleve(indicator,pantonePalette[1]);
}

function putColorPaletteInHTML(indicator, pantonePalette){
    $(indicator+" .colorPalette").html("");
    for(var i = 0; i< pantonePalette.length ;i++){
        $(indicator+" .colorPalette").append(`<div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3" style="background-color:#`+pantonePalette[i]['hex']+`">
        <div class="fs-6 fw-bolder text-white">#`+pantonePalette[i]['hex']+`</div>
        <div class="fw-bold text-gray-900">`+pantonePalette[i]['name']+`</div>
    </div>`);
    }
}





function putColorToBackground(indicator, pantonePalette, cantColors){
    if(_colorFondo == 'R'){
        if(randomTrueFalse()){
            putSolidColor(indicator+" .layer_fondo", pantonePalette[0]);
        }else{
            putGradientColor(indicator+" .layer_fondo", pantonePalette, cantColors);
        }
    }else if(_colorFondo == 'S'){
        putSolidColor(indicator+" .layer_fondo", pantonePalette[0]);
    }else if(_colorFondo == 'G'){
        putGradientColor(indicator+" .layer_fondo", pantonePalette, cantColors);
    }
    
}

function putColorToNeck(indicator, pantoneColor){
    if(_colorCuello == 'R'){
        if(randomTrueFalse()){
            putSolidColor(indicator+" .layer_cuello", pantoneColor);
        }
    }else if(_colorCuello == 'Y'){
        putSolidColor(indicator+" .layer_cuello", pantoneColor);
    }else if(_colorCuello == 'N'){
    }
    
}

function putColorToSleve(indicator,  pantoneColor){
    //TODO:CORREGIR
    if(_tipoManga=='R'){

        if(randomTrueFalse()){

            if(_colorManga == 'R'){
                if(randomTrueFalse()){
                    putColorShortSleve(indicator, pantoneColor);
                }
            }else if(_colorManga == 'Y'){
                putColorShortSleve(indicator, pantoneColor);
            }

        }else{
            if(_colorManga == 'R'){
                if(randomTrueFalse()){
                    putColorLongSleve(indicator, pantoneColor);
                }
            }else if(_colorManga == 'Y'){
                putColorLongSleve(indicator, pantoneColor);
            }
        }

    }else if(_tipoManga=='S'){

        if(_colorManga == 'R'){
            if(randomTrueFalse()){
                putColorShortSleve(indicator, pantoneColor);
            }
        }else if(_colorManga == 'Y'){
            putColorShortSleve(indicator, pantoneColor);
        }

    }else if(_tipoManga == 'L'){

        if(_colorManga == 'R'){
            if(randomTrueFalse()){
                putColorLongSleve(indicator, pantoneColor);
            }
        }else if(_colorManga == 'Y'){
            putColorLongSleve(indicator, pantoneColor);
        }
    }





    
}


function putColorShortSleve(indicator,  pantoneColor){
    putSolidColor(indicator+" .layer_mangas", pantoneColor);
}
function putColorLongSleve(indicator,  pantoneColor){
    putSolidColor(indicator+" .layer_mangas_altas", pantoneColor);

}


//pintado
function putSolidColor(indicator, pantoneColor){
    $(indicator).css({'background':'#'+pantoneColor['hex']});
}

function putGradientColor(indicator, pantonePalette, cantColors){
    if(cantColors==2){
        $(indicator).css({'background-image':'linear-gradient(#'+pantonePalette[0]['hex']+' 0%, #'+ pantonePalette[0]['hex']+' 40%, #'+ pantonePalette[1]['hex']+' 90%)'});

    }else{
        //TODO: AGREGAR MAS COLORES SI REQUIERE
        $(indicator).css({'background-image':'linear-gradient(#'+pantonePalette[0]['hex']+' 0%, #'+pantonePalette[0]['hex']+' 45%, #'+ pantonePalette[1]['hex']+' 55%, #'+ pantonePalette[1]['hex']+' 60%, #'+pantonePalette[2]['hex']+' 70%, #'+pantonePalette[2]['hex']+' 100%)'});

    }
}

//TODO: AGREGAR IMAGEN DINAMICA
function putPattern(indicator, urlImage){
    $(indicator).css({'background-image':'url(https://monkeds.github.io/images/dog_pattern.jpeg)','background-repeat': 'repeat', 'background-size': '80px 80px'});
}



/*TEMPLATES*/

function generateTemplate(indicator){
    if(_tipoPrenda == 'R'){
        if(randomTrueFalse()){
            return generatePoloTemplate(indicator);
        }else{
            return generateCamiseroTemplate(indicator);
        }
    }else if(_tipoPrenda == 'P'){
        return generatePoloTemplate(indicator);
    }else if(_tipoPrenda == 'C'){
        return generateCamiseroTemplate(indicator);
    }
}

function generatePoloTemplate(id){
    var template=`<!--begin::Col-->
                <div id=`+id+` class="cloth polo col-md-6 col-xxl-4 ">
                    <!--begin::Card-->
                    <div class="card">
                        <!--begin::Card body-->
                        <div class=" d-flex flex-center flex-column pt-6">

                            <div class="frame mb-4">
                                <!--<img class="mw-100 mh-300px card-rounded-bottom" alt="" src="assets/media/illustrations/alert-2.png"/>-->
                                <img class="layer layer_sombra" src="https://monkeds.github.io/images/fondo_re.svg" />
                                <i class="layer layer_fondo"></i>
                                <i class="layer layer_mangas_altas"></i>
                                <i class="layer layer_mangas"></i>
                                <i class="layer layer_cuello"></i>
                                <i class="layer layer_estampado_frontal align-middle"></i>
                                <i class="layer layer_contorno"></i>
                            </div>
                            
                            
                            <!--begin::Info-->
                            <div class="colorPalette d-flex flex-center flex-wrap mb-4">
                                <!--begin::Stats-->
                                <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                    <div class="fs-6 fw-bolder text-gray-700">#FFFFFF</div>
                                    <div class="fw-bold text-gray-400">Earnings</div>
                                </div>
                                <!--end::Stats-->
                                <!--begin::Stats-->
                                <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                    <div class="fs-6 fw-bolder text-gray-700">#234234</div>
                                    <div class="fw-bold text-gray-400">Tasks</div>
                                </div>
                                <!--end::Stats-->
                                <!--begin::Stats-->
                                <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                    <div class="fs-6 fw-bolder text-gray-700">#654f34</div>
                                    <div class="fw-bold text-gray-400">Sales</div>
                                </div>
                                <!--end::Stats-->
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                </div>
                <!--end::Col-->`;
    
                return template;
}

function generateCamiseroTemplate(id){
    var template=`<!--begin::Col-->
                    <div id=`+id+` class="cloth polo-camisero col-md-6 col-xxl-4 ">
                        <!--begin::Card-->
                        <div class="card">
                            <!--begin::Card body-->
                            <div class=" d-flex flex-center flex-column pt-6">

                                <div class="frame mb-4">
                                    <!--<img class="mw-100 mh-300px card-rounded-bottom" alt="" src="assets/media/illustrations/alert-2.png"/>-->
                                    <img class="layer layer_sombra" src="https://monkeds.github.io/images/fondo_cam_re.svg" />
                                    <i class="layer layer_fondo"></i>
                                    <i class="layer layer_mangas_altas"></i>
                                    <i class="layer layer_mangas"></i>
                                    <i class="layer layer_cuello"></i>
                                    <i class="layer layer_estampado_corazon"></i>
                                    <i class="layer layer_contorno"></i>
                                </div>
                                
                                
                                <!--begin::Info-->
                                <div class="colorPalette d-flex flex-center flex-wrap mb-4">
                                    <!--begin::Stats-->
                                    <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                        <div class="fs-6 fw-bolder text-gray-700">#FFFFFF</div>
                                        <div class="fw-bold text-gray-400">Earnings</div>
                                    </div>
                                    <!--end::Stats-->
                                    <!--begin::Stats-->
                                    <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                        <div class="fs-6 fw-bolder text-gray-700">#234234</div>
                                        <div class="fw-bold text-gray-400">Tasks</div>
                                    </div>
                                    <!--end::Stats-->
                                    <!--begin::Stats-->
                                    <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                        <div class="fs-6 fw-bolder text-gray-700">#654f34</div>
                                        <div class="fw-bold text-gray-400">Sales</div>
                                    </div>
                                    <!--end::Stats-->
                                </div>
                                <!--end::Info-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                    </div>
                    <!--end::Col-->`;
                return template;
}


/*UTILES*/
function generateColorsPalette(){
    var colorsPalete = [];

    //2 a 3 colores
    var cantColors = 1+(Math.floor(Math.random() * 2));

    for(var i = 0; i<= cantColors; i++){

        if(i==0){
            if(randomTrueFalse()){
                colorsPalete.push(getRandomPantone());
            }else{
                if(randomTrueFalse()){
                    colorsPalete.push(getRandomPantone());
                }else{
                    colorsPalete.push({
                        "name": "snow-white",
                        "hex": "f2f0eb"
                    })
                }
            }
        }else if(i==1){ //buscar color similar
            var secondColor = getRandomPantone();
            while(hexColorDelta(colorsPalete[0]['hex'],secondColor['hex'])<0.8){
                secondColor = getRandomPantone();
            }
            colorsPalete.push(secondColor);
        }else{
            colorsPalete.push(getRandomPantone());
        }
    }
    return colorsPalete;
}

//50% de obtener verdadero
function randomTrueFalse(){
    return Math.random() < 0.5;
}

//obtiene un objeto random de la lista de pantones
function getRandomPantone(){
    const keys = Object.keys(pantoneColors)
    // Generate random index based on number of keys
    const randIndex = Math.floor(Math.random() * keys.length)
    // Select a key from the array of keys using the random index
    const randKey = keys[randIndex]
    // Use the key to get the corresponding name from the "names" object
    const name = pantoneColors[randKey]
    return name;
}

//indica similaridad de colores
function hexColorDelta(hex1, hex2) {
    // get red/green/blue int values of hex1
    var r1 = parseInt(hex1.substring(0, 2), 16);
    var g1 = parseInt(hex1.substring(2, 4), 16);
    var b1 = parseInt(hex1.substring(4, 6), 16);
    // get red/green/blue int values of hex2
    var r2 = parseInt(hex2.substring(0, 2), 16);
    var g2 = parseInt(hex2.substring(2, 4), 16);
    var b2 = parseInt(hex2.substring(4, 6), 16);
    // calculate differences between reds, greens and blues
    var r = 255 - Math.abs(r1 - r2);
    var g = 255 - Math.abs(g1 - g2);
    var b = 255 - Math.abs(b1 - b2);
    // limit differences between 0 and 1
    r /= 255;
    g /= 255;
    b /= 255;
    // 0 means opposit colors, 1 means same colors
    return (r + g + b) / 3;
}
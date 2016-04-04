$(document).ready(function empty(){
    
    var screen = $("#pantalla");
    var suma = 0;
    var sr = 1;

    screen.focus();

    function isNotNum(){
        if ($.isNumeric(screen.val())) {
            return true;
        }
        else{
            screen.val("Error");
            screen.focus();
            return false;
        }
    }

    $("#pantalla").on("click",
        function(){screen.val("");})

    $("#cuadrado").on("click",
        function(){
            if(isNotNum()) {
                screen.val(screen.val() * screen.val());
                screen.focus();
            }
        })

	$("#cubo").on("click",
	 function(){
	if(isNotNum()){
	screen.val(screen.val() * screen.val() * screen.val());
	screen.focus();
	}})

    $("#inverso").on("click",
        function(){
            if(isNotNum()) {
                screen.val(1 / screen.val());
                screen.focus();
            }
        })

    $("#raiz").on("click",
        function(){
            if(isNotNum()) {
                if (screen.val() < 0) {
                    screen.val("Error");
                    screen.focus();
                }
                else {
                    screen.val(Math.sqrt(screen.val()));
                    screen.focus();
                }
            }
        })

    $("#pentera").on("click",
        function(){
            if(isNotNum()) {
                screen.val(Math.round(screen.val()));
                screen.focus();
            }
            })

    $("#potencia2").on("click",
        function(){
            if(isNotNum()) {
                screen.val(Math.pow(2, screen.val()));
                screen.focus();
            }
        })

    $("#factorial").on("click",
        function() {
            if(isNotNum()) {
                if (screen.val() < 0) {
                    screen.val("Error");
                    screen.focus();
                }
                else {
                    var rval = 1;
                    for (var i = 2; i <= screen.val(); i++){
                        rval = rval * i;
                    }  
                    screen.val(rval);
                    screen.focus();
                }
            }
        })


    $("#suma").on("click",
        function(){
            if(isNotNum()) {
                if (sr == '1') {
                    suma = parseFloat(suma) + parseFloat(screen.val());
                }
                if (sr == '0') {
                    suma = parseFloat(suma) - parseFloat(screen.val());
                }
                screen.val("");
                sr = '1';
                screen.focus();
            }
        })

    $("#resta").on("click",
        function(){
            if(isNotNum()) {
                if (sr == '1') {
                    suma = parseFloat(suma) + parseFloat(screen.val());
                }
                if (sr == '0') {
                    suma = parseFloat(suma) - parseFloat(screen.val());
                }
                screen.val("");
                sr = '0';
                screen.focus();
            }
        })

    $("#igual").on("click",
        function(){
            if(isNotNum()) {
                if (sr == '1') {
                    suma = parseFloat(suma) + parseFloat(screen.val());
                }
                if (sr == '0') {
                    suma = parseFloat(suma) - parseFloat(screen.val());
                }
                screen.val(suma);
                suma = '0';
                sr = '1';
                screen.focus();
            }
        })

    $("#limpiar").on("click",
        function(){
            suma = '0';
            sr = '1';
            screen.val("");
            screen.focus();
        })
})

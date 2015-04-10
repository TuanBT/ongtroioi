$(document).ready(function () {

    var chooseOption = 1 //Có-Không

    $('#boxResult').click(function () {
        $('#imgResult').hide();
        $('#imgRunning').show();
        $('#answer').html("-");
        setTimeout(function() {
            // Do something after 3 seconds
            $('#answer').html(getTextResult(getRandomResult(1, 1, 1000)));
            $('#imgResult').show();
            $('#imgRunning').hide();
        }, 2000);
    });


    function getTextResult(randomResult) {
        if (chooseOption == 1) {
            if (randomResult == 1) {
                return "CÓ";
            } else {
                return "KHÔNG";
            }
        }
    }

//Tra random cac so theo muc
//Type: 1.Two choice 2.Multi
    function getRandomResult(type, min, max) {
        if (type == 1) {
            var num = Math.floor(Math.random() * max) + min;
            if (num % 2 == 0) {
                return 1;
            } else if (num % 2 != 0) {
                return 2;
            }
        }
    }




});//End ready

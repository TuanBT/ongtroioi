//var chooseOption = 1 //Có-Không
var options = [];
var idChoose;

$(document).ready(function () {
    window.onload = optClick('T1');
});//End ready

    var chooseOption = 1 //Có-Không
function optClick(id) {
    options = document.getElementById(id).innerText.trim().split('\n');
    idChoose = id;
    $('#boxClick').html("<div id='boxResult'>BẤM</div>");
    $(document).ready(function () {
        $('.choicePanel.fourRows').css("background", "brown");
        $('#' + idChoose).css("background", "Green");
    });//End ready
}

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

function onComplete() {
    $("#answer").text("");
    $('#funnyText').show();
}

    function getTextResult(randomResult) {
function doSlot() {
    $("#boxResult").slotMachine({delay: 450})
        .shuffle(10, onComplete);
};

//ChooseOption
function setChooseOption() {
    $('#boxClick').html("<div id='boxResult'></div>");
    for (var i = 0; i < options.length; i++) {
        $('#boxResult').append("<div>" + options[i] + "</div>");
    }
}
$(document).ready(function () {
    $('#boxClick').click(function () {
        $("#answer").text("Ta sẽ cho con câu trả lời....");
        $('#funnyText').hide();
        setChooseOption();
        doSlot();
    });
    $('#btnRan2').click(function () {
        if (chooseOption == 1) {
            if (randomResult == 1) {
                return "CÓ";
            } else {
                return "KHÔNG";
            }
            setChooseOption(["ĐÚNG", "SAI"]);
        }
    }
        doSlot();
    });

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
    $('#btnReset').click(function () {
    });

});//End ready



});//End ready

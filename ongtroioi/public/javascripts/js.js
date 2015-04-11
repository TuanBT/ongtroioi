var options = [];
var idChoose;

$(document).ready(function () {
    window.onload = optClick('T1');
});//End ready

function optClick(id) {
    options = document.getElementById(id).innerText.trim().split('\n');
    idChoose = id;
    $('#boxClick').html("<div id='boxResult'>BẤM</div>");
    $(document).ready(function () {
        $('.choicePanel.fourRows').css("background", "brown");
        $('#' + idChoose).css("background", "Green");
    });//End ready
}

function onComplete() {
    $("#answer").text("");
    $('#funnyText').show();
}

function doSlot() {
    $("#boxResult").slotMachine({delay: 450})
        .shuffle(10, onComplete);
}
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
});//End ready

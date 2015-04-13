var options = [];
var idChoose;

$(document).ready(function () {
    //Chọn mặc định nút đầu tiên
    window.onload = function () {
        reset();
        optClick('T1');
    };
});//End ready

window.onresize = function(event) {
    reset();
};

//Reset
function reset() {
    $('#boxResult').css('line-height', $('#boxClick').height()+12+"px");
    $('#boxClick').css('font-size', Math.floor($('#boxResult').height()*3/4)+"px");
}

//Click một nút chọn kiểu
function optClick(id) {
    options = document.getElementById(id).innerText.trim().split('-');
    idChoose = id;
    var lh = $('#boxClick').height()+12;
    $('#boxClick').html("<div id='boxResult' style='line-height:"+lh+"px'>" + options[0] + "-" + options[1] + "</div>");
    $(document).ready(function () {
        $('.btnChoose').attr('class', 'btnChoose');
        $('#' + idChoose).attr('class', 'btnChoose current');
    });//End ready
}

//Quay số kết thúc
function onComplete() {
    $("#answer").text("Đó là câu trả lời của ta. Nếu con muốn ấn nữa thì cứ việc, nhưng ta chỉ trả lời thật cho một câu hỏi thôi.");
}

//Thực hiện việc quay số
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
    //Click box
    $('#boxClick').click(function () {
        $("#answer").text("Ta sẽ cho con câu trả lời....");
        setChooseOption();
        doSlot();
    });
});//End ready

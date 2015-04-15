var options = [];
var idChoose;
var helpTextLine = 4; //1 blank, 2 line, 1 bonus

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
function reset(){
        //BoxResult
        $('#boxClick').css('line-height', $('#boxClick').height()+12+"px");
        //$('#boxClick').css('font-size', Math.floor($('#boxResult').height()*3/4)+"px");
        $('#boxClick').css('font-size', $('#boxResult').height()+"px");
    //helpText
    /*for(var i=1;i<helpTextLine*2;i++){
        $('#boxResult').css('font-size', Math.floor($('#boxClick').height()/i));
        if($('#boxResult').height()<=$('#boxClick').height()) break;
    }*/
    //helpText
    for(var i=1;i<helpTextLine*2;i++){
        $('#helpTextCont').css('font-size', Math.floor($('#helpText').height()/i)+"px");
        if($('#helpTextCont').height()<=$('#helpText').height()) break;
    }
    //Answer
    for(var i=1;i<helpTextLine*2;i++){
        $('#answerContent').css('font-size', Math.floor($('#answer').height()/i)+"px");
        if($('#answerContent').height()<=$('#answer').height()) break;
    }
    //$('#helpTextCont').css('font-size', Math.floor($('#helpText').height()/4));
    /*while($('#helpTextCont').height()>=$('#helpText').height()){
        var fz = $('#helpTextCont').css('font-size');
        $('#helpTextCont').css('font-size',fz-=1);
    }*/
}

//Click một nút chọn kiểu
function optClick(id) {
    options = document.getElementById(id).innerText.trim().split('-');
    idChoose = id;
    var lh = $('#boxClick').height()+12;
    //$('#boxClick').html("<div id='boxResult' style='line-height:"+lh+"px'>" + options[0] + "-" + options[1] + "</div>");
    $('#boxClick').html("<div id='boxResult' style='line-height:"+lh+"px'>HỎI</div>");
    $(document).ready(function () {
        $('.btnChoose').attr('class', 'btnChoose');
        $('#' + idChoose).attr('class', 'btnChoose current');
    });//End ready
    reset();
}

//Quay số kết thúc
function onComplete() {
    $("#answerContent").text("Đó là câu trả lời của ta. Nếu con muốn ấn nữa thì cứ việc, nhưng ta chỉ trả lời thật cho một câu hỏi thôi.");
    reset();
}

//Thực hiện việc quay số
function doSlot() {
    $("#boxResult").slotMachine({delay: 450})
        .shuffle(10, onComplete);
}

//ChooseOption
function setChooseOption() {
    $('#boxClick').html("<div id='boxResult'></div>");
    if(idChoose=='T6'){
        for (var i = 1; i <= 10; i++) {
            $('#boxResult').append("<div>" + i + "</div>");
        }
        return;
    }
    for (var i = 0; i < options.length; i++) {
        $('#boxResult').append("<div>" + options[i] + "</div>");
    }
}
$(document).ready(function () {
    //Click box
    $('#boxClick').click(function () {
        $("#answerContent").text("Ta sẽ cho con câu trả lời....");
        reset();
        setChooseOption();
        doSlot();
    });
    $('.title').mouseover(function(){
        //$('.st').hide()
    });
    $('.title').mouseout(function(){
       // $('.st').show( "highlight", 100)
    });
});//End ready

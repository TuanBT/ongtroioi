/**
 * Created by Bui Tien Tuan on 11/04/2015.
 */
$(document).ready(function () {
    listChange = [];

//Test
    listChange = ["CÓ", "KHÔNG"];

    $('#buttonRandom').click(function () {
        var exit = false;
        var lenght = listChange.length;
        var i = 0;
        var time = 0;
        interval = setInterval(function () {
            if (i >= lenght) {
                i = 0;
            }
            $('#changeTextBox').html(listChange[i]);
            i++;
            time++;
            if (time == 100) {
                clearInterval(interval);
            }
        }, 100);
    });
});//End ready
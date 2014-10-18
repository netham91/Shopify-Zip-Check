/*
Developed by netham91
Feel free to use :)
Any help you need mail me at netham91[at]gmail[dot]com
*/
function checkZip() {
    var pincodes = [
        100000,
        100001,
        100002,
        //Add more pincodes here
    ];

    var zipCode = $('#zip').val();
    var zip = parseInt(zipCode);
    var flag = 0;
    for (var i = 0; i < pincodes.length;; i++) {
        if (pincodes[i] == zip)
            flag = 1;
    }
    if (flag)
        $('#statusResult').html('Available');
    else
        $('#statusResult').html('Not Available');
    return;

}


$('#statusResult').click(function() {
    checkZip();
});

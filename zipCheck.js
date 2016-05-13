
 /*
Developed by netham91
Feel free to use :)
Any help you need mail me at netham91[at]gmail[dot]com
*/
function checkPin() {
    var pincodes = [
       110001, 110002, 110003, 110004, 110005, 110006, 110007, 110008, 110009, 110010, 110011, 110012, 110013, 110014, 110015, 110016, 110017, 110018, 110019];

//Just fill the above array with CSV of pincodes you have. If you have excel use any online tool to convert that list to csv. A simple google will tell you how to do that

 var zipCode = $('#zip').val();
console.log(zipCode);
    var zip = parseInt(zipCode);
    var flag = 0;
    for (var i = 0; i < pincodes.length; i++) {
        if (pincodes[i] == zip)
            flag = 1;
    }
    if (flag)
    {
        $('#statusResult1').html('COD Available');
 $('#statusResult2').html('');
    }
else
{
        $('#statusResult2').html('Not Available');
  $('#statusResult1').html('');
}
return;

}


$('#checkPin').click(function() {
    checkPin();
});


//I wrote the code few years ago, didn't make any ajor changes, this can be improved and shortened alot, feel free to modify it.

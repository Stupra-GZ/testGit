/* 
* @Author: Miles
* @Date:   2015-12-24 09:40:56
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-24 12:05:38
*/

$(document).ready(function(){
    // 店铺1
    $("#changes").click(function(event) {
        $("#txt").val('');
        $("#txt").css("border","1px solid #DEDEDE");
        $("#txt").focus();
    });
    $("#txt").blur(function(event) {
        if(!$("#txt").val()){
            $("#txt").val('13459227995');
            $("#txt").css("border","none");
        }
    });
    // 店铺2
    $("#save").click(function(event) {
        $("#num").val('');
        $("#num").focus();
    });
    // 店铺3
    $("#changes-two").click(function(event) {
        $("#txt-two").val('');
        $("#txt-two").css("border","1px solid #DEDEDE");
        $("#txt-two").focus();
    });
    $("#txt-two").blur(function(event) {
        if(!$("#txt-two").val()){
            $("#txt-two").val('13459227995');
            $("#txt-two").css("border","none");
        }
    });
});
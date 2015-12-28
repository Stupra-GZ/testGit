/* 
* @Author: anchen
* @Date:   2015-12-24 14:48:22
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-24 15:02:28
*/

$(document).ready(function(){
    $("#txt").focus(function(event) {
        $("#txt").val('');
    });
    $("#txt").blur(function(event) {
        if(!$("#txt").val()){
            $("#txt").val('us1103599026');
        }
    });
    $("#txt-num").focus(function(event) {
        $("#txt-num").val('');
    });
    $("#txt-num").blur(function(event) {
        if(!$("#txt-num").val()){
            $("#txt-num").val('us1103599026');
        }
    });
});
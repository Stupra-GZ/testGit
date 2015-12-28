/* 
* @Author: anchen
* @Date:   2015-12-25 09:11:26
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-25 09:39:26
*/

$(document).ready(function(){
    $("#edit").click(function(event) {
        $(".name-one").val('');
        $(".name-one").focus();
        $(".name-one").css("border","1px solid #DEDEDE");
    });
    $(".name-one").blur(function(event) {
        if(!$(".name-one").val()){
            $(".name-one").val('请编辑店名');
        }
    });
    $("#save").click(function(event) {
        $("#iptName").css("border","none");   
    });
    $("#editShopName").click(function(event) {
        $(".name-two").val('');
        $(".name-two").focus();
        $(".name-two").css("border","1px solid #DEDEDE");
    });
    $(".name-two").blur(function(event) {
        if(!$(".name-two").val()){
            $(".name-two").val('请编辑店名');
        }
    });
});
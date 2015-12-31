/* 
* @Author: anchen
* @Date:   2015-12-24 10:54:42
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-26 10:20:26
*/

$(document).ready(function(){
    $(".timer ul li").each(function(index, el) {
        $(this).click(function(event) {
            $(this).addClass('timer-current').siblings().removeClass('timer-current');
        });
    });
    $("#btn").click(function(event) {
        $("#txt").val('');
        $("#txt").focus();  
    });
    $("#txt").blur(function(event) {
        if(!$("#txt").val()){
            $("#txt").val('切换账号');
        }
    });
    // 账号切换
    $("#switching-btn").click(function(event) {
        $("#account-num-select").slideToggle(400);
        $("#account-num-select ul li").each(function(index, el) {
            $(this).click(function(event) {
               $("#account-txt").val($(this).html());
               $("#account-num-select").css("display","none");
            });
        });
    });
});
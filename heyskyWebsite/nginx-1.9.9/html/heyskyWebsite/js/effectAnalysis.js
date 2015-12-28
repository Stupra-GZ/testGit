/* 
* @Author: Miles
* @Date:   2015-12-24 15:08:29
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-25 16:19:11
*/

$(document).ready(function(){
    // 时间
    $(".timer ul li").click(function(event) {
        $(this).addClass('timer-current').siblings().removeClass('timer-current');
    });
    // 数据
    $(".added ul li").click(function(event) {
        $(this).addClass('current').siblings().removeClass('current');
    });
    // 翻页
    var $key = 0;
    $("#btn-right").click(function(event) {
        $key++;
        if($key>7){
            $key = 0;
        }
        $(".page ul li").eq($key).addClass('page-current').siblings().removeClass('page-current');
    });
    // 左翻页
    $("#btn-left").click(function(event) {
        $key--;
        if($key<0){
            $key = 7;
        }
        $(".page ul li").eq($key).addClass('page-current').siblings().removeClass('page-current');
    });
    $(".page ul li").click(function(event) {
        $key = $(this).index();
        $(this).addClass('page-current').siblings().removeClass('page-current');
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
/* 
* @Author: anchen
* @Date:   2015-12-25 14:48:29
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-25 14:57:06
*/

$(document).ready(function(){
    var $key = 0;
    $("#page-btn-right").click(function(event) {
        $key++;
        if($key>1){
            $key = 0;
        }
        $(".page ul li").eq($key).addClass('current').siblings().removeClass('current');
    });
    $("#page-btn-left").click(function(event) {
        $key--;
        if($key<0){
            $key = 1;
        }
        $(".page ul li").eq($key).addClass('current').siblings().removeClass('current');
    });
    $(".page ul li").each(function(index, el) {
        $(this).click(function(event) {
            $key = $(this).index();
            $(this).addClass('current').siblings().removeClass('current');
        });
    });
});
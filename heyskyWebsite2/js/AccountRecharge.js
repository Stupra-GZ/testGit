/* 
* @Author: anchen
* @Date:   2015-12-25 09:45:30
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-29 09:28:19
*/

$(document).ready(function(){
    $(".recharge-one ul li").each(function(index, el) {
        $(this).click(function(event) {
            $(".box").fadeOut(600);
            $(this).addClass('current').siblings().removeClass('current');
            $(".box").eq($(this).index()).fadeIn(600);
        });
    });
});
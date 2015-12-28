/* 
* @Author: anchen
* @Date:   2015-12-25 09:45:30
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-25 10:33:51
*/

$(document).ready(function(){
    $(".recharge ul li").each(function(index, el) {
        $(this).click(function(event) {
            $(".box").fadeOut(600);
            $(this).addClass('current').siblings().removeClass('current');
            $(".box").eq($(this).index()).fadeIn(600);
        });
    });
});
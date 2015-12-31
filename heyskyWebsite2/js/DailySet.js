/* 
* @Author: Miles
* @Date:   2015-12-24 09:40:56
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-30 15:23:13
*/

$(document).ready(function(){
    // 店铺1
    var num1 = 1;
    var num2 = 1;
    var num3 = 1;
    $("#changes").click(function(event) {
        if(num1%2 == 1){
            $("#txt").css("border","1px solid #ccccc");
            $("#txt").focus();
            $(this).html('保存'); 
            num1++;   
        }else if(num1%2 == 0){
           $("#txt").css("border","none");
            $(this).html('修改');
            num1++; 
        }
    });
    // 店铺2
    $(".baocun").click(function(event) {
        if(num2%2 == 1){
            // $("#txt-num").css("border","none");
            $(this).html('修改'); 
            num2++;   
        }else if(num2%2 == 0){
           $("#txt-num").css("border","1px solid #ccccc");
           $("#txt-num").focus();
            $(this).html('保存');
            num2++; 
        }
    });
    // 店铺3
    $(".xiugai").click(function(event) {
        if(num3%2 == 1){
            $(".txt-three").css("border","1px solid #ccccc");
            $(".txt-three").focus();
            $(this).html('保存'); 
            num3++;   
        }else if(num3%2 == 0){
            $(".txt-three").css("border","none");
            $(this).html('修改');
            num3++; 
        }
    });
});
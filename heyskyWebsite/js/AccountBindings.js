/* 
* @Author: anchen
* @Date:   2015-12-25 09:11:26
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-30 14:57:55
*/

$(document).ready(function(){
    var num = 1;
    var num2 = 1;
    var num3 = 1;
    // 店铺1
    $("#edit").click(function(event) {
        if(num2%2 == 1){
            $(".name-one").css("border","none");
            $(".name-one").focus();
            $(this).html('保存'); 
            num2++;   
        }else if(num2%2 == 0){
           $(".name-one").css("border","1px solid #ccccc");
            $(this).html('编辑店名');
            num2++; 
        }
    });
    // 店铺2
    $("#save").click(function(event) {
        if(num%2 == 1){
           $("#ipt-name").css("border","none");
           $(this).html('编辑店名'); 
           num++;
       }else if(num%2 == 0){
            $("#ipt-name").css("border","1px solid #cccccc"); 
           $("#ipt-name").focus();
           $(this).html('保存');
           num++;
       }      
    });
    // 店铺3
    $("#editShopName").click(function(event) {
        if(num3%2 == 1){
            $(".name-two").css("border","none");
            $(".name-two").focus();
            $(this).html('保存'); 
            num3++;   
        }else if(num3%2 == 0){
           $(".name-two").css("border","1px solid #ccccc");
            $(this).html('编辑店名');
            num3++; 
        }
    });
});
/* 
* @Author: San
* @Date:   2015-12-24 10:59:09
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-24 16:20:58
*/

/*$(document).ready(function(){
    
});*/
//checked全选
function selectAll(){
 var checklist = document.getElementsByName ("selected");
   if(document.getElementById("controlAll").checked)
   {
   for(var i=0;i<checklist.length;i++)
   {
      checklist[i].checked = 1;
   } 
 }else{
  for(var j=0;j<checklist.length;j++)
  {
     checklist[j].checked = 0;
  }
 }
}

//弹框点击显示 
    function del(){
        var Container=document.getElementById('Container');
        if(Container.style.display=="block"){
            Container.style.display="none";
        }else{
            Container.style.display="block";
        }
    }
    function del2(){
        var Container=document.getElementById('Container');
          if(Container.style.display=="block"){
                Container.style.display="none";
              }else{
            Container.style.display="block";
              }
    }
/**
 * 项目逻辑代码
 *
 * @author  Sven Wang
 * @review
 */

(function () {
   'use strict';
   window.PAGE_WIDTH = 640;
    $(document).ready(function () {
        var str1 = 'http://test.xuuue.cn', // 
            str2 = '', // 
            num = 0; // 

        num += 10;
        // num = str2 === '' ? 1 : 2;
        if (str2 === '') {
            num = 1;
        } else {
            num = 2;
        }

        if (str2 === '') {
            num = 1;
        } else {
            num = 2;
        }
        str2 = str1 + '/test';
    });
})();

function getStr () {
    return '123';
}
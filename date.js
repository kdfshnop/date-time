/*
* @Author: Administrator
* @Date:   2018-07-06 10:15:26
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-06 10:16:29
*/

'use strict';
getNowFormatDate() {
            let date = new Date();
            let seperator1 = "-";
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let seperator2 = ":";
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            };
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            };
            if(minutes>=0 && minutes<=9){
                minutes = "0" + minutes;
            };
            if(seconds>=0 && seconds<=9){
                seconds = "0" + seconds;
            };
            this.currentdate = year + seperator1 + month + seperator1 + strDate+' '+hours + ":"+minutes + ":" + seconds; 
        }
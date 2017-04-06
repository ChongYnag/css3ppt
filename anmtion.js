/*
* @Author: jiangchongyang
* @Date:   2017-04-06 09:49:01
* @Last Modified by:   jiangchongyang
* @Last Modified time: 2017-04-06 14:02:22
*/

'use strict';
//淡入
$(".lf ul li").on("click",function(){
	$(".contarent .form img").removeClass(function (i, v) {return v.replace('fs-/*+', '');});
	$(".contarent .form img").css("-webkit-transform-origin","150px 150px");
	if($(this).html() == "淡入"){
		$(".contarent .form img").addClass('fk-danru');
	}else if($(this).html() == "飞入"){
		$(".contarent .form img").addClass('fk-feiru');
	}else if($(this).html() == "放大"){
		$(".contarent .form img").addClass('fk-fangda');
	}else if($(this).html() == "跳入"){
		$(".contarent .form img").addClass('fk-tiaoru');
	}else if($(this).html() == "闪现"){
		$(".contarent .form img").addClass('fk-shanxian');
	}else if($(this).html() == "滚入"){
		$(".contarent .form img").css("-webkit-transform-origin","0 300px");
		$(".contarent .form img").addClass('fk-gunru');
	}else if($(this).html() == "翻转"){
		$(".contarent .form img").addClass('fk-fanzhuan');
	}
	else if($(this).html() == "弹性放大"){
		$(".contarent .form img").addClass('fk-tfangda');
	}
	else if($(this).html() == "弹性缩小"){
		$(".contarent .form img").addClass('fk-suoxiao');
	}
})

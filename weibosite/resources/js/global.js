;(function(window, undefined){
	"use strict";
	var $ = window.jQuery;
	
	$.ajaxSetup({data:{author:'dezhi'}, cache:false });
	
	// tmpl
	var tmpl ={
		weibo:'weibo'
	}
	
	var loadTmpl = function(code){
		$('#tmpl-boxes').load('static/tmpl/weibo.tmpl')
	}
	
	var load = function (){
		//loadTmpl();
		$.getJSON('api/weibo/public',function(data){
			var tmpl = $.templates('#weibo');
			var html = tmpl.render(data);
			$('#weibo-boxes').append(html);
		});
	};
	
	load();
	
	
	$(document).on('click', "a[action-type='post']", function() {
		var $this = $(this);
		var id = $this.parent('div').attr('status-id');
		$.getJSON('api/weibo/post', {id : id},function(data){
			alert(data);
		});
	});
})(window);

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
            var $leftBox = $('<div class="grid_6"></div>');
            var $rightBox = $('<div class="grid_6"></div>');
            $('#weibo-boxes').prepend($rightBox);
			$('#weibo-boxes').prepend($leftBox);
            // load data 
            for (var i = 0, j = data.data.info.length; i<j;i++){
                var weibo = data.data.info[i];
                var $html = $(tmpl.render(weibo));
                if (i%2 == 0){
                    $html.addClass('left');
                    $leftBox.append($html);
                }else{
                    $html.addClass('right');
                    $rightBox.append($html);
                }
            }
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

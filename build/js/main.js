$(function(){
    if($('#fullpage').length){
		if($(window).height() > 649 && $(window).width() > 991){
			$('#fullpage').fullpage({
                autoScrolling:true
            });
		}
    }


    $('.burger').click(function(){
    	$(this).toggleClass('active')
    })
})
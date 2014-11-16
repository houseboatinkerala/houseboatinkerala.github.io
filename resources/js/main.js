function setFooterPosition () {
	if($('body').height() + $('#footer').height() < $(window).height()) {
		$('#footer').css('position','fixed');
	} else {
		$('#footer').css('position','relative');
	}
}
$(window).ready(function(){
	setFooterPosition();
	$(window).resize(function(){
		setFooterPosition();
	});
});

var card_back_id = null;
var card_front_id = null;
function card_click(card_back_id, card_front_id) {
	$(card_back_id).hide();
	var card_src = $(card_front_id).attr('src');
	console.log('the image\'s source is ' + card_src);
	if (card_back_id == '#card_back1') {
		var card_src_one = $(card_front_id).attr('src');
		console.log('that is the first card');
	}
	else {
		console.log('that is not the first card');
	}
	
}

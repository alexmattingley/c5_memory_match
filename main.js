// So if I pass in a variable of the id, I can select the individual cards
var card_back_id = null;
var card_front_id = null;
function card_click(card_back_id, card_front_id) {
	$(card_back_id).hide();
	var card_src = $(card_front_id).attr('src');
	console.log('the first image\'s source is ' + card_src);
}
var card_back_id = null;
var card_front_id = null;
var next_card_is_second_click = false;
var card_src_one = null;
function card_click(card_back_id, card_front_id) {
	$(card_back_id).hide();
	var card_src = $(card_front_id).attr('src');
	// console.log('the image\'s source is ' + card_src);
	
	if(next_card_is_second_click == false) {
		//I am at the first card clicked
		card_src_one = card_src;
		//console.log('I am at the first card clicked and my source is ' + card_src_one);
		next_card_is_second_click = true;
		
	}
	else {
		var card_src_two = card_src;
		//console.log('I am at the second card clicked and my source is ' + card_src_two);
		if (card_src_one == card_src_two) {
			console.log('You did it! your zoo animals match!');
		}
		else {
			console.log('Your zoo animals dont match, pick other zoo animals');

		}
	}
	
}

var first_card_back_id = null;
var first_card_front_id = null;
var next_card_is_second_click = false;
var card_src_one = null;
var can_click_card = true;
var strikethrough = false;
function card_click(card_back_id, card_front_id) {
	if(can_click_card == false){
		return;
	}

	if(!strikethrough){
		$(".zoo").addClass("strikethrough");
		$(".default-none").css("display", "inline");
		strikethrough = true;
	}
	$(card_back_id).hide();
	var card_src = $(card_front_id).attr('src');
	// console.log('the image\'s source is ' + card_src);
	if(next_card_is_second_click == false) {
		//I am at the first card clicked
		card_src_one = card_src;
		//console.log('I am at the first card clicked and my source is ' + card_src_one);
		next_card_is_second_click = true;
		first_card_back_id = card_back_id;
		first_card_front_id = card_front_id;
		
	}
	else {
		can_click_card = false;
		var card_src_two = card_src;
		//console.log('I am at the second card clicked and my source is ' + card_src_two);
		if (card_src_one == card_src_two) {
			console.log('You did it! your zoo animals match!');
			function hideFrontFace() {
				$(first_card_front_id).hide();
				$(card_front_id).hide();
				can_click_card = true;
			}
 			setTimeout(hideFrontFace, 2000);
		}
		else {
			console.log('Your zoo animals dont match, pick other zoo animals');
			
			function showBackFace(){
				$(first_card_back_id).show()
				$(card_back_id).show();
				can_click_card = true;
			}
			setTimeout(showBackFace, 2000);
			console.log('one');
		}
		next_card_is_second_click = false;
	}

	
}
// Current Bug: We need to figure out how to stop the clicking after the second card is clicked. 
//Spazzy clickers will break the app
var first_card_back_id = null;
var first_card_front_id = null;
var next_card_is_second_click = false;
var card_src_one = null;
var can_click_card = true;
var strikethrough = false;
var scorecount = 0;
function card_click(card_back_id, card_front_id, container_id) {
	if(can_click_card == false){
		return;
	}

		if(!strikethrough){
			//strikethrough code
			$(".zoo").addClass("strikethrough");
			$(".default-none").css("display", "inline");
			strikethrough = true;

			//body background change

			$("body").css("background", "url('https://upload.wikimedia.org/wikipedia/commons/b/b2/United_States_Capitol_-_west_front.jpg')");
			$("body").css("background-size", "cover");
			$("body").css("background-repeat", "no-repeat");
		}
	//flip transform takes place

	$(container_id).css("transform", "rotateY(180deg)");
	$(container_id).css("transition", "all 1.0s linear"); 
	
	//hide function is defined
	function hideCard() {
		$(card_back_id).hide();
	}
	//hide function is called
	setTimeout(hideCard, 500);

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
			scorecount++;
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
		}
		next_card_is_second_click = false;
		function removeStyle() {
		$(container_id).removeAttr('style');
		}

		setTimeout(removeStyle, 2000);
	}
	$(".score-board").text(scorecount);
	
}

//button for the game reset.
function game_reset(){
	$(".front-face").show();
	$(".back-face").show();
	scorecount = 0;
	$(".score-board").text(scorecount);
}
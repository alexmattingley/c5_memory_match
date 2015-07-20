var first_card_back_id = null;
var first_card_front_id = null;
var next_card_is_second_click = false;
var card_src_one = null;
var can_click_card = true;
var strikethrough = false;
var container_id1 = null;
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
	console.log(container_id); 
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

		
		//defines the first container clicked so we can identify it for the remove style attr.
		container_id1 = container_id;
		
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

		//this removes the flip styles allowing someone to flip again.
		function removeStyle() {

		$(container_id).removeAttr('style');
		$(container_id1).removeAttr('style');

		}

		setTimeout(removeStyle, 2000);
	}
	//displays score
	$(".score-board").text(scorecount);

	//displays win message
	if(scorecount == 9) {
		$(".win-message").css('display', 'block');
	}
	
}

//button for the game reset.
function game_reset(){
	$(".front-face").show();
	$(".back-face").show();
	scorecount = 0;
	$(".score-board").text(scorecount);
	$(".win-message").css('display', 'none');
}

//Things I'd like to do:

//improve graphics of stretched images and gifs, I dont know how to work photoshop but I need to learn
//get the cards to spin back after wrong selection rather than just spin in one direction
//create a employer friendly version for github profile (just need a different initial background image)
//^or create a box when you enter the site that warns people of potentially offensive content
//improve the design of the side bar, and maybe insert a logo of some sort
//get an accuracy counter up and running
//randomize image order upon reset.
//download and optimize all images as assets rather than external files
//A more fun win message, maybe something with that ron paul its happening gif?
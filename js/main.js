//tab switching code
$('.switcher__item--card').click(function(){
	switchToThis($(this));
	showCardForm();
	clearAllFields();
});

$('.switcher__item--bank').click(function(){
	switchToThis($(this));
	showBankForm();
	clearAllFields();
});

function switchToThis(element){
	$('.switcher__item').removeClass('switcher__item--active');
	element.addClass('switcher__item--active');
}

function showBankForm(){
	$('.payment-form--card').addClass('hidden');
	$('.payment-form--bank').removeClass('hidden');
}

function showCardForm(){
	$('.payment-form--bank').addClass('hidden');
	$('.payment-form--card').removeClass('hidden');
	$('#card_number').focus();
}

function clearAllFields(){
	$('.payment-form__field').val('');
	$('.payment-form__select').val('');
}

//input masks code
$(document).ready(function(){
  $('#card_number')
  	.mask('0000 0000 0000 0000', { 
		onComplete: function(){
			$('#valid_till').focus();
		}
	});

  $('#valid_till')
  	.mask('00/00', { 
		onComplete: function(){
			$('#cvv').focus();
		}
	});

  $('#cvv').mask('000');

  $('#account_number')
    	.mask('000 000 0000', { 
  		onComplete: function(){
  			$('#otp').focus();
  		}
  	});

  $('#otp').mask('000 000');
});


//button click handlers
$('.payment-form--card .payment-form__button').click(function(){
	var button = $(this);
	switchIntoLoadingState(button);
	switchOutOfLoadingState(button);
});

$('.payment-form--bank .payment-form__button').click(function(){
	var button = $(this);
	switchIntoLoadingState(button);
	switchOutOfLoadingState(button);
});

function switchIntoLoadingState(button){
	button.addClass('payment-form__button--loading');
	button.prop('disabled', true);
}

function switchOutOfLoadingState(button){
	setTimeout(function(){
		button.removeClass('payment-form__button--loading');
		button.prop('disabled', false);
	}, 3000);	
}







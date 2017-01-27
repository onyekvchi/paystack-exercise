$('.switcher__item--card').click(function(){
	switchToThis($(this));
	showCardForm();
});

$('.switcher__item--bank').click(function(){
	switchToThis($(this));
	showBankForm();
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
}
jQuery(function($) {
	/*======= Skillset *=======*/
	var total = 0;
	$('.level-bar-inner').css('width', '0')
		.each(function() {
			var itemWidth = $(this).data('level');
			$(this).animate({
				width: itemWidth
			}, 800);	
		});
	
	$('.experiences-section').find('.company').each(function() {
		var $this = $(this), range = $this.data('range'), temp = range.split(' - '),
		d = new Date(), months = 0,
		since = {month: temp[0].split('/')[0] * 1, year: temp[0].split('/')[1] * 1 },
		till = temp[1] == 'now' ? {month: d.getMonth() + (d.getDate() > 15 ? 1 : 0) , year: d.getFullYear()} : {month: temp[1].split('/')[0] * 1, year: temp[1].split('/')[1] * 1 };
		months = (till.year - since.year) * 12 + (till.month - since.month) + 1;
		total += months;
		$this.append(' ('+ (months / 12  >= 1 ? Math.floor(months / 12) + ' ' + ( Math.floor(months / 12) == 1 ? 'year' : 'years' ) + ( months % 12 != 0 ? ' '+ (months % 12) + ' '+ (months % 12 == 1 ? 'month' : 'months' ) : '' ) : '' ) +')');
	});
	console.log('total', total);
	$('#total-years').html( Math.floor(total / 12) + '+' );
});

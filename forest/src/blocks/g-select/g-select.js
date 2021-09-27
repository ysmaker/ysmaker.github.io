o2.gSelect =
{
	outListeners: [],
	open($select)
	{
		this.close();
		$select.addClass('g-select--opened');
		let listner = o2.clickOutside($select, () =>
		{
			o2.gSelect.close();
		});
		this.outListeners.push(listner);
	},
	close()
	{
		$('._select').removeClass('g-select--opened');
		for(let listner of this.outListeners)
			document.removeEventListener('click', listner);
		this.outListeners = [];
	},
	toggle(instance)
	{
		let $select = $(instance).parents('._select');
		if (!$select.hasClass('g-select--opened'))
			o2.gSelect.open($select);
		else
			o2.gSelect.close();
	},
	setName($select,name)
	{
		$select.find('._selected-text').html(name);
	},
	setSelectedValue($select,selectedValue)
	{
		$select.find('._selected-value').val(selectedValue);
	},
	setSelectedColorBlock($select,colorBlock)
	{
		$select.find('._selected-color-block').addClass(colorBlock);
	},
	selecttItem(instance)
	{
		let $select = $(instance).parents('._select');
		let dataVal = $(instance).data('value');
		$select.addClass('changed');
		$select.removeClass('error');
		$select.find('._option').removeClass('g-select__item--active');
		$(instance).addClass('g-select__item--active');
		let name = $(instance).text(),
			selectedValue = $(instance).data('value');
		if($(instance).data('value') == 'code-oval')
		{
			$('._range-slider').eq(0).data('start',130);
			$('._range-slider').eq(1).data('start',90);
			// console.log($('._range-slider').eq(1).data('start'));
			$('.noUi-handle').on('change',()=>{console.log(true)});
		}
		o2.gSelect.setName($select,name);
		o2.gSelect.setSelectedValue($select,selectedValue);
		o2.changeTree($select,dataVal);
		o2.changeTable($select,dataVal);
		o2.paySumm(instance);
		o2.paymentAllPrice();
		o2.gSelect.close();
	},
	selectActive()
	{
		let selectActive = $('.g-select__item--active');
		selectActive.each((index,el)=>
		{
			o2.gSelect.selecttItem(el);
		});
	},
	selectRadio(instance)
	{
		let span = $('._span');
		let colorPicker = $('.forest__flex-content-item-block--color');
		if(instance.checked)
		{
			$('.g-radio').removeClass('active');
			$(instance).parents('.g-radio').addClass('active');
			o2.paymentTable.pay = o2.changeSizePrice();
			o2.paymentTable.pay += o2.changeSummColor();
			if($(instance).data('code') != 'transparent')
				colorPicker.addClass('active');
			else
				colorPicker.removeClass('active');
		}
		span.text(o2.maskValue(o2.paymentTable.pay));
	},
	changeTreeF(instance)
	{
		let allNeedSelect = $('.g-select__item--tree');
		$('._forest__flex-content-item-item').removeClass('active');
		$(instance).addClass('active');
		allNeedSelect.each((index,el)=>
		{
			if($(instance).data('value') == $(el).data('value'))
			{
				allNeedSelect.removeClass('g-select__item--active');
				$(el).addClass('g-select__item--active');
				$(el).parents('._select').addClass('changed');
				o2.gSelect.setName($(el).parents('._select'),$(el).text());
				o2.paySumm($(el));
			}
		});
		o2.paymentAllPrice();
	}
};
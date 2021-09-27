"use strict";
/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	o2.init();
});

/**
 * основной объект
 */
const o2 =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init()
	{
		this.gRangeSlider.init();
		this.gSelect.selectActive();
		// let table = document.querySelectorAll('.g-select__items--table .g-select__item');
		// let tableArray = Array.prototype.slice.call(table);
		// console.log(table);
		// threeDimensional();
		// this.gRangeSlider.init();
	},
	paymentTable:{},
	maskValue(val){return (val+'').replace(/\D/g,'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ')},
	/**
	* отслеживание клика вне блока
	*/
	clickOutside(element, callback)
	{
		const outsideChecker = (event) =>
		{
			const container = $(element);

			if (!container.is(event.target) && container.has(event.target).length === 0)
			{
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};

		document.addEventListener('click', outsideChecker);

		return outsideChecker;
	},
	changeSumm(slider,values,labTo)
	{
		let ranges = $('._range-slider-wrap');
		let composition = 0;
		let summEl = $('._span');
		ranges.each((index,el)=>
		{
			let uiSlider = $(el).find('.noUi-handle').attr('aria-valuetext');
			let currVal = +values/100;
			let allVal = +uiSlider/100 ;
			composition = allVal * currVal;
		});
		let composPay = o2.paymentTable.pay * +composition;
		o2.paymentTable.pay = composPay;
		summEl.text(composPay.toFixed());
	},
	changeSize(slider,values)
	{
		let dataVal = $(slider).data('value');
		let sizePay = $('.forest__flex-image-with-payment');
		sizePay.each((index,el)=>
		{
			let elValSpan = $(el).find('span');
			let elVal = $(el).find('span').data('value');
			if(dataVal == elVal)
				elValSpan.text(values);
		});
	},
	paymentAllPrice()
	{
		let colorEL = document.querySelectorAll('.g-select__item--active');
		let selEl = document.querySelectorAll('._selected-value');
		selEl.forEach((el,index)=>
		{
			if(selEl[0].getAttribute('value') == 'code-rectangular')
			{
				o2.changeSummColor();
				o2.changeSizePrice();
			}
			else
				o2.changeSizePriceRound();
		});
	},
	changeSummColor()
	{
		let attrib = Array.prototype.slice.call(document.querySelectorAll('.noUi-handle'));
		let colorEL = $('.g-radio.active');
		let colorELActive = colorEL.find('.g-radio__input');
		let summEl = $('._span');
		let area = 1;
		let wheight = 0;
		let val = 0;
		let square = 0;
		let price = 0;
		attrib.forEach((el,index)=>
		{
			if(el.hasAttribute('aria-valuetext'))
				area *= +el.getAttribute('aria-valuetext');
		});
		square = area / 10000;
		wheight = square * 10;
		if(colorELActive.data('code') == 'transparent')
			price = wheight * 0;
		else if(colorELActive.data('code') == 'matt')
			price = wheight * +colorELActive.data('matt');
		else
			price = wheight * +colorELActive.data('glossy');
		o2.paymentTable.prev = +price.toFixed();
		summEl.text(o2.paymentTable.pay);
		return o2.paymentTable.prev;
	},
	changeSizePrice()
	{
		let allVal;
		let sliderEl = $('._range-slider-wrap');
		let sliederElementsSumm = 0;
		let absoluteVal = 0;
		let summEl = $('._span');
		let colorEL = document.querySelectorAll('.g-select__item--active');
		sliderEl.each((index,el)=>
		{
			allVal = $(el).find('.noUi-handle').attr('aria-valuetext');
			sliederElementsSumm += +allVal/100;
		});
		colorEL.forEach((el,index)=>
		{
			if(!el.getAttribute('data-price')) return;
			o2.paymentTable.pay = +el.getAttribute('data-price');
		});

		absoluteSumm = o2.paymentTable.pay * +sliederElementsSumm.toFixed(2);
		o2.paymentTable.pay = +absoluteSumm.toFixed();
		o2.paymentTable.pay += o2.paymentTable.prev;
		summEl.text(o2.maskValue(o2.paymentTable.pay));
		return +absoluteSumm.toFixed();
	},
	changeSizePriceRound()
	{
		let allVal;
		let sliderEl = $('._range-slider-wrap');
		let sliederElementsSumm = 0;
		let absoluteVal = 0;
		let summEl = $('._span');
		let colorEL = document.querySelectorAll('.g-select__item--active');
		sliderEl.each((index,el)=>
		{
			allVal = $(el).find('.noUi-handle').attr('aria-valuetext');
			sliederElementsSumm += +allVal/100;
		});
		colorEL.forEach((el,index)=>
		{
			if(!el.getAttribute('data-price')) return;
			o2.paymentTable.pay = 30000;
		});
		absoluteSumm = o2.paymentTable.pay * +sliederElementsSumm.toFixed(2);
		o2.paymentTable.pay = +absoluteSumm.toFixed();
		o2.paymentTable.pay += o2.paymentTable.prev;
		summEl.text(o2.maskValue(o2.paymentTable.pay));
		// console.log('зашел');
	},
	paySumm(checkEl)
	{
		let listEl = $('.g-select__item');
		let summEl = $('._span');
		listEl.each((index,el)=>
		{
			if($(el).data('value') == $(checkEl).data('value'))
				summEl.text(o2.paymentTable.pay);

		});
	},
	changeTree(select,dataVal)
	{
		let allNeededImage = $('._forest__flex-content-item-item');
		allNeededImage.each((index,el)=>
		{
			if(dataVal == $(el).data('value'))
			{
				allNeededImage.removeClass('active');
				$(el).addClass('active');
			}
		});
	},
	changeTable(select,dataVal)
	{
		let allNeededSelect = $('.forest__flex-content-item-paragraph');
		allNeededSelect.each((index,el)=>
		{
			if(dataVal == $(el).data('value'))
			{
				$('.forest__flex-content-item-paragraph').removeClass('active');
				$(el).addClass('active');
			}
		});
	},
	paySumm(checkEl)
	{
		let listEl = $('.g-select__item');
		let summEl = $('._span');
		listEl.each((index,el)=>
		{
			if($(el).data('value') == $(checkEl).data('value'))
				summEl.text(o2.paymentTable.pay);

		});
	},
	paymentAllPrice()
	{
		let colorEL = document.querySelectorAll('.g-select__item--active');
		let selEl = document.querySelectorAll('._selected-value');
		selEl.forEach((el,index)=>
		{
			if(selEl[0].getAttribute('value') == 'code-rectangular')
			{
				o2.changeSummColor();
				o2.changeSizePrice();
			}
			else
				o2.changeSizePriceRound();
		});
	},
	// test:0,
	// changeSizeTable(values)
	// {
	// 	o2.test = values;
	// 	// console.log(o2.test);
	// 	return o2.test * 0.001;
	// },
	// returnValueFunc()
	// {
	// 	return o2.changeSizeTable(o2.test);
	// }
};
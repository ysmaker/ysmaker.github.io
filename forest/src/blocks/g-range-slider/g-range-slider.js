o2.gRangeSlider =
{
	flag:false,
	sliders:$('._range-slider'),
	lockedValues:[100,100],
	lockedValuesOval:[100,130],
	crossUpdate(value, slider)
	{
		var a = o2.gRangeSlider.sliders[0] === slider ? 0 : 1;
		var b = a ? 0 : 1;
		value -= o2.gRangeSlider.lockedValues[b] - o2.gRangeSlider.lockedValues[a];
		slider.noUiSlider.set(value);
	},
	crossUpdateOval(value, slider)
	{
		var a = o2.gRangeSlider.sliders[0] === slider ? 0 : 1;
		var b = a ? 0 : 1;
		// value -= o2.gRangeSlider.lockedValuesOval[b] - o2.gRangeSlider.lockedValuesOval[a];
		slider.noUiSlider.set(o2.gRangeSlider.lockedValuesOval[a]);
		slider.noUiSlider.set(o2.gRangeSlider.lockedValuesOval[b]);
	},
	init()
	{
		o2.gRangeSlider.sliders.each((index, element) => {
			const dataParams = $(element).data();
			let start = $(element).data('start');
			let connect = [true,false];
			if(typeof start == 'string')
			{
				start = start.split(',');
				connect = true;
			}

			const slider = noUiSlider.create(element,{
				start    : start,
				connect  : connect,
				format   : this.format,
				animate  : false,
				step     : 10,
				range    : {'min': dataParams.min , 'max': dataParams.max },
				tooltips: true ,
			});
			slider.on('set', this.set);
			slider.on('update', this.update);
			slider.on('slide', this.slideOne);
			slider.on('slide', this.slideTwo);
			// if($('.g-select__items--table .g-select__item--active').data('value') == 'code-oval')
			// {
			// 	o2.gRangeSlider.crossUpdateOval(values[handle],o2.gRangeSlider.sliders[1]);
			// }
		});
	},
	set(values, handle)
	{
		//$('._g-range-slider__name').removeClass('focus')
		if (handle == 0)
		{
			$(this.target).siblings('._min').trigger('change');
		}
		else
			$(this.target).siblings('._max').trigger('change');
	},
	update(values,handle)
	{
		let $slider = $(this.target).parents('._range-slider-wrap');
		let tool = $slider.find('.noUi-tooltip');
		let tooltip = $slider.find('.noUi-tooltip');
		let test = tooltip.text() + ' см';
		tooltip.html(test);
		let firstValue = o2.gRangeSlider.format.from(values[0].toString());
		let labTo = $slider.find('._label-to').html();
		$slider.find('._min').val(firstValue);
		o2.changeSumm($slider,values[0]);
		let from = o2.gRangeSlider.format.to(this.options.range.min);
		let to = o2.gRangeSlider.format.to(this.options.range.max);
		$slider.find('._label-to').html(to);
		$slider.find('._label-from').html(from);
		o2.changeSize($slider,values[0],labTo);
		// console.log($slider.find('._max'));
		if(values[0] == $slider.find('._range-slider').data('max'))
			$slider.find('.noUi-tooltip').addClass('translate');
		else
			$slider.find('.noUi-tooltip').removeClass('translate');
		// console.log($sliders);

		// changeSizePrice($slider,values[0],labTo);


		o2.paymentAllPrice();


		if(values.length > 1)
		{
			let secondVal = o2.gRangeSlider.format.from(values[1].toString());
			$slider.find('._max').val(secondVal);
			$slider.find('._label-from').html(values[0]);
			$slider.find('._label-to').html(values[1]);
		}
		return values[0];
	},
	slideOne(values,handle)
	{
		if($('.g-select__items--table .g-select__item--active').data('value') == 'code-round')
		{
			o2.gRangeSlider.crossUpdate(values[handle],o2.gRangeSlider.sliders[1]);
			// console.log(true);
			// element.noUiSlider.set(90);
			
		}

	},
	slideTwo(values,handle)
	{
		if($('.g-select__items--table .g-select__item--active').data('value') == 'code-round')
		{
			o2.gRangeSlider.crossUpdate(values[handle],o2.gRangeSlider.sliders[0]);
			// console.log(true);
			// element.noUiSlider.set(90);
			
		}
	},
	format:
	{
		to(number)
		{
			number = Math.round(number);
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		},
		from(stringNumber)
		{
			return Number(stringNumber.replace(/[ ,\-]+/, ''));
		}
	},
};
/*
 * inputlimits
 * https://github.com/nicolaszhao/inputlimits
 *
 * Copyright (c) 2013 Nicolas Zhao
 * Licensed under the MIT license.
 */

(function($) {

	$.fn.inputlimits = function(options) {
		var args = Array.prototype.slice.call(arguments, 1);

		if (typeof options === 'string') {
			this.each(function() {
				var instance = $(this).data('inputlimits-limiter');

				if (instance && $.type(instance[options]) === 'function' && options !== 'create') {
					instance[options].apply(instance, args);
				}
			});
		} else {
			options = $.extend({}, $.fn.inputlimits.defaults, options);

			this.each(function() {
				var $element = $(this),
					instance = $element.data('inputlimits-limiter'),
					limiter;

				if (instance) {
					instance.option(options);
				} else {
					limiter = $.extend({}, $.fn.inputlimits.limiter);
					$element.data('inputlimits-limiter', limiter);
					limiter.create($element, options);
				}
			});
		}

		return this;
	};

	$.fn.inputlimits.defaults = {
		maxlength: 10,
		showRemainingChars: true,

		// {0}: remaining chars number, {1}: maxlength number
		remainingCharsText: '({0} characters remaining, up to {1} characters)',

		// callback
		change: null
	};

	$.fn.inputlimits.limiter = {
		create: function($element, options) {
			var that = this;

			this.$element = $element;
			this.options = $.extend({}, options);

			this.$element.on({
				keydown: function(event) {
					if ($.fn.inputlimits.utils.isDisabledInput(event, that.options.maxlength)) {
						event.preventDefault();
					}

					setTimeout(function() {
						if (that.value !== event.target.value) {
							that.refresh();
						}
					}, 200);
				},

				keyup: function() {
					that._maxlength();
				}
			});

			this._refresh();
		},

		option: function(options) {
			this.options = $.extend(this.options, options);
			this._refresh();
		},

		refresh: function() {
			this._maxlength();
			this._refreshRemaining();
			this._change();

			this.value = this.$element.val();
		},

		_refresh: function() {
			if (this.options.showRemainingChars) {
				if (!this.$helper) {
					this.$helper = this._helper();
				}
			} else {
				if (this.$helper) {
					this.$helper.remove();
					this.$helper = null;
				}
			}

			this._maxlength();
			this._refreshRemaining();

			if (this.value !== this.$element.val()) {
				this._change();
				this.value = this.$element.val();
			}
		},

		_refreshRemaining: function() {
			var remainingCharsText = this.options.remainingCharsText
					.replace('{0}', this.options.maxlength - this.$element.val().length)
					.replace('{1}', this.options.maxlength);

			if (this.$helper) {
				this.$helper.html(remainingCharsText);
			}
		},

		_maxlength: function() {
			var value = this.$element.val(),
				maxlength = this.options.maxlength;

			if (value.length > maxlength) {
				this.$element.val(value.substring(0, maxlength));
			}
		},

		_helper: function() {
			return $('<div class="inputlimits-helper" />').insertAfter(this.$element);
		},

		_change: function() {
			var callback = this.options.change;

			if (typeof callback === 'function') {
				callback.call(this.$element, {
					value: this.$element.val()
				});
			}
		}
	};

	$.fn.inputlimits.utils = {

		keyCode: {
			BACKSPACE: 8,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			RIGHT: 39,
			UP: 38
		},

		isFunctionKey: function(which) {
			var ret = false;

			$.each(this.keyCode, function(key, code) {
				if (which === code) {
					ret = true;
					return false;
				}
			});

			return ret;
		},

		isDisabledInput: function(event, maxlength) {
			var element = event.target,
				hasSelection = document.selection ?
						document.selection.createRange().text.length > 0 :
						element.selectionStart !== element.selectionEnd;

			if (element.value.length >= maxlength &&
						!this.isFunctionKey(event.which) &&
						!event.ctrlKey && !event.altKey && !hasSelection) {

				return true;
			}

			return false;
		}
	};

}(jQuery));

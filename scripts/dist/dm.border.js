(function($) {
	dm.componentFactory("border", function($) {		
		var border = function (options) {
			var defaults = {
				borderColor: "#000",
				borderWidth: "2px",
				borderStyle: "solid"
			};
			
			var plugin = this;
			plugin.$el = $(this.selector);
			plugin.settings = jQuery.extend(true, defaults, options);
			
			plugin.$el.each(function() {				
				$(this).css({
					"border-color": plugin.settings.borderColor,
					"border-width": plugin.settings.borderWidth,
					"border-style": plugin.settings.borderStyle
				});
			});
			
			plugin.isBlinking = false;
			plugin.blinkInterval;
			
			plugin.blink = function () {
				var $el = plugin.$el;
				var state = "on";
				
				if (plugin.isBlinking === false) {
					plugin.isBlinking = true;
					blink();
				
					plugin.blinkInterval = setInterval(function () {
						blink();
					}, 500);
					
					function blink() {
						if (state === "on") {
							state = "off";
							$el.css('border-color', 'transparent');
						} else {
							state = "on";
							$el.css('border-color', plugin.settings.borderColor);
						}
					}
				} else {
					plugin.isBlinking = false;
					clearInterval(plugin.blinkInterval);
					$el.css('border-color', plugin.settings.borderColor);
				}
			};
			
			return plugin;
		};
		
		return border;
		
	}, null, [jQuery]);
})(jQuery);
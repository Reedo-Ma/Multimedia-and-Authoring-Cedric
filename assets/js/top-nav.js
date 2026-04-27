/**
 * Disables Editorial’s slide-out sidebar behaviors when using the top bar layout.
 * Load after assets/js/main.js.
 */
(function ($) {
	$(function () {
		var $w = $(window);
		var $sb = $('#sidebar');
		var $inner = $sb.children('.inner');

		$sb.off('click', 'a');
		$sb.off('click touchend touchstart touchmove');
		$w.off('scroll.sidebar-lock resize.sidebar-lock load.sidebar-lock');
		$inner.css({ position: '', top: '' }).data('locked', 0);
		$sb.find('.toggle').remove();
	});
})(jQuery);

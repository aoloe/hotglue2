/**
 *	modules/transform/transform.js
 *	Frontend code for general object properties
 *
 *	Copyright Gottfried Haider, Danja Vasiliev 2010.
 *	This source code is licensed under the GNU General Public License.
 *	See the file COPYING for more details.
 */

$(document).ready(function() {
	//
	// register menu items
	//
	var elem;
	elem = $('<img src="'+$.glue.base_url+'modules/transform/transform-flip.png" alt="btn" title="flip object" width="32" height="32">');
	$(elem).bind('click', function(e) {
		var that = this;
		var obj = $(this).data('owner');

		if ($(obj).css('-webkit-transform') != '') {

			var val = $(obj).css('-webkit-transform');
			if (val == 'matrix(-1, 0, 0, -1, 0, 0)') {
				$(obj).css('-webkit-transform', 'matrix(1, 0, 0, -1, 0, 0)');
			} else if (val == 'matrix(1, 0, 0, -1, 0, 0)') {
				$(obj).css('-webkit-transform', 'matrix(-1, 0, 0, 1, 0, 0)');
			} else if (val == 'matrix(-1, 0, 0, 1, 0, 0)') {
				$(obj).css('-webkit-transform', '');
			} else {
			$(obj).css('-webkit-transform', 'matrix(-1, 0, 0, -1, 0, 0)');
			}
		}
		else if ($(obj).css('-moz-transform') != '') {

			var val = $(obj).css('-moz-transform');
			if (val == 'matrix(-1, 0, 0, -1, 0px, 0px)') {
				$(obj).css('-moz-transform', 'matrix(1, 0, 0, -1, 0, 0)');
			} else if (val == 'matrix(1, 0, 0, -1, 0px, 0px)') {
				$(obj).css('-moz-transform', 'matrix(-1, 0, 0, 1, 0, 0)');
			} else if (val == 'matrix(-1, 0, 0, 1, 0px, 0px)') {
				$(obj).css('-moz-transform', '');
			} else {
			$(obj).css('-moz-transform', 'matrix(-1, 0, 0, -1, 0, 0)');
			}
		}
		$.glue.object.save(obj);
		});
	$.glue.contextmenu.register('object', 'transform-flip', elem, 8);
});

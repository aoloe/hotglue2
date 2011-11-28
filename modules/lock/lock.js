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
	$.glue.contextmenu.hide();

	elem = $('<img src="'+$.glue.base_url+'modules/lock/lock.png" alt="btn" title="lock object" width="32" height="32">');
	$(elem).bind('click', function(e) {
		var that = this;
		var obj = $(this).data('owner');

		if ($(obj).hasClass('lock')) {

			alert('lock!');
		
		}
		else {
			

		}
		$.glue.object.save(obj);
		});
	$.glue.contextmenu.register('object', 'lock', elem, 8);
});

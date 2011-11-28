<?php

/**
 *	module_anchor.inc.php
 *	Module for adding named anchor elements
 *
 *	Copyright Gottfried Haider, Danja Vasiliev 2010.
 *	This source code is licensed under the GNU General Public License.
 *	See the file COPYING for more details.
 */

@require_once('config.inc.php');
require_once('html.inc.php');
require_once('html_parse.inc.php');
require_once('modules.inc.php');
// module glue gets loaded on demand


// module_image.inc.php has more information on what's going on inside modules 
// (they can be easier than that one though)


function transform_alter_render_early($args)
{
	$elem = &$args['elem'];
	$obj = $args['obj'];
	if (!elem_has_class($elem, 'object')) {
		return false;
	}

	if (!empty($obj['transform-flip'])) {
		elem_css($elem, '-webkit-transform', $obj['transform-flip']);
		elem_css($elem, '-moz-transform', $obj['transform-flip']);
		elem_css($elem, '-o-transform', $obj['transform-flip']);
		elem_css($elem, '-ms-transform', $obj['transform-flip']);

	}
	
	return true;
}


function transform_alter_save($args)
{
	$elem = $args['elem'];
	$obj = &$args['obj'];
	if (!elem_has_class($elem, 'object')) {
		return false;
	}

	if (elem_css($elem, '-webkit-transform') !== NULL) {
		$obj['transform-flip'] = elem_css($elem, '-webkit-transform');
	}	
	else if (elem_css($elem, '-moz-transform') !== NULL) {
		$moz_transform = elem_css($elem, '-moz-transform');
		$moz_transform = str_replace("pt", "", $moz_transform);
		$obj['transform-flip'] = $moz_transform;
	} else {
		unset($obj['transform-flip']);
	}
	
	return true;
}


function transform_render_object($args)
{
	$elem = $args['elem'];
	$obj = &$args['obj'];
	if (!elem_has_class($elem, 'object')) {
		return false;
	}
	
	if (!empty($obj['transform-flip'])) {
		elem_css($elem, '-webkit-transform', $obj['transform-flip']);
		elem_css($elem, '-moz-transform', $obj['transform-flip']);
	}

}


function transform_render_page_early($args)
{
	if ($args['edit']) {
		if (USE_MIN_FILES) {
			html_add_js(base_url().'modules/transform/transform.min.js');
		} else {
			html_add_js(base_url().'modules/transform/transform.js');
		}
//		html_add_css(base_url().'modules/transform/transform.css');
		return true;
	} else {
		return false;
	}
}


?>

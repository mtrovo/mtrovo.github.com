/**
 * jQuery Stepy - A Wizard Plugin - http://wbotelhos.com/stepy
 * -----------------------------------------------------------------------------
 *
 * jQuery show on load make some elements of your page only fadein to the page
 * when the user is actually viewing your page, like the effect used by google
 * on its main page sometime ago.
 *
 * Licensed under The MIT License
 *
 * @version			0.1.0
 * @since			07.12.2010
 * @author			Moises Trovo
 * @twitter			http://twitter.com/mtrovo
 * @license			http://opensource.org/licenses/mit-license.php MIT
 * @package			jQuery Plugins
 *
 * Usage with default values:
 * -----------------------------------------------------------------------------
 *
 * for an element:
 * <div id="default">Content to fade in on load.</div>
 *
 * and a css style:
 * #default {display:none}
 *
 * with the following javascript code we will make the element fade in when the user first see the page:
 * $('#default').showonload();
 *
 */
(function($){
  $.fn.extend({showonload: function(settings){
	var opt = $.extend({}, $.fn.showonload.defaults, settings);
    var root = $(opt.rootElement);
    var fnShow = $.proxy(function(){
      if(opt.onBeforeShow) ($.proxy(opt.onBeforeShow, this))();
      if(opt.onShow) ($.proxy(opt.onShow, this))();
      else $(opt.target || this).fadeIn(opt.fadeInterval);
      if(opt.onAfterShow) ($.proxy(opt.onAfterShow, this))();

      root.unbind(opt.eventType, fnShow);
    }, this);
    root.bind(opt.eventType, fnShow);
  }});
  $.fn.showonload.defaults = {
    rootElement: "html,body",
    eventType: "mousemove",
    target: null,
    fadeInterval: 1000,
    onBeforeShow: null,
    onShow: null,
    onAfterShow: null
  };
 })(jQuery);


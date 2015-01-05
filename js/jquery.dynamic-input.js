;'use strict';
/*!
 * jQuery dynamic input

 Example:
    <div class="input-text" contenteditable="true" data-name="field-name" data-placeholder="Field value" data-submit="/course/123-456" />
 */

(function($, window, document) {

    // Create the defaults once
    var pluginName = "dynamicInput",
        defaults = {

        };

    function DynamicInput(element, options) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    DynamicInput.prototype = {
        init: function() {
            var $el = $(this.element);

            $el.on('click', $.proxy(this.showMenu, this));
        },

        showMenu: function(e) {
            e.preventDefault();
            e.stopPropagation();

            $('.di-menu').remove();
            var $el = $(this.element);

            $el.removeClass('error success');

            var $menu = $('<div class="di-menu"><button class="di-menu-ok icon-check"></button><button class="icon-cancel short"></button></div>');
            var position = $el.offset();
            $menu.css({display: 'none'});
            $el.parent().append($menu);

            $menu.css({top: position.top, left: position.left + $el.outerWidth() - $menu.outerWidth()});
            this.$menu = $menu;
            $menu.show();

            // Bind the ok button
            $menu.find('.di-menu-ok').on('click', $.proxy(this.submit, this));
            $(document).one('click', $.proxy(this.reset, this));
        },

        submit: function(e) {
            e.preventDefault();
            e.stopPropagation();

            var $el = $(this.element),
                url = $el.data('submit'),
                data = {};

            data[$el.data('name')] = $el.text();

            $.ajax({
                url: url,
                data: data,
                type: 'POST',
                success: $.proxy(this.success, this),
                error: $.proxy(this.error, this)
            });
        },

        success: function() {
            var $el = $(this.element);
            $el.addClass('success');
            setTimeout(function() {
                $el.css({'transition': 'all .5s'});
                $el.removeClass('success');
            }, 8000);
            this.reset();
        },

        error: function(xhr, status, err) {
            var $el = $(this.element);
            $el.addClass('error');
            this.reset();
        },

        reset: function() {
            $('.di-menu').remove();
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function() {
            if (!$.data(this, "di_" + pluginName)) {
                $.data(this, "di_" + pluginName,
                new DynamicInput(this, options));
            }
        });
    };

})(jQuery, window, document);
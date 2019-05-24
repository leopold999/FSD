/**
 * jQuery Star Rating plugin
 * Joost van Velzen - http://joost.in
 *
 * v 1.0.3
 *
 * cc - attribution + share alike
 * http://creativecommons.org/licenses/by-sa/4.0/
 */

// (function ($) {
//     $.fn.plug55 = function () {
        
//         console.log(
//             this
//         )
//     }
// }(jQuery))

(function ($) {
    $.fn.addRating = function (options) {

        var obj = this;
        var settings = $.extend({
            max: 5,
            half: true,
            fieldName: '111',
            fieldID: 'rating',
            icon: 'star',
            selectedRatings: 0,
            selected: false,
            tempRating: 0
        }, options);
        this.settings = settings;
        
        // create the stars
        for (var i = 1; i <= settings.max; i++) {
            $('<span/>').html(this.settings.icon + '_border').data('rating', i).appendTo(this)
            .click(
                
                function(e) {
                         obj.setRating($(this).data('rating'))
                    settings.selected = true;
                    settings.tempRating = $(this).data('rating');
                    

                    
                }
            ).hover(
                function (e) {
                    obj.showRating($(this).data('rating'), true);          
                }, function () {
                    obj.showRating(settings.tempRating, true);
                }
            );

        }
        
        $(this).append('<input type="hidden" name="' + settings.fieldName + '" value="' + settings.selectedRatings + '" />');

        obj.showRating(settings.selectedRatings, true);
    };

    $.fn.setRating = function (numRating) {
        
        var obj = this;
        // $('#' + obj.settings.fieldId).val(numRating);
        obj.showRating(numRating, true);
        
    };

    $.fn.func = function(arg) {
        console.log(arg)
    }

    $.fn.showRating = function(numRating, force)  {
        var obj = this;
        
        $(obj).find('span').each(function () {
            var icon = obj.settings.icon + '_border';
            $(this).removeClass('selected');

            if ($(this).data('rating') <= numRating) {
                icon = obj.settings.icon;
                $(this).addClass('selected');
            }
            $(this).html(icon);
        })
    }

}(jQuery));

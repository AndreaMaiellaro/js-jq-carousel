var rightArrow = $('.right');

rightArrow.click(function() {
    var currentActive = $('.active');
    currentActive.removeClass('active');

    if (currentActive.hasClass('last') ) {
        $('.first').addClass('active');
    } else {
        var nextImg = currentActive.next();

        nextImg.addClass('active');
    }
});

var leftArrow = $('.left');


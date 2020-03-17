(function($) {
    $(".module-editor-nav-submit").on('click', function(event) {

        $(".module-editor-head-message").addClass('show');
        $(".module-editor-head-message").addClass('submit');
        $(".module-editor-head-message").removeClass('delete');

        $(".module-editor-head-message p").html('Module has been submitted!');

        var title = $('.module-editor-title-input').val();
        $(".module-editor-head h1").removeClass("delete");
        if (title != "") {
            $(".module-editor-head h1").html(title);
        } else {
            $(".module-editor-head h1").html("Untitled Module");
        }
    });

    $(".module-editor-nav-delete").on('click', function(event) {

        $(".module-editor-head-message").addClass('show');
        $(".module-editor-head-message").addClass('delete');
        $(".module-editor-head-message").removeClass('submit');

        $(".module-editor-head-message p").html('Module has been deleted.');

        $(".module-editor-head h1").html("DELETED MODULE");
        $(".module-editor-head h1").addClass("delete");
    });
})(jQuery);
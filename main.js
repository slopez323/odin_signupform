$(window).on('keyup', function () {
    if ($('#confirm-pass').val() != '') {
        if ($('#pass').val() != $('#confirm-pass').val()) {
            $('.pass-error').show();
            $('#pass').addClass('invalid');
            $('#confirm-pass').addClass('invalid');
        } else {
            $('.pass-error').hide();
            $('#pass').removeClass('invalid');
            $('#confirm-pass').removeClass('invalid');
        };
    };
});
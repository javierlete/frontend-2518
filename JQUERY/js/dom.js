$(function() {
    $('h1').each(function() {
        $(this).html($(this).html().toUpperCase());
    });

    $('#saludar').on('click', function() {
        console.log('Se ha hecho click');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        $('span.error').each(function() {
            this.remove();
        });
        
        if ($('form')[0].checkValidity()) {
            $('#nombre').removeClass('error');
            $('#mensaje').html('Hola ' + $('#nombre').val());
        } else {
            $('#nombre').addClass('error');

            $('#nombre')[0].focus();

            $('<span class="error">Este campo es obligatorio</span>').insertAfter($('#nombre'));
        }
    });
});

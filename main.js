$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    })
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            telefone:{
                required:true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalidos();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})
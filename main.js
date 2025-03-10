$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    })
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#nome').mask('')

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    })

    $('#email').mask('A', {
        placeholder: 'seuemail@gmail.com',
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
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
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if(camposIncorretos){
                alert(`Por favor, confira: há ${camposIncorretos} campo(s) incorreto(s) ou não preenchido(s).`)
            }
            form.reset();
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})
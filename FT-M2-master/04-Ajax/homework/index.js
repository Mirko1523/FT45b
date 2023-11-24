const amigos = [
    { "id": 1, "name": "Toni", "age": 30, "email": "toni@henry.com" },
    { "id": 2, "name": "Emi", "age": 32, "email": "emi@henry.com" },
    { "id": 3, "name": "Martin", "age": 35, "email": "martin@henry.com" },
    { "id": 4, "name": "Jimmy", "age": 35, "email": "jimmy@henry.com" },
    { "id": 5, "name": "Franco", "age": 67, "email": "franco@gmail.com" },
    { "id": 6, "name": "Manu", "age": 47, "email": "manu@henry.com" }
];
$(document).ready(function () {
   
    mostrarAmigos(amigos);
});

$(document).ready(function () {
   
    $('#boton').click(function () {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:5000/amigos',
            success: function (data) {
                mostrarAmigos(data);
            },
            error: function (error) {
                console.error('Error al obtener amigos:', error);
            }
        });
    });

    
    $('#search').click(function () {
        const searchId = $('#input').val();

        $.ajax({
            type: 'GET',
            url: `http://localhost:5000/amigos/${searchId}`,
            success: function (amigo) {
                mostrarAmigoEncontrado(amigo);
            },
            error: function (error) {
                console.error('Error al buscar amigo:', error);
            }
        });
    });

   
    $('#add').click(function () {
        const nombreNuevoAmigo = $('#inputAdd').val();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:5000/amigos',
            data: { nombre: nombreNuevoAmigo },
            success: function () {
                mostrarExitoAgregado();
            },
            error: function (error) {
                console.error('Error al agregar amigo:', error);
            }
        });
    });

  
    $('#delete').click(function () {
        const deleteId = $('#inputDelete').val();

        $.ajax({
            type: 'DELETE',
            url: `http://localhost:5000/amigos/${deleteId}`,
            success: function () {
                mostrarExitoBorrado();
            },
            
        });
    });

    function mostrarAmigos(amigos) {
        const lista = $('#lista');
        lista.empty();
        amigos.forEach(function (amigo) {
            lista.append(`<li>${amigo.name}</li>`);
        });
    }

    function mostrarAmigoEncontrado(amigo) {
        const amigoSpan = $('#amigo');
        amigoSpan.text(`Nombre del amigo: ${amigo.name}`);
    }

    function mostrarExitoBorrado() {
        const successSpan = $('#success');
        successSpan.text('Amigo borrado exitosamente.');
    }


});

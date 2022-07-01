

document.querySelector('#search-cep').onclick = function () {
    let cep = document.getElementById('cep').value
    carregarCep(cep);

    var show = document.getElementById("show");
    show.style.display = 'block';
    // show.classList.toggle("show");
   
}

// var button = document.getElementById("search-cep");

// button.addEventListener("click", function() {
    
// });

function carregarCep(cep) {
    fetch('http://viacep.com.br/ws/' + cep + '/json').then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            
            document.querySelector('#show').innerHTML =  `
                <p>CEP: ${data.cep}</p>
                <p>Rua: ${data.logradouro}</p>
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade}</p>
                <p>Estado: ${data.uf}</p>
            `
        })
    })
}
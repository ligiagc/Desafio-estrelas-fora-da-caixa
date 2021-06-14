const numeroPersonagens = 671;
const img = document.querySelector('image');

const personagemAleatorio = () => {
    return Math.floor(Math.random() * numeroPersonagens);
}

const buscarPersonagem = (id) => {
    const Aleatorio = personagemAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${Aleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((results) => {
        const img = document.getElementById("image" + id);
        const name = document.getElementById("name-personagem" + id);

        img.src = results.image;
        img.alt = 'image do personagem: ' + results.name;

        name.textContent = results.name;
    })
}
//buscar o personagem pelo numero do ID com array ou list

const buscarPersonagens = () => {
    const idPersonagens = [1, 2, 3, 4];
    idPersonagens.forEach(id => buscarPersonagem(id));
}
window.onload = buscarPersonagens;

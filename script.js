// console.log('hello') trying out if was linked correctly

const input = document.querySelector('#input')
const button = document.querySelector('#button')
const domain = 'https://pokeapi.co/api/v2/pokemon'

const getPokemon = () => {
    const search = `${domain}/${input.value}/`
    axios.get(search)
    .then(response => {
        console.log(response)
    })
}

button.addEventListener('click', () =>{
    console.log(input.value)
    if(input.value === ''){
        alert('no pokemon name is entered')
    }
    getPokemon()
})
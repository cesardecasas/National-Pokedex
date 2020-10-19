// console.log('hello') trying out if was linked correctly
//ask for help regarding displaying more tha 1 type and removew the last pokemon searched
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const domain = 'https://pokeapi.co/api/v2/pokemon'
const pokemonPlace = document.querySelector('.pokemon') 
const characteristics = 'https://pokeapi.co/api/v2/characteristic/'


const renderPokemon = poke =>{
        let pokeDiv = document.createElement('div')
        pokeDiv.classList.add ('pokeInfo')
        pokemonPlace.append(pokeDiv)

        let pokemonH = document.createElement('h3')
        pokemonH.innerHTML = `${poke.name} #${poke.id}`
        pokemonH.classList.add ('pokeName')
        pokeDiv.appendChild(pokemonH)

        poke.types.forEach(type => {
            let pokemonType = document.createElement('h4')
            pokemonType.innerHTML = `${type.type.name}`
            pokeDiv.appendChild(pokemonType)
        });


        let pokeImg = document.createElement('img')
        pokeImg.src = poke.sprites.front_default
        pokeImg.classList.add ('pImg')
        pokeDiv.append(pokeImg)

        let statsList = document.createElement('ul')
        pokeDiv.append(statsList)

        poke.stats.forEach(stat =>{
            console.log(stat)
            let bstat = document.createElement('li')
            bstat.innerHTML = `${stat.stat.name}:${stat.base_stat}`
            statsList.appendChild(bstat)
        })

}
const renderCharacteristics = data => {
        let pokeDiv = document.createElement('div')
        pokemonPlace.appendChild(pokeDiv)

        let pokeC = document.createElement('p')
        pokeC.innerHTML = data.descriptions[2].description
        pokeDiv.appendChild(pokeC)
}


const getPokemon = async () => {
    try{
    const search = `${domain}/${input.value}/`
    const response = await axios.get(search)
    
        console.log(response.data)
        renderPokemon(response.data)
    }catch(error){
        console.log(error)
    }
}

// const getCharacteristics = async () =>{
//     try{
//         const searchC = `${characteristics}${input.value}/`
//         const response = await axios.get(searchC)
//         console.log(response)
//         renderCharacteristics(response.data)
//     }catch(error){
//         console.log(error)
//     }
// }

const rmPoke = () => {
//  pokemonPlace.removeChild(pokemonPlace.firstChild)
 pokemonPlace.removeChild(pokemonPlace.lastChild)
//  pokemonPlace.removeChild(pokemonPlace.lastChild)

}

button.addEventListener('click', () =>{
    console.log(input.value)
    if(input.value === ''){
        alert('no pokemon name is entered')
    }
    rmPoke()
    getPokemon()
    // getCharacteristics()
})
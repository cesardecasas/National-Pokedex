// console.log('hello') trying out if was linked correctly
//ask for help regarding displaying more tha 1 type and removew the last pokemon searched
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const domain = 'https://pokeapi.co/api/v2/pokemon'
const pokemonPlace = document.querySelector('.pokemon') 
const pokemonPlace2 = document.querySelector('.pokemon2')
const pokemonPlace3 = document.querySelector('.pokemon3')
const characteristics = 'https://pokeapi.co/api/v2/pokemon-species/'
const types = 'https://pokeapi.co/api/v2/type/'


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
            let bstat = document.createElement('li')
            bstat.innerHTML = `${stat.stat.name}:${stat.base_stat}`
            statsList.appendChild(bstat)
        })

}
const renderCharacteristics = data => {
        let pokeDiv = document.createElement('div')
        pokemonPlace2.appendChild(pokeDiv)

        let pokeC = document.createElement('p')
        pokeC.innerHTML = data.flavor_text_entries[0].flavor_text
        pokeDiv.appendChild(pokeC)
}

const renderTypeList = data => {
    let pokeDiv = document.createElement('div')
    pokemonPlace.appendChild(pokeDiv)

    data.pokemon.forEach(poke =>{
        let name = document.createElement('h3')
        name.classList.add('pokelist')
        name.innerHTML = `${poke.pokemon.name}`
        pokeDiv.appendChild(name)

    })
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

const getCharacteristics = async () =>{
    try{
        const searchC = `${characteristics}${input.value}/`
        const response = await axios.get(searchC)
        console.log(response.data)
        renderCharacteristics(response.data)
    }catch(error){
        console.log(error)
    }
}

const getTypeList = async () =>{
    try{
        const search = `${types}${input.value}/`
        const response = await axios.get(search)
        console.log(response.data)
        renderTypeList(response.data)
    }catch(error){
        console.log(error)
    }
} 

const rmPoke = () => {
    if(pokemonPlace.lastChild){
 pokemonPlace.removeChild(pokemonPlace.lastChild)
    }
    if(pokemonPlace2.lastChild){
        pokemonPlace2.removeChild(pokemonPlace2.lastChild)
        }
}


button.addEventListener('click', () =>{
    console.log(input.value)
    if(input.value === ''){
        alert('no pokemon name is entered')
    }
    rmPoke()
    getPokemon()
    getCharacteristics()
    getTypeList()
})
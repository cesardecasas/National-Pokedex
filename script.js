// console.log('hello') trying out if was linked correctly
//ask for help regarding displaying more tha 1 type and removew the last pokemon searched
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const domain = 'https://pokeapi.co/api/v2/pokemon'
const pokemonPlace = document.querySelector('.pokemon') 


const renderPokemon = poke =>{
        let pokemonH = document.createElement('h3')
        pokemonH.innerHTML = `${poke.name} #${poke.id}`
        pokemonH.classList.add ('pokeName')
        pokemonPlace.appendChild(pokemonH)

        let pokemonType = document.createElement('h4')
        pokemonType.innerHTML = `${poke.types[0].type.name} ${poke.types[1].type.name}`
        pokemonPlace.appendChild(pokemonType)

        let pokeDiv = document.createElement('div')
        pokeDiv.classList.add ('pokeInfo')
        pokemonPlace.append(pokeDiv)

        let pokeImg = document.createElement('img')
        pokeImg.src = poke.sprites.front_default
        pokeImg.classList.add ('pImg')
        pokeDiv.append(pokeImg)

        let statsList = document.createElement('ul')
        pokeDiv.append(statsList)

        let hpstat = document.createElement('li')
        hpstat.innerHTML = `${poke.stats[0].stat.name}:${poke.stats[0].base_stat}`
        statsList.appendChild(hpstat)

        let attstat = document.createElement('li')
        attstat.innerHTML = `${poke.stats[1].stat.name}:${poke.stats[1].base_stat}`
        statsList.appendChild(attstat)

        let defstat = document.createElement('li')
        defstat.innerHTML = `${poke.stats[2].stat.name}:${poke.stats[2].base_stat}`
        statsList.appendChild(defstat)

        let spastat = document.createElement('li')
        spastat.innerHTML = `${poke.stats[3].stat.name}:${poke.stats[3].base_stat}`
        statsList.appendChild(spastat)

        let spdstat = document.createElement('li')
        spdstat.innerHTML = `${poke.stats[4].stat.name}:${poke.stats[4].base_stat}`
        statsList.appendChild(spdstat)

        let spestat = document.createElement('li')
        spestat.innerHTML = `${poke.stats[5].stat.name}:${poke.stats[5].base_stat}`
        statsList.appendChild(spestat)

        // poke.stats.forEach(() =>{
        //     let bstat = document.createElement('li')
        //     bstat.innerHTML = `${poke.stats.stat.name}:${base_stat}`
        //     statsList.appendChild(bstat)
        // })
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

const rmPoke = () => {

 pokemonPlace.removeChild(pokeDiv)

}

button.addEventListener('click', () =>{
    console.log(input.value)
    if(input.value === ''){
        alert('no pokemon name is entered')
    }
    
    getPokemon()
})
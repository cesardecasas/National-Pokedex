// console.log('hello') trying out if was linked correctly

const input = document.querySelector('#input')
const button = document.querySelector('#button')
const domain = 'https://pokeapi.co/api/v2/pokemon'
const pokemonPlace = document.querySelector('.pokemon') 


const rederPokemon = poke =>{
        let pokemonH = document.createElement('h3')
        pokemonH.innerHTML = `${poke.name} #${poke.id}`
        pokemonH.classList.add ('pokeName')
        pokemonPlace.append(pokemonH)

        let pokeDiv = document.createElement('div')
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
        rederPokemon(response.data)
    }catch(error){
        console.log(error)
    }
}

button.addEventListener('click', () =>{
    console.log(input.value)
    if(input.value === ''){
        alert('no pokemon name is entered')
    }
    getPokemon()
})
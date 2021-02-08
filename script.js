const input = document.querySelector('#input')
const button = document.querySelector('#button')
const domain = 'https://pokeapi.co/api/v2/pokemon'
const pokemonPlace = document.querySelector('.pokemon') 
const pokemonPlace2 = document.querySelector('.pokemon2')
const characteristics = 'https://pokeapi.co/api/v2/pokemon-species/'
const types = 'https://pokeapi.co/api/v2/type/'
const dropdown = document.querySelector('#searchBy')
const pokeList = document.querySelector('.pokeList')
const pokeH3 = document.querySelector('h3')
const team = document.querySelector('.myTeam')


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
            pokemonType.classList.add ('type')
            pokemonType.innerHTML = `${type.type.name} `
            pokeDiv.appendChild(pokemonType)
        });

        let pokeImg = document.createElement('img')
        pokeImg.src = poke.sprites.front_default
        pokeImg.classList.add ('pImg')
        pokeDiv.append(pokeImg)

        let myTeam =  document.createElement('button')
        myTeam.classList.add ('myTeamB')
        myTeam.innerHTML = 'Add to Team'
        myTeam.addEventListener('click', () =>{
            transferData(poke)
        })
        pokeDiv.appendChild(myTeam) 

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
        pokeDiv.classList.add('gen')
        pokemonPlace2.appendChild(pokeDiv)
            data.flavor_text_entries.forEach(text =>{
                if(!pokeDiv.firstChild){
                if(text.language.name === 'en'){
                    let pokeC = document.createElement('p')
                    pokeC.classList.add ('description')
                    pokeC.innerHTML = text.flavor_text
                    pokeDiv.appendChild(pokeC)
                }
            }
        })
        let generation = document.createElement('p')
        generation.innerHTML = `${data.generation.name}`
        generation.classList.add('generation')
        pokeDiv.appendChild(generation)
}

const renderTypeList = data => {
    let pokeDiv = document.createElement('div')
    pokeDiv.classList.add('pokeList')
    pokemonPlace.appendChild(pokeDiv)

    let instruction = document.createElement('h2')
    instruction.innerHTML = 'Select Pokemon'
    instruction.classList.add('instruction')
    pokeDiv.appendChild(instruction)

    data.pokemon.forEach(poke =>{
        let name = document.createElement('h3')
        name.classList.add('pokeListI')
        name.innerHTML = `${poke.pokemon.name}`
        name.addEventListener('click', () =>{
            getPokemonL(name.innerHTML)
            getCharacteristicsL(name.innerHTML)
            rmPoke()
        })
        pokeDiv.appendChild(name)
        
    })
}

const clearF = () => {
    input.value = ''
}

const transferData = (pokemon) =>{
    const myTeam = JSON.parse(localStorage.getItem('myTeam')) || [] 
    const mypokemon = {
        name: pokemon.name,
        img: pokemon.sprites.front_default
    }
    myTeam.push(mypokemon)
    localStorage.setItem('myTeam',JSON.stringify(myTeam))
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

const getPokemonL = async (data) => {
    try{
    const search = `${domain}/${data}/`
    const response = await axios.get(search)
    
        console.log(response.data)
        renderPokemon(response.data)
    }catch(error){
        console.log(error)
    }
}

const getCharacteristicsL = async (data) =>{
    try{
        console.log()
        const searchC = `${characteristics}${data}/`
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
    if(dropdown.value === 'Name or Id'){
        rmPoke()
        getPokemon()
        getCharacteristics()
        clearF()
    }else if(dropdown.value === 'Type'){
        rmPoke()
        getTypeList()
        clearF()
    }
})
 
team.addEventListener('click',()=>{
    console.log('hello')
    href='./myteam.html'
})
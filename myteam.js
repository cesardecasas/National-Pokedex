const teamDiv = document.querySelector('.team')

const myTeam = JSON.parse(localStorage.getItem('myTeam'))

console.log(myTeam)

const removePoke = (poke) => {
    teamDiv.innerHTML=''
    myTeam.splice(poke,1)
    localStorage.setItem('myTeam',JSON.stringify(myTeam))
    displayTeam()
}

const displayTeam = () =>{
    myTeam.forEach( (team,index) => {
    const pokeDiv = document.createElement('div')
    teamDiv.appendChild(pokeDiv)

    const name = document.createElement('h1')
    name.innerHTML = `${team.name}`
    pokeDiv.appendChild(name)

    const sprite = document.createElement('img')
    sprite.src = team.img
    pokeDiv.appendChild(sprite)

    const remove = document.createElement('button')
    remove.innerHTML = 'Remove'
    remove.classList.add ('removeB')
    remove.addEventListener('click', () =>{
        removePoke(index)
    })
    pokeDiv.appendChild(remove)
});
}

displayTeam()
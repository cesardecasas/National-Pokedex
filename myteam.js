const teamDiv = document.querySelector('.team')

const myTeam = JSON.parse(localStorage.getItem('myTeam'))

console.log(myTeam)

const removePoke = (poke) => {
    myTeam.forEach( dPoke => {
        if(poke === dPoke){
            localStorage.removeItem(dPoke)
        }
        
    });
}

myTeam.forEach( (team) => {
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
    remove.addEventListener('click', () =>{
        removePoke(team.name)
    })
    pokeDiv.appendChild(remove)
});
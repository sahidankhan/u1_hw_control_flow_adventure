
const startGame = (adventureGame) => {}

let adventureName = prompt(`Hello travler! What is your name?`)
console.log(adventureName)

const age = prompt(`Welcome to the Adventure's Guild ${adventureName}! Tell me, what how old are you?`)
console.log(age)

if(age <= 17){
    alert(`No one is too young for adventure! Last question before we give you your equiptment. There are four classes to choose from. This will give you special perks and equiptment so choose wisely.`)
}else if(age >=18 && age < 99){
    alert(`Perfect! Last question before we give you your equiptment. There are four classes to choose from. This will give you special perks and equiptment so choose wisely.`)
}

let jobQuestion = prompt(`What class are you? Cleric? Paladin? Rogue? Warlock(C/P/R/W)?`)
let option = [`C`, `P`,`R`, `W`]

if(jobQuestion == option[0]){
    alert(`A Cleric huh? Great choice! Since it's dangerous to go alone, take this! You received 3 Holy Potions and 1 Ice Mace.`)
}else if(jobQuestion == option[1]){
    alert(`A Paladin huh? Great choice! Since it's dangerous to go alone, take this! You received 3 Holy Potions and 1 Fire Sword.`)
}else if(jobQuestion == option[2]){
    alert(`A Rogue huh? Great choice! Since it's dangerous to go alone, take this! You received 3 Holy Potions and 2 Wind Daggers.`)
}else if(jobQuestion == option[3]){
    alert(`A Warlock huh? Great choice! Since it's dangerous to go alone, take this! You received 3 Holy Potions and 1 Earth Staff.`)
}else{
    alert(`Don't like any of those options? Takes a lot of guts to go out there without anything prepared. Take this at least. You received 3 Holy Potions and 1 Elemental Shield.`)
}

const adventure = confirm(`Your adventure begin at the city of Eden, where the goblins have taken over. Your job is to capture the Goblin King and free the city. Are you ready? Let's go!`)

let choice1 = prompt(`You left in search of a way to Eden. You've decided to go through the Forbidden Forest. On the way, you saw two paths that look identical! Left or Right(L/R)?`)

let direction1 = [`L`, `R`]

if(choice1 == direction1[0]){
    alert(`As you make your way to the left, you found 5 Gold Pieces! However, you also found 3 goblin minions! It's a long and dangerous fight, but you are victorious and make it through the forest!`)
}else if(choice1 == direction1[1]){
    alert(`It's a short path and you found 1 Gold Piece. You make it safely through the forest!`)
}

const choice2 = prompt(`Once you made it through the forest, you found yourself in a silky white road. Oh no! It's the Spider Web Path. What should you do? Run or Walk(R/W)?`)

 let direction2 = [`R`,`W`]

 switch(choice2){
    case direction2[0]: alert(`You ran through the webs, alerting the spiders! You got hurt, but made it to the other side.`)
    break;
    case direction2[1]: alert(`You took your time through the webs and foun 2 Gold Pieces! You make it to the other side.`)
 }
// if(choice2 == direction2[0]){
//     alert(`You ran through the webs, alerting the spiders! You got hurt, but made it to the other side.`)
// }else if(choice2 == direction2[1]){
//     alert(`You took your time through the webs and foun 2 Gold Pieces! You make it to the other side.`)
// }

let choice3 = prompt(`You find an abandon cabin by the time night came around. After checking it out, you decided to rest for the night. What should you do? Sleep or Explore(S/E)?`)

let direction3 = [`S`, `E`]

switch(choice3){
    case direction3[0]: alert(`You laid on the floor and immediately fell asleep. It was the best rest you've had in a while. You regain your health.`)
    break;
    case direction3[1]: alert(`You decide to explore the area around the cabin. You find a wounded sorcerer crawling his way to the cabin. Maybe the cabin is his? You helped the sorcerer to the cabin and he gives you a teleportation spellcard straight to the castle! You rest for the night.`)
}

let choice4 = prompt(`You've made it to Eden Castle! You walk into the Throne Room ans see the Goblin King sitting on throne. It sees you and roars. It's running at you! What do you do? Fight, Run, or Barter(F/R/B)?`)


let direction4 = [`F`,`R`,`B`]

switch(choice4){
    case direction4[0]: alert(`You use the weapon given to you by the Adventure's Guild to defeat the Goblin King! You gained 10 Gold Pieces as loot.`)
    break;
    case direction4[1]:alert(`Scared out of your mind, you ran from the Goblin King and left the country. Maybe adventures weren't made for you.`)
    break;
    case direction4[2]: alert(`You offered the Goblin King the gold you collected throughout your journey if he agreed to leave and never come back. Entranced by the shiny gold pieces, the Goblin King returned to the Forbidden Forest a little richer. `)
}
// if(choice3 == direction3[0]){
//     alert(`You use the weapon given to you by the Adventure's Guild to defeat the Goblin King! You gained 10 Gold Pieces as loot.`)
// }else if(choice3 == direction3[1]){
//     alert(`Scared out of your mind, you ran from the Goblin King and left the country. Maybe adventures weren't made for you.`)
// }else if(choice3 == direction3[2]){
//     alert(`You offered the Goblin King the gold you collected throughout your journey if he agreed to leave and never come back. Entranced by the shiny gold pieces, the Goblin King returned to the Forbidden Forest a little richer. `)
// }

let itsOver = true 
    prompt(`That's all folks! Wanna play again(Y/N)?`)
let direction5 = [`yes`,`no`]

if(itsOver == direction5[0]){
    startgame()
}else if(itsOver == direction5[1]){
    alert(`Thanks for playing!`)
}



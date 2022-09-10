// Remember to import the data and Dog class!
import { dogs } from "./assets/data.js";
import { Dog } from "./components/Dog.js";

let currentDogIndex = 0

const nextDog = () => {
    if(currentDogIndex == dogs.length - 1){
       currentDogIndex = 0 
    }
    else if(currentDogIndex <= dogs.length - 1){ 
        currentDogIndex += 1
    }
}

function render(){
    let currentDog = new Dog(dogs[currentDogIndex])
    document.getElementById("main-content").innerHTML = currentDog.renderTextHTML()
    currentDog.renderImageHTML()     
}

function setLikestatus(currentDog){
      currentDog.hasBeenLiked = true
      currentDog.hasBeenSwiped = true
      document.getElementById("like").classList.remove("hidden")
      setTimeout(function() {
        setTimeout(document.getElementById("like").classList.add("hidden"),1000)
      }, 1000);
      nextDog()
      setTimeout(function() {
        render()
      }, 1000);
    }

function setRejectstatus(currentDog){
      currentDog.hasBeenLiked = false
      currentDog.hasBeenSwiped = true
      document.getElementById("nope").classList.remove("hidden")
      setTimeout(function() {
        setTimeout(document.getElementById("nope").classList.add("hidden"),1000)
      }, 1000);
      nextDog()
      setTimeout(function() {
        render()
      }, 1000);
    }

document.getElementById("likeButton").addEventListener("click",setLikestatus)
document.getElementById("rejectButton").addEventListener("click",setRejectstatus)

render()

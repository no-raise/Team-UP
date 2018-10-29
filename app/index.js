import * as messaging from "messaging"
import document from "document";
import {today} from "user-activity";
import calories from "Activity";




// Listen for the onopen event
function PostOnClick(data){
  
messaging.peerSocket.onopen = function() {
  messaging.peerSocket.send(data);
  
}
}


//when companion sends a message
messaging.peerSocket.onmessage = evt => {
  console.log("THIS IS THE DATA WE GOT FROM THE COMPANION" + JSON.stringify(evt.data));
  
  
}

console.log(today.local.steps || 0)


let mybutton = document.getElementById("mybutton");
mybutton.onactivate = function() {
  var data = {
    "user_id":"Nouraiz",
    "steps": today.local.steps,
    "calories": today.local.calories
  }
  let stepsLabel = document.getElementById("steps");
  let mysteps = data.steps;
  stepsLabel.text = mysteps;
  let steps2Label = document.getElementById("steps2");
  let mysteps2 = Math.floor((Math.random() * 1000) + 100);
  steps2Label.text = mysteps2;
  PostOnClick(data);
  
}




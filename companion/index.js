import { me } from "companion";
import * as messaging from "messaging";


const geturl = 'https://xfexz5orz3.execute-api.us-east-1.amazonaws.com/default/WriteToDynamo?TableName=Users'
const puturl = 'https://cewjut2bw2.execute-api.us-east-1.amazonaws.com/default/Modify_Data'

fetch(geturl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
     console.log(JSON.stringify(myJson));
     messaging.peerSocket.send(JSON.stringify(myJson));
  });


var data = 
  {
    "user_id": "Nouraiz",
    "steps" : "1000",
    "calories": "100",
    "activity_score": "0",
  };

// fetch(url, {
//   method: 'PUT',
//   url: puturl,
//   //body: JSON.stringify(values),
//   body: values,
//   json: true,

// }, (err, res, body) => {
//   console.log(values);
// });


// messaging.peerSocket.onmessage = function(evt) {
//   console.log(JSON.stringify(evt.data));
// }
// const host = 'https://xfexz5orz3.execute-api.us-east-1.amazonaws.com/default/WriteToDynamo?TableName=Users'

//When the watch sends a message
// messaging.peerSocket.onmessage = evt => {
//   console.log("Data recieved: " + evt.data); //Log it
  // var url = host; // add a path to the URL
//   fetch(url)
//     .then(function(response){
//       messaging.peerSocket.send(response.json());}) //Extract JSON from the response
//     .catch(function(error) {
//       console.log(error);}); // Log any errors with Fetch
// }


function postData(puturl, data) {
    return fetch(puturl, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

postData(puturl,data);

var count= 30;
var count1= 30;
var countEl = document.querySelector("#bar1");
var countEl2 = document.querySelector("#bar2");
var nav = document.querySelector("#CatDog")

function setVotes(ans_id, ans_prc){
	var bar = document.getElementById(ans_id).style.width = ans_prc + '%';
}

var b1 = b2 = b3 = 19;

document.getElementById('add1').onclick = function(){
    // b1 += 5;
	// setVotes('bar1', b1);
    count++;
    setCounterDog();
    nav.textContent = "View Dogs ⬇"
}
document.getElementById('add2').onclick = function(){
    // b2 += 5;
	// setVotes('bar2', b2);
    count1++;
    setCounterCat();
    nav.textContent = "View Cats ⬇"
}

function setCounterDog() {
    countEl.textContent = "Dogs - " + count + " votes";
    // Sets votes to local storage
    localStorage.setItem("upvoteDog", count);
}

function setCounterCat() {
    countEl2.textContent = "Cats - " + count1 + " votes";
     // Sets votes to local storage
    localStorage.setItem("upvoteCat", count1);
}

// This function retrieves votes from local storage
function getCountDog() {

var storedVotes = localStorage.getItem("upvoteDog");
   
if (storedVotes === null) {
    count = 30;
    countEl.textContent = "Dogs - 30 votes"
  } else {
    // If a value is retrieved from client storage set the counter to that value
    count = storedVotes;

    //Render vote count to page
    countEl.textContent = "Dogs - " + count + " votes";
  }
}

//TO DO - how to commit the bar width to memory

// This function retrieves votes from local storage
function getCountCat() {

    var storedVotes = localStorage.getItem("upvoteCat");
       
    if (storedVotes === null) {
        count1 = 30;
        countEl2.textContent = "Cats - 30 votes"
      } else {
        // If a value is retrieved from client storage set the counter to that value
        count1 = storedVotes;
    
        //Render vote count to page
        countEl2.textContent = "Cats - " + count1 + " votes";
      }
    }


function init() {
    getCountDog();
    getCountCat()  
}

init()
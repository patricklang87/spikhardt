
//quiz functions
let numCorrect = 0;
function scoreQuiz() {

//to function, I believe all array indicators should be in the correct order
let idArray = [`der1`, `der2`, `die1`, `das1`, `der3`, `das2`, `den1`, `des1`, `die2`, `die3`, `der4`];

let answerKeyArray = [];
for (i =0; i < idArray.length; i++) {
  answerKeyArray.push(idArray[i].slice(0, idArray[i].length - 1));
}

let userSubmissions = [];
for (i = 0; i < idArray.length; i++) {
  userSubmissions.push(document.getElementById(`${idArray[i]}`).value.toLowerCase());
}

for (i = 0; i < userSubmissions.length; i++) {
  if (`${userSubmissions[i]}` == `${answerKeyArray[i]}`) {
    numCorrect++;
  } else {
    document.getElementById(`${idArray[i]}`).classList.add("incorrect");
  }
}

document.getElementById("results").innerHTML = `${numCorrect} out of 11`

document.getElementById("submit").classList.add("off");
document.getElementById("refresh001").classList.remove("off");
}

   function toggleState1(){
      if (bestimmteArtikel.className == "off") {
         bestimmteArtikel.className="on";
      } else {
         bestimmteArtikel.className="off";
      }
   }

   function toggleState2(){
      if (unbestimmteArtikel.className == "off") {
         unbestimmteArtikel.className="on";
      } else {
         unbestimmteArtikel.className="off";
      }
   }

   function toggleState3(){
      if (waechselpraepositionen.className == "off") {
         waechselpraepositionen.className="on";
      } else {
         waechselpraepositionen.className="off";
      }
   }

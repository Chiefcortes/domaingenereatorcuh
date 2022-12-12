/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["DA", "our", "BING BONG"];
let adj = ["great", "bizarre", "ludicrus"];
let noun = ["Racoon", "Angelina Joli's Forehead Vein"];
let domains = [".com", ".net", ".us", ".io"];

let finalArray = [];

function domainExecute() {
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domains.length; d++) {
          finalArray.push(
            pronoun[p] + "" + adj[a] + "" + noun[n] + "" + domains[d]
          );
        }
      }
    }
  }
  return finalArray;
}
document.querySelector("#page").innerHTML = domainExecute().join("\n");


var factList = [
 "Since 2000, over 8.3 billion pounds(lbs) of plastic has been produced 6.3 billion lbs of this plastic is waste", //*0//
 "More than 40% of Americans are living in places with unhealthy levels of ozone or particle pollution", //*1//
 "Only 1% of plastic bags, of the TRILLION used WORLDWIDE, are recycled", //*2//
 "Europe has a 30% plastic recycling rate, which is considered to be the HIGHEST in the WORLD",//*3//
 "Out of all the pollutants (on land, air,and water) AIR POLLUTANTS are the MOST HARMFUL", //*4//
 "Packaging creates the most plastic pollution,followed by textiles", //*5//
 "High-income countries like the United States and the United Kingdom produce the most plastic pollution per person", //*6//
 "The United States recycles 9% of plastic, China recycles a quarter of its manufactured plastic", //*7//
 "70% of plastic debris sinks to the bottom of the ocean, 15% wash up on shore, and 15% float on the ocean", //*8//
 "50% of plastic pollution is from single use", //*9//
];
 
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;
 
myButton.addEventListener("click", displayFact);
 
function displayFact(){
 fact.innerHTML = factList[count];
 count++;
 if (count == factList.length){
   count = 0;
 }
}




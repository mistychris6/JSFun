prompt("Enter your name.")
prompt("Enter their name.")

let loveNum = Math.floor((Math.random()*100) + 1)

if (loveNum >= 90) {
  alert("Your Love Score is " + loveNum + "%.  You're a match made in heaven!")
} else if (loveNum > 31 && loveNum < 90) {
    alert("Your Love Score is " + loveNum + "%.  Looks like there might be a decent chance.  Give it a go! ")
} else if (loveNum <= 30 ) {
    alert("Your Love Score is " + loveNum + "%.  Perhaps you should move on. ")
}

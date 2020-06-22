let coolCuzClub = ["Misty", "Margarita", "Derrick", "Kelly"]

function whosPaying(coolCuzClub) {
    let randoNum = Math.floor((Math.random() * coolCuzClub.length))
    return coolCuzClub[randoNum] + " is going to buy brunch today!"
   
}
 
 whosPaying(coolCuzClub)

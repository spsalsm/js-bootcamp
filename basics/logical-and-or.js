let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

// Challenge area

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('We have an excellent choice of vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('We have some vegan options if desired')
} else {
    console.log('Feel free to browse anything on the menu')
}
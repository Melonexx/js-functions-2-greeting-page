console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
// let currentTime = new Date().getHours();
// let currentDay = new Date().getDay();

function getGreeting(currentTime) {
  if (currentTime > 5 && currentTime < 13) {
    return (display.textContent = "Good Morning"); // das return ist sehr wichtig, sonst passiert naemlich nix
  } else if (currentTime > 12 && currentTime < 19) {
    return (display.textContent = "Good Afternoon");
  } else if (currentTime > 18 && currentTime < 23) {
    return (display.textContent = "Good Evening");
  } else {
    return (display.textContent = "Good Night");
  }
}

function getDayColor(currentDay) {
  if (currentDay === 1) {
    document.body.style.backgroundColor = "darkgray";
  } else if (currentDay > 1 && currentDay < 6) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "hotpink"; // bis hier hin hat noch alles problemfrei geklappt. mal schauen wie das gleich wird, wenn ich einen parameter einbaue, damit ich das ganze auch noch testen kann...
  }
}

display.textContent = getGreeting(20);
document.body.style.backgroundColor = getDayColor(5); // oke... meine sorge war unberechtigt. hat super geklappt.

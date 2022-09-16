//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (justice) {
    justice.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
           count--;
           console.log("Decreased button pressed");
        }
        else if (styles.contains("increase")) {
           count++;
           console.log("Increase button pressed");
        }
        if (styles.contains("reset")) {
            count = 0;
            console.log("Reset button pressed")
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count; 
});
})
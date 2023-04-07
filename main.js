const options = document.querySelectorAll(".select");
console.log(options);
let chosen = [];
for (let i = 0; i < options.length; i++) {
  let count = 0;
  options[i].addEventListener("click", (e) => {
    count++;
    if (count % 2 === 1) {
      if (chosen.length > 0) {
        for (let j = 0; j < chosen.length; j++) {
          chosen[j].classList.remove("active");
        }
        chosen = [];
      }
      chosen.push(options[i]);
      options[i].classList.add("active");
    }
  });
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const submit = document.querySelector(".submit");
const container = document.querySelector(".container");
submit.addEventListener("click", (e) => {
  if (chosen.length != 0) {
    container.innerHTML = `<div class="thank-you">
        <img src="./images/illustration-thank-you.svg"
          alt="A smartphone and various data flowing through and out of it">
        <p class="status">You selected <spam class="selected">4</spam> out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. </p>
        <p>If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>`;
    const selected = document.querySelector(".selected");
    selected.innerHTML = chosen[0].innerHTML;
  } else {
    alert("Please select a rating to submit");
  }
});

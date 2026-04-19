let count = 0;
let saveEl = document.getElementById('save-el')
document.getElementById('peopleCount').style.fontSize="100px";
      
function countUp() {
  const show = document.getElementById('peopleCount');
  count += 1;
  show.innerText = count;
  show.style.color = "black"
};
      
function countDown() {
  const show = document.getElementById('peopleCount');
  if (count > 0) {
    count = count - 1;
    show.innerText = count;
    show.style.color = "black";
  } else {
    show.style.color = "red";
    show.innerText = "Error";
  };
};

function save() {
  let previousEntries = (count + " - ");
  saveEl.textContent += previousEntries;
  console.log(previousEntries);
}
document.addEventListener("alpine:init", () => {
  const storedCount = localStorage.getItem('count');
  const initialCount = storedCount ? parseInt(storedCount) : 0;
  
  Alpine.store("data", {
    topic: "Alpine Tailwind Starter",
    count: initialCount,
    zahl: 0,
    color: "Apfelessig",
    font : "font-sans"
  });
});

const data = () => Alpine.store("data");

function inc() {
  data().count += 1;
  saveCount();
}

function dec() {
  data().count -= 1;
  saveCount();
}

function inc10() {
  data().count += 10;
  saveCount();
}

function sub10() {
  data().count -= 10;
  saveCount();
}

function add() {
  data().count += data().zahl;
  saveCount();
}

function saveCount() {
  localStorage.setItem('count', data().count);
}

function resetCounter() {
  data().count = 0
}


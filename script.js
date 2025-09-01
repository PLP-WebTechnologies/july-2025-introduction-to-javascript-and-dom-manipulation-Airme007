// -----------------------------
// Part 1: Basics (Variables, Conditionals)
// -----------------------------
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = prompt("Enter your age:"); // capture user input
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult!";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are under 18.";
  }
});

// -----------------------------
// Part 2: Functions
// -----------------------------
// Function 1: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Format string
function formatMessage(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

document.getElementById("calcTotalBtn").addEventListener("click", () => {
  let total = calculateTotal(50, 3);
  document.getElementById("totalResult").textContent =
    "Total = $" + total + " | " + formatMessage("Student");
});

// -----------------------------
// Part 3: Loops
// -----------------------------
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  let li = document.createElement("li");
  li.textContent = "🚀 Blast off!";
  list.appendChild(li);
});

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------
document.getElementById("toggleBtn").addEventListener("click", () => {
  let text = document.getElementById("toggleText");
  text.classList.toggle("highlight"); // toggle highlight effect
});

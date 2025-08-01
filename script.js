let examDateTime = new Date(2025, 7, 2, 12, 30, 0); // August is month 7 (0-based)

    function updateCountdown() {
      let now = new Date();
      let distance = examDateTime - now;

      if (distance < 0) {
        document.getElementById("countdown").innerText = "Good luck! It's exam time! 🍀";
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      let display = "";
      if (days > 0) display += `${days}d `;
      display += `${hours}h ${minutes}m ${seconds}s left`;

      document.getElementById("countdown").innerText = display;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);





    // Quotes
    const quotes = [

  {
    text: "Luck Meow Meow.                  Ability: Higher Chance of Passing the Exam",
    type: "image",
    src: "https://i.ibb.co/3wSpYJ8/images.jpg"
  },
  {
    text: "Swag Panda. ABILITY: Before the exam starts, his aura lowers your heartbeat and helps you remember more.",
    type: "image",
    src: "https://i.ibb.co/v4S4vV00/panda-panda-love.gif"
  },
  {
    text: "Crocs Doggo. ABILITY: Barks in calming frequencies that reduce test anxiety by 72%.",
    type: "image",   
    src:"https://i.ibb.co/pvF27tYR/drugbusta1.gif"
  }
];

function newQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").textContent = random.text;

  const mediaBox = document.getElementById("media");
  mediaBox.innerHTML = ""; // Clear previous content

  if (random.type === "image") {
    const img = document.createElement("img");
    img.src = random.src;
    img.alt = "Random image";
    img.style.maxWidth = "100%";
    img.style.borderRadius = "10px";
    mediaBox.appendChild(img);
  } else if (random.type === "video") {
  const vid = document.createElement("video");
  vid.src = random.src;
  vid.controls = true;
  vid.autoplay = true;
  // Removed: vid.muted = true;
  vid.style.maxWidth = "100%";
  vid.style.borderRadius = "10px";
  mediaBox.appendChild(vid);
}
}

    
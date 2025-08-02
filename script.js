let examStartTime = new Date(2025, 7, 2, 12, 30, 0); // Aug 2, 10:30 AM
let examEndTime = new Date(2025, 7, 2, 13, 30, 0);   // Aug 2, 6:30 PM

function updateCountdown() {
  let now = new Date();

  // 🎉 AFTER 6:30 PM - SHOW CONGRATS MESSAGE AND GIF
  if (now >= examEndTime) {
  document.getElementById("h10").innerText = "Mission Accomplished: UPCAT🤞☑️";
  document.getElementById("p1").innerText = "";
  document.getElementById("message").innerText = "We are so proud of you!!!";
  
   const list = document.getElementById("UnOrList");
if (list) {
  list.remove(); // ❌ Remove the entire <ul> including all <li> items
}
    document.getElementById("countdown").innerText = " 👏 Congratulations you made it! 👏";
    document.getElementById("h21").innerText = "";
    document.getElementById("Messg").innerText = "Congratulations, Ellaiza!";

document.getElementById("ContentMessage").innerText = "Hello po! We are so happy for you, hindi lang dahil tinake mo yung opportunity, pero dahil hinarap mo rin yung isa sa pinakamalaking laban mo so far. I truly hope all your efforts and hard work pay off.                 But for now, be proud of yourself for doing this. Take all the naps you want, eat whatever you like, and most importantly, pray and thank God for guiding you through your exams.I hope we get to know each other more, Ellai!! 😚😚 Once again, congratulations!!! ";
   

    const reminderS = document.getElementById("Reminder-S");

    // ✅ Only add once
    
    if (!document.getElementById("congratsDiv")) {
  const congratsDiv = document.createElement("div");
  congratsDiv.id = "congratsDiv";
  congratsDiv.innerHTML = `
    <div style="text-align: center;">
      <p style="font-weight: bold; font-size: 1.2em;">You did it, Ellai! 💖</p>
      <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
           alt="Congrats GIF"
           style="max-width: 80%; border-radius: 10px; margin-top: 10px; display: block; margin-left: auto; margin-right: auto;" />
    </div>
  `;
  reminderS.appendChild(congratsDiv);
  
  
  
}

    return;
  }

  // ⏰ BETWEEN 10:30 AM and 6:30 PM
  if (now >= examStartTime) {
    document.getElementById("countdown").innerText = "Good luck! It's exam time! 🍀";

    const rndmBox = document.getElementById("MessageRndm");
    if (rndmBox) {
      rndmBox.remove(); // remove Luck Card section
    }

    return;
  }

  // 🧮 BEFORE 10:30 AM - Normal countdown
  let distance = examStartTime - now;

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
    text: "Sleep",
    type: "image",
    src: "https://i.ibb.co/0RnPxp0p/nice-cat.gif"
  },
  {
    text: "Sleep More",
    type: "image",
    src: "https://i.ibb.co/ds3xrG40/dog-sleep-dog-sleeping-w-goofy-sleeping-sound.gif"
  },
  {
    text: "Pray",
    type: "image",
    src: "https://i.ibb.co/9952Msd5/images-9-7.jpg"
  },
  {
    text: "Sleep Again",
    type: "image",   
    src:"https://i.ibb.co/jZJyMYtJ/a-labrador-drooling-labrador.gif"
  },
  {
    text: "Eat",
    type: "image",
    src: "https://i.ibb.co/XZX0vwW3/resize.gif"
  },
  {
    text: "Enjoy",
    type: "image",
    src: "https://i.ibb.co/846kdTvL/happy-cat-yippee-cat.gif"
  },
  {
    text: "And Yes... Sleep Again💤",
    type: "image",
    src: "https://i.ibb.co/1Y4rbbqq/asta-rn.gif"
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

    

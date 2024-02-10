const containerDots = document.querySelector("[data-container-of-dots]");

for (let i = 0; i < 64; i++) {
     const dot = document.createElement("div");
     dot.classList.add("dot");

     setInterval(() => {
          const randomTime = Math.floor(Math.random() * 2) + "s";
          dot.style.setProperty("--timing", randomTime);
          const arr = ["#7f7fe6", "#5f5f68", "#d2d2e9", "#e5697a"];
          const randomValue = arr[Math.floor(Math.random() * arr.length)];
          dot.style.setProperty("--background-color", randomValue);
     }, 1000);
     containerDots.appendChild(dot);
}

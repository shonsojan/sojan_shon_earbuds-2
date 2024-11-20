(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // Hamburger Menu

  const menu = document.querySelector("#menu");
  const hamburger = document.querySelector("#hamburger");
  const closeButton = document.querySelector("#close");
  const menuLinks = document.querySelectorAll("#menu ul a");

  //Data

  const infoBoxes = [
    {
      title: "Silicon Buds",
      text: "Soft, ergonomic ear tips that ensure comfort and noise isolation.",
      image: "images/buds.svg",
    },
    {
      title: "Touchpad",
      text: "Easy-to-use control panel for effortless playback and call management.",
      image: "images/touchpad.svg",
    },
    {
      title: "Microphone",
      text: "Built-in mic for clear voice calls and hands-free functionality.",
      image: "images/mic.svg",
    },
    {
      title: "Solid pin",
      text: "Durable connector for secure and reliable fast charging.",
      image: "images/charging.svg",
    },
    {
      title: "Compact Body",
      text: "Small and sturdy build for easy portability and daily use.",
      image: "images/body.svg",
    },
  ];

  //
  const earbuds = document.querySelector("#ear-buds");
  const buttons = document.querySelectorAll("#color-con button");

  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  // Functions
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const title = document.createElement("h2");
      title.textContent = infoBox.title;

      const text = document.createElement("p");
      text.textContent = infoBox.text;

      const image = document.createElement("img");
      image.src = infoBox.image;

      selected.appendChild(title);
      selected.appendChild(text);
      selected.appendChild(image);
    });
  }

  //call the function to load data
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  function toggleMenu() {
    menu.classList.toggle("open");
  }

  function swapColor(e) {
    // console.log(this.id);
    // console.log(e.currentTarget.id);
    const selected = e.currentTarget.id;
    earbuds.src = `images/earbuds-${selected}.png`;
  }

  function moveDivisor() {
    console.log(slider.value);
    // divisor.style.width = slider.value + "%";
    divisor.style.width = `${slider.value}%`;
  }

  //Event listeners
  // model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  hamburger.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", swapColor);
  });

  slider.addEventListener("input", moveDivisor);
})();

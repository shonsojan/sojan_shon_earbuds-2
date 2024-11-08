(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

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

  //Event listeners
  // model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();

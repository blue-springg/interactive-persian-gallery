const images = [
  { src: "image/m1.jfif", alt: "Takht-e Jamshid ceremonial stairway detail" },
  { src: "image/m2.jpg", alt: "Stone relief of Achaemenid soldiers" },
  { src: "image/m3.jfif", alt: "Ruins of Persepolis palace columns" },
  { src: "image/m4.jfif", alt: "Gate of All Nations facade" },
  { src: "image/m5.jpg", alt: "Apadana Palace grand staircase" },
  { src: "image/m6.jfif", alt: "Carved winged bulls at Takht-e Jamshid" },
  { src: "image/m7.jpg", alt: "Stone carvings of Achaemenid kings" },
  { src: "image/m8.jpg", alt: "Ancient Persian architectural detail" },
  { src: "image/m9.jpg", alt: "View of Persepolis from above" },
  { src: "image/m10.jfif", alt: "Stone inscriptions at Takht-e Jamshid" },
];

function createGallery() {
  const gallery = document.getElementById("gallery");

  images.forEach((image, index) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const caption = document.createElement("figcaption");

    img.src = image.src;
    img.alt = image.alt;
    img.setAttribute("tabindex", "0");

    img.addEventListener("mouseover", () => {
      img.style.border = "4px solid #b49e5c";
    });
    img.addEventListener("mouseleave", () => {
      img.style.border = "none";
    });
    img.addEventListener("focus", () => {
      img.style.outline = "4px solid #8b0000";
      console.log(`Focused on image ${index + 1}: ${image.alt}`);
    });
    img.addEventListener("blur", () => {
      img.style.outline = "none";
      console.log(`Blurred image ${index + 1}`);
    });

    caption.textContent = `Image ${index + 1}`;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

function pageLoaded() {
  console.log("Page loaded, building gallery...");
  createGallery();
}

const images = [
  { src: "https://www.visitouriran.com/blog/wp-content/uploads/upload/Persepolis-13.webp", alt: "Takht-e Jamshid ceremonial stairway detail" },
  { src: "https://www.visitouriran.com/blog/wp-content/uploads/upload/doc_2024-05-11_15-09-37.webp", alt: "Stone relief of Achaemenid soldiers" },
  { src: "https://iranontour.com/wp-content/webp-express/webp-images/uploads/2020/08/Persepolis-768x521.jpg.webp", alt: "Ruins of Persepolis palace columns" },
  { src: "https://iranontour.com/wp-content/webp-express/webp-images/uploads/2020/09/the-gate-of-all-nations-768x512.jpg.webp", alt: "Gate of All Nations facade" },
  { src: "https://iranontour.com/wp-content/webp-express/webp-images/uploads/2020/08/6497745937_816904d4bc_o-768x504.jpg.webp", alt: "Apadana Palace grand staircase" },
  { src: "https://www.visitouriran.com/blog/wp-content/uploads/upload/doc_2024-05-11_15-09-33.webp", alt: "Carved winged bulls at Takht-e Jamshid" },
  { src: "https://iranontour.com/wp-content/webp-express/webp-images/uploads/2020/08/Gate_of_All_Nations_Persepolis-768x502.jpg.webp", alt: "Stone carvings of Achaemenid kings" },
  { src: "https://iranontour.com/wp-content/webp-express/webp-images/uploads/2020/03/Passargade-Day-tour-feature-image.jpg.webp", alt: "Ancient Persian architectural detail" },
  { src: "https://ifpnews.com/wp-content/uploads/2015/05/Takht-e-Jamshid033.jpg", alt: "View of Persepolis from above" },
  { src: "https://seeiran.ir/en/wp-content/uploads/2017/04/takht-e-jamshid-persepolis-1.jpg", alt: "Stone inscriptions at Takht-e Jamshid" },
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

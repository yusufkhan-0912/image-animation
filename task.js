// let img1 = document.querySelector(".img1");
// let img2 = document.querySelector(".img2");
// let img3 = document.querySelector(".img3");
// const bodys = document.querySelector(".main-div");
// const child = document.querySelector(".color");
// img1.style.class = "disable";

// bodys.addEventListener("mousemove", (e) => {
//   const Left = Math.floor(Math.random() * 100) + 1;

//   let fun = () => {
//     img1.style.left = `${Left}% `;
//   };
//   fun();
// });

///////////////////////////////////////////////////////////////
const movingimg2 = document.querySelector(".img2");
const movingimg1 = document.querySelector(".img1");
const movingimg3 = document.querySelector(".img3");
const divs = document.querySelector(".color");
// movingimg1.style.display = "none";
// movingimg2.style.display = "none";
// movingimg3.style.display = "none";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

divs.addEventListener("mousemove", (e) => {
  // let rand = Math.floor(Math.random() * 3) + 1;

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  console.log("isMouseOverElement", isMouseOverElement(divs, mouseX, mouseY));
  if (isMouseOverElement(divs, mouseX, mouseY)) {
    console.log("test", movingimg1);
    movingimg1.style.left = mouseX + "px";
    movingimg1.style.top = mouseY + "px";

    // for (let i = images.length; i < images.length; i++) {
    //   return images;
    // }
    // setTimeout(() => {
    //   movingimg2.style.display = "block";
    //   movingimg2.style.left = mouseX + "px";
    //   movingimg2.style.top = mouseY + "px";
    // }, 1000);
    // intervalid = setTimeout(() => {
    //   movingimg1.style.display = "none";
    // }, 1000);

    // movingimg2.src = getRandomImage();
    // movingimg3.src = getRandomImage();
  } else {
    movingimg1.style.display = "none";
  }
});

setInterval(() => {
  movingimg1.src = getRandomImage();
}, 2000);

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  // console.log(randomIndex);

  return images[randomIndex];
}

function isMouseOverElement(element, mouseX, mouseY) {
  const rect = element.getBoundingClientRect();
  return (
    mouseX >= rect.left &&
    mouseX <= rect.right &&
    mouseY >= rect.top &&
    mouseY <= rect.bottom
  );
}
///////////////////////////////////////////

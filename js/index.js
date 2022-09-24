window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const img = new Image();
    img.src = "/images/road.png";
    const theCanvas = document.getElementById("canvas");
    const ctx = theCanvas.getContext("2d");

    function drawBackground() {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(img, 0, 0, 500, 500);
    }
    drawBackground();

    function drawCar(x, y) {
      ctx.drawImage(imgCar, x, y, 40, 80);
    }

    let carX = 230;
    let carY = 420;
    const imgCar = new Image();
    imgCar.src = "/images/car.png";
    drawCar(carX, carY);

    function moveLeft() {
      if (carX >= 100) {
        carX -= 50;
        drawBackground();
        drawCar(carX, carY);
      }
    }
    function moveRight() {
      if (carX <= 350) {
        carX += 50;
        drawBackground();
        drawCar(carX, carY);
      }
    }

    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          console.log("right");
          break;
      }
    });
  }
};

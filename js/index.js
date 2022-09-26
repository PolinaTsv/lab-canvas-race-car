window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  const theCanvas = document.getElementById("canvas");
  const ctx = theCanvas.getContext("2d");

  const img = new Image();
  img.src = "/images/road.png";
  const imgCar = new Image();
  imgCar.src = "/images/car.png";

  function drawBackground() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(img, 0, 0, 500, 500);
  }
  function drawCar(x, y) {
    ctx.drawImage(imgCar, x, y, 40, 80);
  }
  function startGame() {
    drawBackground();

    let carX = 230;
    let carY = 420;
    drawCar(carX, carY);

    function drawObs() {
      ctx.fillStyle = "#A52A2A";
      ctx.fillRect(obsX, obsY, height, 30);
    }
    let obsX = Math.floor(Math.random() * (350 - 80) + 80);
    let obsY = 0;
    let height = Math.floor(Math.random() * (130 - 60) + 60);

    const idInterval = setInterval(() => {
      drawBackground();
      drawCar(carX, carY);
      if (obsY >= 460) {
        clearInterval(idInterval);
        return;
      }
      drawObs();
      obsY += 3;
    }, 10);



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
          break;
      }
    });
  }
};

function MaakZon() {
  const c = document.getElementById("Canvas");
  const ctx = c.getContext("2d");
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  ctx.beginPath();

  ctx.arc(180, -200, 300, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(255, 234, 0, 0.9)";
  ctx.fill();

  ctx.arc(180, -200, 325, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(255, 234, 0, 0.5)";
  ctx.fill();
}

function MaakGrond() {
  const c = document.getElementById("Canvas1");
  const ctx = c.getContext("2d");
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  ctx.fillStyle = "#00A516";
  ctx.fillRect(0, 510, 2000, 100);

  ctx.fillStyle = "#007D11";
  ctx.fillRect(0, 560, 2000, 500);
}

function MaakAchtergrond() {
  MaakZon();
  MaakGrond();
}
MaakAchtergrond();

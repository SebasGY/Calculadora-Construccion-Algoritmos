function mostrarFormulario() {
  const tipo = document.getElementById("tipo").value;
  document.querySelectorAll(".formulario").forEach(f => f.classList.add("oculto"));

  if (tipo === "impulso") {
    document.getElementById("formulario-impulso").classList.remove("oculto");
  } else if (tipo === "parabolico") {
    document.getElementById("formulario-parabolico").classList.remove("oculto");
  } else if (tipo === "mas") {
    document.getElementById("formulario-mas").classList.remove("oculto");
  }
}

function calcularImpulso() {
  const F = parseFloat(document.getElementById("fuerza").value);
  const m = parseFloat(document.getElementById("masa-impulso").value);
  const t = parseFloat(document.getElementById("tiempo").value);

  const impulso = F * t;
  const v = impulso / m;

  document.getElementById("resultado-impulso").innerText =
    `Impulso: ${impulso.toFixed(2)} N·s\nVelocidad final: ${v.toFixed(2)} m/s`;
}

function calcularParabolico() {
  const v0 = parseFloat(document.getElementById("v0").value);
  const angulo = parseFloat(document.getElementById("angulo").value);
  const g = 9.8;

  const rad = angulo * Math.PI / 180;
  const alcance = (v0 ** 2 * Math.sin(2 * rad)) / g;
  const altura = (v0 ** 2 * Math.pow(Math.sin(rad), 2)) / (2 * g);
  const tiempo = (2 * v0 * Math.sin(rad)) / g;

  document.getElementById("resultado-parabolico").innerText =
    `Alcance: ${alcance.toFixed(2)} m\nAltura máx: ${altura.toFixed(2)} m\nTiempo total: ${tiempo.toFixed(2)} s`;
}

function calcularMAS() {
  const A = parseFloat(document.getElementById("amplitud").value);
  const k = parseFloat(document.getElementById("k").value);
  const m = parseFloat(document.getElementById("masa-mas").value);
  const t = parseFloat(document.getElementById("tiempo-mas").value);

  const w = Math.sqrt(k / m);
  const x = A * Math.cos(w * t);

  document.getElementById("resultado-mas").innerText =
    `Frecuencia angular: ${w.toFixed(2)} rad/s\nPosición en t=${t}s: ${x.toFixed(2)} m`;
}

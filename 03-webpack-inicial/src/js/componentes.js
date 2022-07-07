import "../css/componentes.css";
// import webpackLogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre) => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre} !!!!`;
  
  // const img = document.createElement("img")
  // img.src = webpackLogo;

  document.body.append(h1);
  // document.body.append(img);
}
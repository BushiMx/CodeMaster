// import { useState } from "react";
import logo from "../src/assets/image/logo.webp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./assets/components/Card";
import laptop from "./assets/image/laptop.jpg";
import service from "./assets/image/servicios.jpeg";
import Menu from "./assets/components/Menu";
import ContainerText from "./assets/components/ContainerText";
import listStyleImage from "./assets/image/check-mark.webp";
import Card2 from "./assets/components/Card/card2";
import Form from "./assets/components/Form";

const beneficios = [
  "Valor Superior: En CodeMaster, comprendemos que tu negocio merece más que una simple solución tecnológica. Merece una inversión en innovación que garantice un retorno significativo. Nos dedicamos a proporcionar servicios de programación y desarrollo web que no solo cumplen, sino que superan tus expectativas.",
  "Soluciones Eficaces: Sabemos que cada empresa es única, y es por eso que nuestras soluciones están personalizadas para abordar tus necesidades específicas. Utilizamos las tecnologías más avanzadas y las mejores prácticas del sector para asegurarnos de que obtengas una solución robusta, escalable y segura.",
  "Justo a Tiempo y a Precio Justo: Entendemos el valor de tu tiempo y de tu dinero. Nuestro compromiso es ofrecerte un producto final que justifique tu inversión, cumpliendo con los plazos establecidos y dentro del presupuesto acordado. La calidad no tiene por qué ser inalcanzable.",
];

const servicios = [
  "Desarrollo de Software a Medida: Creamos aplicaciones personalizadas que optimizan y transforman tus procesos empresariales.",
  "Diseño y Desarrollo de Páginas Web: Desarrollamos sitios web impresionantes, funcionales y amigables con el usuario, que representan perfectamente la identidad de tu marca.",
  "Consultoría Tecnológica: Te asesoramos en la adopción de tecnologías que potencian tu crecimiento y eficiencia operativa.",
];

const proceso = [
  "Entendimiento de tus Necesidades: Nos reunimos contigo para comprender a fondo tus objetivos y desafíos.",
  "Planificación y Estrategia: Diseñamos una estrategia clara y efectiva para tu proyecto.",
  "Desarrollo y Pruebas: Creamos y perfeccionamos tu solución con rigurosas pruebas de calidad.",
  "Lanzamiento y Soporte: Implementamos tu proyecto y ofrecemos soporte continuo para asegurar su éxito.",
];

function App() {
  const showInfo = (arrayName) => {
    return (
      <ul>
        {arrayName.map((info, id) => {
          return (
            <li key={id}>
              <img src={listStyleImage} alt="Check" /> {info}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="contenedor">
        <div>
          <img src={logo} className="logo" alt="CodeMaster logo" />
          {/* <Menu /> */}
        </div>
        <Card
          titulo="Bienvenido a CodeMaster"
          texto="En CodeMaster, transformamos ideas en soluciones digitales que impulsan 
        tu negocio hacia el futuro. Nos especializamos en desarrollo de software 
        a medida y creación de páginas web de alta calidad, diseñadas específicamente para clientes 
        que buscan resultados excepcionales."
          imagen={laptop}
        />
        <ContainerText
          titulo="¿Por Qué Elegir CodeMaster?"
          info={() => showInfo(beneficios)}
        />
        <Card2
          titulo="Nuestros Servicios"
          texto={() => showInfo(servicios)}
          imagen={service}
        />
        <ContainerText titulo="Proceso" info={() => showInfo(proceso)} />
        <Form />
      </div>
    </>
  );
}

export default App;

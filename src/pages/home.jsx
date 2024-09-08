import { FloatingLaptop, ThreeScene } from "../lib/model.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import intescLogo from "../../public/images/intesc.png"
import instescPdf from "../../public/pdf/Carta de recomendacion.pdf"
import xube from "../../public/images/xube-modified.png"
import cufrisa from "../../public/images/cufrisa logo.webp"

export default function Home() {
  return (
    <>
      <Header />
      <div className=" container mx-auto w-full lg:max-w-screen-md pt-14 px-4 ">
        <div className=" max-w-md mx-auto h-[calc(100vh_-_60vh)] ">
         <ThreeScene /> 
          {/* }<FloatingLaptop /> */}
        </div>
        <div className="px-6 py-4 max-w-md mx-auto bg-[#ffffff5c] dark:bg-[#ffffff14] backdrop-blur-md rounded-xl flex items-center justify-center text-center dark:text-white">
          <p>¡Hola! Soy carlos, un programador web de México</p>
        </div>
        <div className="max-w-md mx-auto my-4">
          <h1 className=" underline underline-offset-8 my-3 font-bold text-xl dark:text-white">
            Trabajo
          </h1>
          <p className=" text-justify indent-4 dark:text-white ">
            Desarrollo software a medida y aplicaciones de escritorio. Mi
            enfoque está en entender a fondo los requerimientos de cada proyecto
            para crear aplicaciones que mejoren la eficiencia y optimicen los
            procesos. Utilizo una variedad de tecnologías y metodologías para
            asegurar que el software que entrego cumpla con los más altos
            estándares de calidad.
          </p>
        </div>
        <div className=" max-w-md mx-auto flex justify-center p-4">
          <a
            href="/Proyectos"
            className="cursor-pointer bg-verdeazul hover:bg-[#083D56] dark:bg-verdeazulclaro dark:hover:bg-rosapastel  text-white transition-colors rounded-md px-2 py-2 "
          >
            Mi portafolio {">"}
          </a>
        </div>
        <div className="max-w-md mx-auto p-4 space-y-6 ">
          <h3 className="underline-offset-8 underline font-bold text-xl">Experiencia</h3>

          <div className="space-y-4" >

            <a className=" block" href="">
            <div className=" px-4 py-2 dark:bg-dark dark:text-white  bg-white rounded-full items-center lg:rounded-full flex lg:inline-flex gap-4  w-full justify-between border border-borders dark:border-verdeazulclaro ">
                <div className=" inline-flex items-center gap-4">
                  <img className="size-8" src={xube} alt=""/>
                  <div>    
                    <p>Desarrollador web JR</p>
                    <p className=" font-bold">xube</p>
                  </div>
                </div>
                <p className=" font-light text-sm" >Agt 2023 - Oct 2023</p>
            </div>
            </a>

            <a className=" block" href={instescPdf} target="_blank" >
            <div className=" px-4 py-2 dark:bg-dark dark:text-white bg-white rounded-full items-center lg:rounded-full flex lg:inline-flex gap-4  w-full justify-between border border-borders dark:border-verdeazulclaro ">
                <div className=" inline-flex items-center gap-4">
                  <img className="size-8" src={intescLogo} alt=""/>
                  <div>    
                    <p className=" ">Desarrollador de software</p>
                    <p className=" font-bold">Intesc</p>
                  </div>
                </div>
                <p className=" text-sm font-light" >En 2023 - jul 2024</p>
            </div>
            </a>

            <a className=" block" href="">
            <div className=" px-4 py-2 dark:bg-dark dark:text-white  bg-white rounded-full items-center lg:rounded-full flex lg:inline-flex gap-4  w-full justify-between border border-borders dark:border-verdeazulclaro  ">
                <div className=" inline-flex items-center gap-4">
                  <img className="size-8" src={cufrisa} alt=""/>
                  <div>    
                    <p>Analista de Datos</p>
                    <p className=" font-bold">Cufrisa</p>
                  </div>
                </div>
                <p className=" font-light text-sm" >jun 2024 - actual</p>
            </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

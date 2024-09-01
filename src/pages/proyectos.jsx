import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ThreeScene from "../lib/model.jsx";

import ecommerce from "../../public/images/ecomerce.png";
import hr from "../../public/images/hr.jpg";
import crud from "../../public/images/crud.png";
import rh from "../../public/images/hr.jpg";

import nvim from "../../public/images/nvim.png";
import dotfiles from "../../public/images/dotfiles.png";

export default function Proyectos() {
  return (
    <>
      <Header />
      <div className=" container mx-auto w-full lg:max-w-screen-md pt-14 px-4">
        <div className=" max-w-md mx-auto h-[calc(100vh_-_60vh)] ">
          <ThreeScene />
        </div>
        <div className="max-w-md mx-auto my-4">
          <h1 className=" my-3 font-bold text-xl dark:text-white">Trabajos</h1>

          <div className="grid lg:grid-cols-2 gap-6">

            <div className=" mb-6">
              <div className="w-full text-center">
                <a className=" relative cursor-pointer" href="">
                  <img src={ecommerce} className=" rounded-xl" />
                  <h3 className=" dark:text-white text-xl mt-2" >E-commerce</h3>
                  <p className=" dark:text-white text-sm" >
                    Plataforma de e-commerce diseñada para gestionar productos y pedidos.
                  </p>
                </a>
              </div>
            </div>

            <div className=" mb-6">
              <div className=" w-full text-center" >
                <a className=" relative cursor-pointer" href="">
                  <img src={rh} className=" rounded-xl" />
                  <h3 className=" dark:text-white text-xl mt-2">Sistema RH</h3>
                  <p className=" dark:text-white text-sm">Control de Recursos Humanos</p>
                </a>
              </div>
            </div>
            

            <div className=" mb-6">
              <div className=" w-full text-center">
                <a href="">
                  <img src={crud} className=" rounded-xl" />
                  <h3></h3>
                  <p></p>
                </a>
              </div>
            </div>

            <div>
              <div>
                
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-md mx-auto my-4">
          <h1 className=" my-3 font-bold text-xl dark:text-white">
            Colaboraciones
          </h1>
          <div className=" grid lg:grid-cols-2 gap-6 ">

            <div className=" mb-6">  
              <div className=" w-full text-center">
                <a className=" relative cursor-pointer" href="">
                  <img src={nvim} className=" rounded-xl w-full h-auto object-cover" />
                  <h3 className="dark:text-white text-xl mt-2">Neovim</h3>
                  <p className="dark:text-white text-sm">
                    Mi IDE para Neovim con configuraciones insanas. Completamente
                    gratuito y impulsado por la comunidad.
                  </p>
                </a>
              </div>
            </div>

            <div className=" mb-6">  
              <div className=" w-full text-center">
                <a className=" relative cursor-pointer"  href="">
                  <img src={dotfiles} className=" rounded-xl w-full h-auto object-cover" />
                  <h3 className=" dark:text-white text-xl mt-2">Dotfiles</h3>
                  <p className="dark:text-white text-sm">
                    Entorno BSPWM para distribuciones basadas en Arch
                  </p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

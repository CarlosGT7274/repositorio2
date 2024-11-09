import Layout from "../components/layout/layout.jsx"
import { ThreeScene } from "../lib/model.jsx";

import ecommerce from "../../public/images/ecommerce.png";
import hr from "../../public/images/hr.png";
import crud from "../../public/images/crud.png";

import nvim from "../../public/images/nvim.png";
import dotfiles from "../../public/images/dotfiles.png";

export default function Proyectos() {

    const proyectos = [
    {
      id: 1,
      imagen: ecommerce,
      titulo: "E-commerce",
      descripcion: "Plataforma de e-commerce diseñada para gestionar productos y pedidos.",
      enlace: "ecommerce",
    },
    {
      id: 2,
      imagen: hr,
      titulo: "Sistema RH",
      descripcion: "Control de Recursos Humanos",
      enlace: "rh",
    },
    {
      id: 3,
      imagen: crud,
      titulo: "Stock System",
      descripcion: "Sistema de gestión de inventarios.",
      enlace: "stock",
    },
  ];

  return (
    <Layout>
        <div className=" max-w-md mx-auto h-[calc(100vh_-_60vh)] ">
          <ThreeScene />
        </div>

        <div className="max-w-md mx-auto my-4">
          <h1 className=" my-3 font-bold text-xl dark:text-white">Trabajos</h1>

          <div className="grid lg:grid-cols-2 gap-6">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="mb-6">
                <div className="w-full text-center">
                  <a className="relative cursor-pointer" href={`/Proyectos/${proyecto.enlace}`}>
                    <img src={proyecto.imagen} className="rounded-xl" />
                    <h3 className="dark:text-white text-lg mt-2">{proyecto.titulo}</h3>
                    <p className="dark:text-white text-sm">{proyecto.descripcion}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto my-4">
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent to-transparent opacity-25 dark:via-neutral-400" />
          <h1 className=" my-3 font-bold text-xl dark:text-white">
            Colaboraciones
          </h1>
          <div className=" grid lg:grid-cols-2 gap-6 ">
            <div className=" mb-6">
              <div className=" w-full text-center">
                <a className=" relative cursor-pointer" href="Proyectos/Neovim">
                  <img
                    src={nvim}
                    className=" rounded-xl w-full h-auto object-cover"
                  />
                  <h3 className="dark:text-white text-xl mt-2">Neovim</h3>
                  <p className="dark:text-white text-sm">
                    Mi IDE para Neovim con configuraciones insanas.
                    Completamente gratuito y impulsado por la comunidad.
                  </p>
                </a>
              </div>
            </div>

            <div className=" mb-6">
              <div className=" w-full text-center">
                <a className=" relative cursor-pointer" href="Proyectos/dotfiles">
                  <img
                    src={dotfiles}
                    className=" rounded-xl w-full h-auto object-cover"
                  />
                  <h3 className=" dark:text-white text-xl mt-2">Dotfiles</h3>
                  <p className="dark:text-white text-sm">
                    Entorno BSPWM para distribuciones basadas en Arch
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}

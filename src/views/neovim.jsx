import Layout from "../components/layout/layout.jsx";
import { ThreeScene } from "../lib/model.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faUpRightFromSquare,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

import nvimvideo from "../../public/video/simplescreenrecorder-2024-09-17_23.01.39.mp4"
import nvim from "../../public/images/nvim.png"
import nvim2 from "../../public/images/nvimpart2.png"

const Neovim = () => (
  <Layout>
    <div className=" max-w-md mx-auto h-[calc(100vh_-_60vh)] ">
      <ThreeScene />
    </div>
    <div className=" max-w-md mx-auto my-4 ">
      <div className="dark:text-white">
        <a
          href="/Proyectos"
          className="text-link dark:text-darklink hover:underline underline-offset-4"
        >
          Trabajos
        </a>
        <span>
          {"   "}
          <FontAwesomeIcon icon={faGreaterThan} size="2xs" />{"   "}
        </span>
        <h3 className=" dark:text-white text-xl mb-4 inline-block">
          Neovim-
        </h3>
      </div>
      <p className=" text-justify indent-4 dark:text-white ">
        Con su estrecha integración con el shell de Unix, Vim ha sido mi editor
        de elección durante años. Una vez que empiezas a comprender los
        movimientos y operadores, rápidamente empiezas a manipular, no solo a
        editar archivos de texto. Y en el shell, todo es solo texto ;D
        Actualmente soy un usuario de Neovim a tiempo completo. Es simplemente
        mejor que el Vim normal en este momento, en mi humilde opinión. Usar un
        lenguaje integrado creado por la comunidad como Lua5 tiene mucho más
        sentido que uno personalizado/propietario. 
        <br /><br />
        Mi configuración de Neovim
        está escrita en Lua, usa lazy.vim y un montón de complementos.
      </p>
      <ul className=" ml-4 my-4 ">
        <li>
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
            Sitio
          </span>
          <a
            href="https://github.com/CarlosGT7274/HR-system"
            className="text-link dark:text-darklink hover:underline underline-offset-4"
          >
            {"https://github.com/CarlosGT7274/HR-system"}
            <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
          </a>
        </li>
        <li></li>
        <li>
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
            Stack
          </span>
          <span className="dark:text-white">Lua</span>
        </li>
      </ul>
      <img src={nvim} alt="" className="rounded-md mb-4" />
      <img src={nvim2} className="rounded-md mb-4" alt="" />
      <video src={nvimvideo} className="" controls="controls" />
    </div>
  </Layout>
);

export default Neovim;

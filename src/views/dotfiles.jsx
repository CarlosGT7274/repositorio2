import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout/layout";
import { ThreeScene } from "../lib/model";
import { faGreaterThan, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Dotfiles = () => (
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
          <FontAwesomeIcon icon={faGreaterThan} size="2xs" />
          {"   "}
        </span>
        <h3 className=" dark:text-white text-xl mb-4 inline-block">Dotfiles</h3>
      </div>
      <p className=" text-justify indent-4 dark:text-white ">
        Linux se ha convertido en uno de los sistemas operativos más populares en los últimos años, 
        y este repositorio está configurado específicamente para instalarse sobre Arch Linux, 
        brindando un entorno optimizado y personalizado para disfrutar de todas las ventajas de 
        este sistema operativo.

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
            {"https://github.com/CarlosGT7274/dotfiles-3.0"}
            <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
          </a>
        </li>
        <li></li>
        <li>
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
            Stack
          </span>
          <span className="dark:text-white">Shell, </span>
          <span className=" dark:text-white">Python</span>
        </li>
      </ul>
    </div>
  </Layout>
);
export default Dotfiles;

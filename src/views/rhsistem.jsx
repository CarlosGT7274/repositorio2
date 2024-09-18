import Layout from "../components/layout/layout.jsx";
import { ThreeScene } from "../lib/model.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars, faUpRightFromSquare, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import rh from '../../public/images/hr.png'

const RhSistem = () => (
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
          {" "}
          <FontAwesomeIcon icon={faGreaterThan} size="2xs" />{" "}
        </span>
        <h3 className=" dark:text-white text-xl mb-4 inline-block">
          Sistema RH
        </h3>
      </div>
      <p className=" text-justify indent-4 dark:text-white " >Desarrollo de un sistema de Recursos Humanos para restaurantes, enfocado en la gestión eficiente de personal, control de horarios, cálculo de nóminas, seguimiento de asistencias y evaluaciones de desempeño, optimizado para facilitar la administración y mejorar la productividad en el sector gastronómico.</p>
      <ul className=" ml-4 my-4 " >
        <li>
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
            Sitio
          </span>
          <a
            href="https://github.com/CarlosGT7274/HR-system"
            className="text-link dark:text-darklink hover:underline underline-offset-4"
          >
            {'https://github.com/CarlosGT7274/HR-system'}
            <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
          </a>
        </li>
        <li></li>
        <li>
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
            Stack
          </span>
          <span className="dark:text-white">Laravel, Tailwind, php</span>
        </li>
      </ul>
      <img src={rh} alt="" className="rounded-md mb-4" />
    </div>
  </Layout>
);

export default RhSistem;

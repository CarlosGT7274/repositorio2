import Layout from "../components/layout/layout.jsx"
import Header from "../components/Header"
import Footer from "../components/Footer.jsx";
import { ThreeScene } from "../lib/model.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedhat, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon, faBars, faUpRightFromSquare, faGreaterThan } from '@fortawesome/free-solid-svg-icons'

import ecommerce from "../../public/images/ecommerce.png"
import ecommerce2 from "../../public/images/ecomerce-pt2.png"

export default function Ecommerce() {
  return (
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
              {' '}
              <FontAwesomeIcon icon={faGreaterThan} size="2xs" />
              {' '}
            </span>
            <h3 className=" dark:text-white text-xl mb-4 inline-block">E-commerce</h3>
          </div>
          <p className=" text-justify indent-4 dark:text-white " >Creé una aplicación de comercio electrónico FULLSTACK React que sea totalmente responsiva con el pago Stripe</p>
          <ul className=" ml-4 my-4 " >
            <li>
              <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
                Sitio
              </span>
              <a
                href="https://fronted-v2-proy5-a6svx3a8x-carlosgt7274s-projects.vercel.app/"
                className="text-link dark:text-darklink hover:underline underline-offset-4"
              >
                {'https://fronted-v2-proy5-a6svx3a8x-carlosgt7274s-projects.vercel.app/ '}
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
              </a>
            </li>
            <li></li>
            <li>
              <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
                Stack
              </span>
              <span className="dark:text-white">Nodejs, MongoDB, React</span>
            </li>
          </ul>
          <img src={ecommerce} alt="" className="rounded-md mb-4" />
          <img src={ecommerce2} className="rounded-md mb-4"  />
        </div>
    </Layout>
  );
}

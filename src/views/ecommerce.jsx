import Layout from "../components/layout/layout.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import { ThreeScene } from "../lib/model.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedhat, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faSun,
  faMoon,
  faBars,
  faUpRightFromSquare,
  faGreaterThan,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import ecommerce from "../../public/images/ecommerce.png";
import ecommerce2 from "../../public/images/ecomerce-pt2.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Ecommerce() {
  const [selectedImage, setSelectedImage] = useState(null);

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
            {" "}
            <FontAwesomeIcon icon={faGreaterThan} size="2xs" />{" "}
          </span>
          <h3 className=" dark:text-white text-xl mb-4 inline-block">
            E-commerce
          </h3>
        </div>
        <p className=" text-justify indent-4 dark:text-white ">
          Creé una aplicación de comercio electrónico FULLSTACK React que sea
          totalmente responsiva con el pago Stripe
        </p>
        <ul className=" ml-4 my-4 ">
          <li>
            <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2 ">
              Sitio
            </span>
            <a
              href="https://fronted-v2-proy5-a6svx3a8x-carlosgt7274s-projects.vercel.app/"
              className="text-link dark:text-darklink hover:underline underline-offset-4"
            >
              {
                "https://fronted-v2-proy5-a6svx3a8x-carlosgt7274s-projects.vercel.app/ "
              }
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
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedImage(ecommerce)}
          className="cursor-zoom-in"
        >
          <img
            src={ecommerce}
            alt="E-commerce preview"
            className="rounded-md mb-4"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedImage(ecommerce2)}
          className="cursor-zoom-in"
        >
          <img
            src={ecommerce2}
            alt="E-commerce preview 2"
            className="rounded-md mb-4"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-opacity z-60"
                aria-label="Cerrar imagen ampliada"
              >
                <FontAwesomeIcon icon={faX} size="sm" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

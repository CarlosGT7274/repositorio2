import { motion } from "framer-motion";
import ViewLayout from "../components/layout/ViewLayout";
import { ThreeScene } from "../lib/model";
import cufrisa1 from "../../public/images/cufrisa1.png";
import cufrisa2 from "../../public/images/cufrisa2.png";

import { useImageZoom } from "../contexts/ImageZoomContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function StockContent() {
  const { openImageModal } = useImageZoom();

  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="dark:text-white">
        <a
          href="/Proyectos"
          className="text-link dark:text-darklink hover:underline underline-offset-4"
        >
          Trabajos
        </a>
        <FontAwesomeIcon icon={faGreaterThan} size="2xs" className="mx-2" />
        <h3 className="dark:text-white text-xl inline-block">Sistema RH</h3>
      </div>
      <p className=" text-justify indent-4 dark:text-white">
        Pagina Web para una empresa del rubro finanziero.
      </p>
      <ul>
        <li>
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2">Sitio</span>
          <a href="https://cufrisa.com" target="_blank" className="text-link dark:text-darklink">
            cufrisa.com
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              size="sm"
              className="ml-1"
            />
          </a>
        </li>
        <li>
          <span className=" bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2">Stack</span>
          <span> Wordpress, php, javascript </span>
        </li>
      </ul>
      <div className="max-w-md mx-auto my-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openImageModal(cufrisa1)}
          className="cursor-zoom-in"
        >
          <img
            src={cufrisa1}
            alt="E-commerce preview"
            className="rounded-md mb-4"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openImageModal(cufrisa2)}
          className="cursor-zoom-in"
        >
          <img
            src={cufrisa2}
            alt="E-commerce preview 2"
            className="rounded-md mb-4"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Stocksystem() {
  return (
    <ViewLayout>
      <StockContent />
    </ViewLayout>
  );
}

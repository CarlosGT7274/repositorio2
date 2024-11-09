import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import ViewLayout from '../components/layout/ViewLayout'
import { ThreeScene } from '../lib/model'
import { useImageZoom } from '../contexts/ImageZoomContext'
import rhImage from '../../public/images/hr.png'

function RhSistemContent() {
  const { openImageModal } = useImageZoom()

  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="dark:text-white">
        <a href="/Proyectos" className="text-link dark:text-darklink hover:underline underline-offset-4">
          Trabajos
        </a>
        <FontAwesomeIcon icon={faGreaterThan} size="2xs" className="mx-2" />
        <h3 className="dark:text-white text-xl inline-block">Sistema RH</h3>
      </div>
      <p className="text-justify indent-4 dark:text-white">
        Desarrollo de un sistema de Recursos Humanos para restaurantes, enfocado en la gestión eficiente de personal,
        control de horarios, cálculo de nóminas, seguimiento de asistencias y evaluaciones de desempeño, optimizado
        para facilitar la administración y mejorar la productividad en el sector gastronómico.
      </p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2">Sitio</span>
          <a
            href="https://github.com/CarlosGT7274/HR-system"
            className="text-link dark:text-darklink hover:underline underline-offset-4 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/CarlosGT7274/HR-system
            <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" className="ml-1" />
          </a>
        </li>
        <li className="flex items-center">
          <span className="bg-badge text-badgetext uppercase text-sm font-bold px-2 py-1 mr-2">Stack</span>
          <span className="dark:text-white">Laravel, Tailwind, PHP</span>
        </li>
      </ul>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => openImageModal(rhImage)}
        className="cursor-zoom-in"
      >
        <img
          src={rhImage}
          alt="Sistema RH preview"
          className="rounded-md"
          placeholder="blur"
          layout="responsive"
        />
      </motion.div>
    </div>
  )
}

export default function RhSistem() {
  return (
    <ViewLayout>
      <RhSistemContent />
    </ViewLayout>
  )
}

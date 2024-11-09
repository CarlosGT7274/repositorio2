// contexts/ImageZoomContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

// 1. Crear el contexto
const ImageZoomContext = createContext(null)

// 2. Hook personalizado para usar el contexto
export function useImageZoom() {
  const context = useContext(ImageZoomContext)
  if (!context) {
    throw new Error('useImageZoom debe ser usado dentro de ImageZoomProvider')
  }
  return context
}

// 3. Componente Modal (podría estar en un archivo separado)
function ImageModal({ selectedImage, onClose }) {
  if (!selectedImage) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedImage}
          alt="Imagen ampliada"
          className="w-full h-auto rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/75 transition-opacity z-[60]"
          aria-label="Cerrar imagen ampliada"
        >
          <FontAwesomeIcon icon={faX} size='sm' />
        </button>
      </motion.div>
    </motion.div>
  )
}

// 4. Provider Component
export function ImageZoomProvider({ children }) {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const openImageModal = (imageSrc) => setSelectedImage(imageSrc)
  const closeImageModal = () => setSelectedImage(null)

  const value = {
    openImageModal,
    closeImageModal,
    selectedImage
  }

  return (
    <ImageZoomContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            selectedImage={selectedImage} 
            onClose={closeImageModal}
          />
        )}
      </AnimatePresence>
    </ImageZoomContext.Provider>
  )
}

export default ImageZoomProvider

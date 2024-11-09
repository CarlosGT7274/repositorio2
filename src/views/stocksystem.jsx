import { motion } from "framer-motion";
import ViewLayout from "../components/layout/ViewLayout";
import { ThreeScene } from "../lib/model";
import ecommercee from "../../public/images/ecommerce.png";
import ecommerce2e from "../../public/images/ecomerce-pt2.png";

import { useImageZoom } from "../contexts/ImageZoomContext";

function StockContent() {
  const { openImageModal } = useImageZoom();
  
  return (
    <div> 
      <div className="max-w-md mx-auto my-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openImageModal(ecommercee)}
          className="cursor-zoom-in"
        >
          <img src={ecommercee} alt="E-commerce preview" className="rounded-md mb-4" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openImageModal(ecommerce2e)}
          className="cursor-zoom-in"
        >
          <img src={ecommerce2e} alt="E-commerce preview 2" className="rounded-md mb-4" />
        </motion.div>
      </div>
    </div>
  )
}

export default function Stocksystem() {
  return (
    <ViewLayout>
      <StockContent />
    </ViewLayout>
  );
}

















































































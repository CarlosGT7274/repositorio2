import { ImageZoomProvider } from "../../contexts/ImageZoomContext";
import Header from "../Header";
import Footer from "../Footer";
import { ThreeScene } from "../../lib/model";

export default function ViewLayout({ children }) {
  return (
    <ImageZoomProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto w-full lg:max-w-screen-xl px-4 py-8">
          <div className="max-w-md mx-auto h-[calc(100vh_-_60vh)]">
            <ThreeScene />
          </div>
          {children}
        </main>
        <Footer />
      </div>
    </ImageZoomProvider>
  );
}

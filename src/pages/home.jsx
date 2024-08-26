import ThreeScene from '../lib/model.jsx';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
    return ( 
        <>
            <Header />
            <div className=" container mx-auto w-full lg:max-w-screen-md pt-14 px-4 " >
                <div className=" max-w-md mx-auto h-[calc(100vh_-_60vh)] " >
                    <ThreeScene />
                </div>
                <div className="px-6 py-4 max-w-md mx-auto bg-[#ffffff5c] backdrop-blur-md rounded-xl flex items-center justify-center text-center dark:text-white" >
                    <p>¡Hola! Soy carlos, un programador web de México</p>
                </div>
                <div className="max-w-md mx-auto my-4" >
                    <h1 className=" underline underline-offset-8 my-3 font-bold text-xl dark:text-white">Trabajo</h1>
                    <p className=" text-justify indent-4 dark:text-white ">
                        Desarrollo software a medida y aplicaciones de escritorio, trabajando para transformar ideas y necesidades en soluciones efectivas y funcionales. Mi enfoque está en entender a fondo los requerimientos de cada proyecto para crear aplicaciones que mejoren la eficiencia y optimicen los procesos. Utilizo una variedad de tecnologías y metodologías para asegurar que el software que entrego cumpla con los más altos estándares de calidad. Mi objetivo es proporcionar soluciones personalizadas que se adapten a las necesidades específicas de cada cliente, brindando un soporte continuo para garantizar el éxito y la satisfacción.
                    </p>
                </div>
                <div className=' max-w-md mx-auto flex justify-center p-4' >
                    <a href="/Proyectos" className="cursor-pointer bg-verdeazul hover:bg-[#083D56] dark:bg-verdeazulclaro text-white transition-colors rounded-md px-2 py-2 " >
                        Mi portafolio {">"}
                    </a> 
                </div>
            </div>
            <Footer />
        </>
    )
}

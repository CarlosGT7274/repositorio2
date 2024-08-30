import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ThreeScene from '../lib/model.jsx'

import ecommerce from '../../public/images/ecomerce.png'
import hr from '../../public/images/hr.jpg'

import crud from '../../public/images/crud.png'
import rh from '../../public/images/hr.jpg'

export default function Proyectos() {
    return (
    <>
            <Header />
            <div className=' container mx-auto w-full lg:max-w-screen-md pt-14 px-4'>
                <div className=" max-w-md mx-auto h-[calc(100vh_-_60vh)] " >
                    <ThreeScene />
                </div>
                <div className="max-w-md mx-auto my-4" >
                    <h1 className=" my-3 font-bold text-xl dark:text-white">Trabajo</h1>
                    <div className="grid grid-cols-2 " >
                       <div className="px-4 grid grid-rows-2 " >
                            <div className="py-6 ">
                                <img src={ ecommerce } alt="" />
                                <h1 className=" dark:text-white  text-center py-2" >
                                    Ecommerce
                                </h1>
                                <p className=" dark:text-white text-sm text-center ">
                                    Plataforma de e-commerce diseñada para gestionar productos y pedidos.
                                </p>
                            </div>

                            <div className="px-4" >
                                <img src={ crud } alt="" />
                                <h1 className="dark:text-white  text-center py-2">
                                    Crud
                                </h1>
                            </div>
                       </div> 
                       <div className=" px-4 grid grid-rows-2 " >
                            <div className="py-6">
                                <img src={ hr } alt="" />
                                <h1 className=" dark:text-white text-center py-2" >
                                    HR system
                                </h1>
                                <p className=" dark:text-white text-sm text-center ">
                                    Control de Recursos Humanos
                                </p>
                            </div>
                            <div className=" px-4">
                                <img src={ rh } alt="" />
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
    )
}

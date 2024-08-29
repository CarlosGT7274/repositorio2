import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConnectdevelop, faRedhat, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


export default function Header() {

    const [theme, setTheme] = useState("light")
    const [Open, setOpen] = useState(false)

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    }

        const toggleDropdown = () => {
        setOpen(!Open);
    };

    return (
        <>
            <header className='fixed top-0 left-0 w-full z-10 bg-[#ffffff40] dark:bg-[#20202380] backdrop-blur-md '>
                <nav className='w-full flex p-2 mx-auto container lg:max-w-[768px] justify-between '>
                    <div className='flex items-center p-2 mr-5 dark:text-white'>
                        <h1 className=' font-bold'>
                            <a href='/'>
                                <FontAwesomeIcon icon={faRedhat} rotation={270} size="lg" /> Carlos Gonzalez
                            </a>
                        </h1>
                    </div>
            
                    <div className='flex flex-1 items-center gap-4 hidden lg:flex dark:text-white'>
                        <a 
                            href="/Proyectos" 
                            className={`hover:underline underline-offset-4 p-2 ${location.pathname === '/Proyectos' ? 'bg-verdeazulclaro' : ''}`} >
                            Proyectos
                        </a>
                        

                        <div className="button-icon border-[3px] border-white dark:border-[#222229] ">
                              <div className="icon bg-white dark:bg-[#222229] ">
                                <FontAwesomeIcon icon={faGithub} />
                              </div>
                              <div className="cube">
                                    <span className="side front bg-[#222229] text-white dark:bg-white dark:text-[#222229]">mi github</span>
                                    <span className="side top bg-[#222229] text-white dark:bg-white dark:text-[#222229]">carlosGT7274</span>
                             </div>
                        </div>


                    </div>
            
                    <div className='flex items-center gap-2'>
                        <button
                            type="button"
                            className={`py-[0.55rem] px-[0.75rem] rounded-md ${theme === "dark" ? 'bg-amber-200' : 'bg-[#805AD5]'} transition-colors duration-300`}
                            onClick={handleChangeTheme}
                        >
                            <FontAwesomeIcon
                                icon={theme === "dark" ? faSun : faMoon}
                                style={{ height:16, width:16,  color: theme === "dark" ? "#3C3D37" : "#FFF", }} 
                            />
                        </button>
                        <button type="" className="py-[0.55rem] px-[0.75rem] lg:hidden border border-[rgba(255, 255, 255, 0.16)] rounded-md" onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faBars} style={{ height:16, width:16,  color: theme === "dark" ? "#FFF" : "#20202380", }} />

                        </button>
                    </div>

                      <div className={`${Open ? 'block' : 'hidden'} absolute right-2 z-10 mt-2 w-56 origin-top-right top-14 rounded-md bg-white dark:bg-slate-800 dark:text-white border border-[rgba(255,255,255,0.16)] shadow-2xl shadow-black-500/40 ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                        <div className="py-1" role="none">
                          <a href="#" className="block px-4 py-2 text-md " role="menuitem"  id="menu-item-0">Proyectos</a>
                          <a href="#" className="block px-4 py-2 text-md " role="menuitem"  id="menu-item-1">Sobre mi</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}


import {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
export default function Navbar(){
    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
    return(
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2"> <Image src="/logo.svg" alt="" width={100} height={35}/> </div>

                <div className="hidden space-x-6 text-gray-700 md:flex">
                    <a href="#" className="hover:text-gray-500 text-lg">Pricing</a>
                    <a href="#" className="hover:text-gray-500 text-lg">Product</a>
                    <a href="#" className="hover:text-gray-500 text-lg">About Us</a>
                    <a href="#" className="hover:text-gray-500 text-lg">Careers</a>
                    <a href="#" className="hover:text-gray-500 text-lg">Community</a>
                </div>
                <a
                    href="#"
                    className="hidden p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-700 md:block"
                >
                    Get Started
                </a>

                <GiHamburgerMenu 
                    onClick={showMenu}
                    className="block hamburger md:hidden focus:outline-none"
                />
                <ul className={active ? 'z-10 w-100 flex-col text-gray-700 text-xl flex items-end fixed inset-0 uppercase bg-transparent backdrop-blur-lg gap-8 p-8 md:hidden' : 'hidden'}>
                    <AiOutlineClose 
                        onClick={showMenu}
                        className="block hamburger flex justify-end md:hidden focus:outline-none"
                    />
                    <li><a href="#" className="hover:text-gray-500 text-lg">Pricing</a></li>
                    <li><a href="#" className="hover:text-gray-500 text-lg">Product</a></li>
                    <li><a href="#" className="hover:text-gray-500 text-lg">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-500 text-lg">Careers</a></li>
                    <li><a href="#" className="hover:text-gray-500 text-lg">Community</a></li>
                    <li>
                        <a
                            href="#"
                            className="p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-700 md:block"
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
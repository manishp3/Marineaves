import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TestNav() {
  return (
    <div>
    <div
    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
    id="mobile-menu-2"
>
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
            <NavLink
                to="/home"
                className={({isActive}) =>
                    `${isActive ? 
                        "text-orange-700" :
                        "text-gray-900"
                    } 
                     hover:text-orange-7
                     block py-2 pr-4 pl-3 
                     duration-200 border-b
                     border-gray-100 
                     hover:bg-gray-50 lg:hover:bg-transparent
                     lg:border-0 hover:text-orange-700 lg:p-0`
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({isActive}) =>
                    `${isActive ? 
                        "text-orange-700" :
                        "text-gray-900"
                    } 
                     hover:text-orange-7
                     block py-2 pr-4 pl-3 
                     duration-200 border-b
                     border-gray-100 
                     hover:bg-gray-50 lg:hover:bg-transparent
                     lg:border-0 hover:text-orange-700 lg:p-0`
                }
            >
                Contact
            </NavLink>
        </li>
       {/* <li>
            <NavLink
                to=""
                className={({isActive}) =>
                    `${isActive ? 
                        "text-orange-700" :
                        "text-gray-900"
                    } 
                     hover:text-orange-7
                     block py-2 pr-4 pl-3 
                     duration-200 border-b
                     border-gray-100 
                     hover:bg-gray-50 lg:hover:bg-transparent
                     lg:border-0 hover:text-orange-700 lg:p-0`
                }
            >
                Github
            </NavLink>
            </li>*/}
        <li>
            <NavLink
                to="/about"
                className={({isActive}) =>
                    `${isActive ? 
                        "text-orange-700" :
                        "text-gray-900"
                    } 
                     hover:text-orange-7
                     block py-2 pr-4 pl-3 
                     duration-200 border-b
                     border-gray-100 
                     hover:bg-gray-50 lg:hover:bg-transparent
                     lg:border-0 hover:text-orange-700 lg:p-0`
                }
            >
                About
            </NavLink>
        </li>
        
        
    </ul>
</div>
    </div>
  )
}

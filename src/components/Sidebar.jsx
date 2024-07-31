import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import icon1 from '../assets/1. overview.png'

export const Sidebar = () => {

    return (
        <aside
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#363740]`}
        >
            <div className="flex items-center justify-between gap-2 px-6 mt-4">
                <div className="flex items-center">
                    <img src={logo} alt="" />
                    <h3 className="text-[#A4A6B3] ml-2 text-1xl font-bold font-mono">
                        Dashboard Kit
                    </h3>
                </div>
            </div>


            <div className="no-scrollbar flex flex-col overflow-y-auto">
                <nav className="mt-5 py-4">
                    <div>
                        <ul className="mb-6 flex flex-col">
                            <li>
                                <div
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-3 font-medium text-[#A4A6B3] hover:bg-[#3d3d45] hover:border-l-2 pl-6`}
                                >
                                    <img src={icon1} alt="" />
                                    Overview
                                </div>
                            </li>
                            <li>
                                <NavLink
                                    to="tickets"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-3 font-medium text-[#A4A6B3] hover:bg-[#3d3d45] hover:border-l-2 pl-6`}
                                >
                                    <img src={icon1} alt="" />
                                    Tickets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="ideas"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-3 font-medium text-[#A4A6B3] hover:bg-[#3d3d45] hover:border-l-2 pl-6`}
                                >
                                    <img src={icon1} alt="" />
                                    Ideas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contacts"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-3 font-medium text-[#A4A6B3] hover:bg-[#3d3d45] hover:border-l-2 pl-6`}
                                >
                                    <img src={icon1} alt="" />
                                    Contacts
                                </NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

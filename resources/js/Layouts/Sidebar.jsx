import { Link } from "@inertiajs/react";
import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import {router} from '@inertiajs/react';

export const Sidebar = ({ user }) => {

    const handleLogout = () => {
        router.post(route('logout'));
    }

    return (
        <nav className="w-full max-w-80 h-screen bg-primary dark:bg-secondary flex-shrink-0 px-5 overflow-y-auto no-scrollbar">
            <div className="text-center mt-5">
                <Link href={route('dashboard')} className="text-white font-bold text-4xl">Help<span className="text-secondary dark:text-primary">Desk</span></Link>
            </div>
            <div className="text-center my-3 text-white flex flex-col gap-3">
                <Link className="hover:text-slate-200" href={route('profile.edit')}><AccountCircleIcon /> {user.name}</Link>
                <button onClick={handleLogout} className="hover:text-slate-200" href={route('logout')}><LogoutIcon /> Sair</button>
            </div>

            {
                user.is_admin && (
                    <div>
                        <h2 className="text-secondary dark:text-primary text-lg font-bold">Administrado</h2>
                        <ul className="flex flex-col gap-3">
                            <Link href={route('departaments')}>
                                <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                                    <span className="text-white font-bold flex items-center gap-2 w-full h-full"><BusinessIcon /> Departamentos</span>
                                </li>
                            </Link>
                            
                            <Link href={route('ticket-status')}>
                                <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                                    <span className="text-white font-bold flex items-center gap-2"><BusinessIcon /> Status dos Tickets</span>
                                </li>
                            </Link>
                        
                            <Link href={route('ticket-priority')}>
                                <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                                    <span className="text-white font-bold flex items-center gap-2"><BusinessIcon /> Prioriedades dos Tickets</span>
                                </li>
                            </Link>
                            <Link>
                                <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                                    <span className="text-white font-bold flex items-center gap-2"><BusinessIcon /> Gerenciar Usuários</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                )
            }

            <div className="mt-4">
                <h2 className="text-secondary dark:text-primary text-lg font-bold">Ticket</h2>
                <ul className="flex flex-col gap-3">
                    <Link href={route('open-ticket')}>
                        <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                            <span className="text-white font-bold flex items-center gap-2"><BusinessIcon /> Abrir Ticket</span>
                        </li>
                    </Link>
                    <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                        <Link className="text-white font-bold flex items-center gap-2"><BusinessIcon /> Tickets para mim</Link>
                    </li>
                    <li className="w-full p-5 rounded-md bg-slate-300/10 text-base hover:bg-slate-300/20 cursor-pointer">
                        <Link className="text-white font-bold flex items-center gap-2"><BusinessIcon /> Tickets para meu Departamento</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
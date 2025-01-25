import { Link } from "@inertiajs/react";
import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Sidebar = ({user}) => {
    return (
        <nav className="min-w-72 h-screen bg-primary flex-shrink-0">
            <div className="text-center mt-5">
                <Link href={route('dashboard')} className="text-white font-bold text-4xl">Help<span className="text-secondary">Desk</span></Link>
            </div>
            <div className="text-center my-3 text-white">
                <Link className="hover:text-slate-200" href={route('profile.edit')}><AccountCircleIcon/> {user.name}</Link>
            </div>
        </nav>
    );
}
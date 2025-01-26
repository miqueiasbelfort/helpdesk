import React, {useEffect} from "react";
import { Sidebar } from "./Sidebar";

export default function Authenticated({ user, children }) {

    useEffect(() => {
        if (localStorage.getItem("theme") == 'dark') {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 flex overflow-hidden">
            <Sidebar user={user} />
            <main className="mt-5 px-5 flex-1 overflow-y-auto dark:text-white">
                {children}
            </main>
        </div>
    );
}

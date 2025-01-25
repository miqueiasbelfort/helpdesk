import React from "react";
import { Sidebar } from "./Sidebar";

export default function Authenticated({ user, children }) {
    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 flex overflow-hidden">
            <Sidebar user={user}/>
            <main className="mt-5 px-5 flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

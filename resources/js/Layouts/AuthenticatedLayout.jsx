import React from "react";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "./Theme";

export default function Authenticated({ user, children }) {

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 flex overflow-hidden">
            <Sidebar user={user} />
            <ThemeProvider>
                <main className="mt-5 px-5 flex-1 overflow-y-auto dark:text-white">
                    {children}
                </main>
            </ThemeProvider>
        </div>
    );
}

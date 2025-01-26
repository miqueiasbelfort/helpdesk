import React from "react";
import { SwitchThemeModa } from "./SwitchThemeModa";

const Header = ({children}) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                {children}
            </div>
            <div>
                <SwitchThemeModa />
            </div>
        </div>
    );
}

export default Header;
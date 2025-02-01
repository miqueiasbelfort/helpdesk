import React from "react";
import Autocomplete from "./Autocomplete";

const Departaments = () => {
    return (
        <div>
            <Autocomplete 
                options={['Olá', 'Oi', 'Tudo bem']}
                placeholder="Departementos"
                onSelect={(element) => console.log(element)}
            />
        </div>
    );
}
export default Departaments;
import React, { useEffect } from "react";
import Autocomplete from "./Autocomplete";
import useDepartamentStore from "@/Store/DepartamentStore";

const Departaments = ({
    onSelect,
    className = '',
    id = ''
}) => {

    const { departaments, isFeching, findAll } = useDepartamentStore();

    useEffect(() => {
        findAll();
    }, []);

    return (
        <Autocomplete
            options={departaments}
            placeholder="Departementos"
            onSelect={(element) => onSelect(element)}
            labelKey="name"
            optionKey='id'
            disabled={isFeching}
            className={`w-full ` + className}
            id={id}
            description
        />
    );
}
export default Departaments;
import React, { useState } from "react";
import TextInput from "./TextInput";

const Autocomplete = ({ options, placeholder = '', onSelect }) => {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredSuggestions = inputValue
        ? options.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        )
        : options;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelectSuggestion = (option) => {
        setInputValue(option);
        setShowSuggestions(false);
        onSelect(option);
    };

    const handleInputFocus = () => {
        setShowSuggestions(true);
    };

    const handleInputBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowSuggestions(false);
        }
    };

    return (
        <div
            className="relative w-full max-w-md"
            onBlur={handleInputBlur}
            tabIndex={-1}
        >
            <TextInput
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleInputFocus}
                placeholder={placeholder}
                className="border p-2 w-full rounded-md"
            />
            {showSuggestions && (
                <ul className="absolute border dark:border-slate-800 bg-white dark:bg-slate-700 w-full max-h-40 overflow-y-auto mt-1 rounded-md">
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectSuggestion(suggestion)}
                                className="p-2 cursor-pointer hover:bg-gray-200 hover:dark:bg-slate-500"
                                tabIndex={0}
                            >
                                {suggestion}
                            </li>
                        ))
                    ) : (
                        <li className="p-2 text-gray-500">Nenhuma sugestão encontrada</li>
                    )}
                </ul>
            )}
        </div>
    );
};
export default Autocomplete;
import React, { useState } from "react";
import TextInput from "./TextInput";

const Autocomplete = ({ 
    options = [], 
    placeholder = '', 
    onSelect, 
    optionKey, 
    labelKey = 'id', 
    disabled = false, 
    isFeching = false, 
    id = '',
    description = false
}) => {
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredSuggestions = inputValue
    ? options.filter(option =>
        option[labelKey]?.toLowerCase().includes(inputValue.toLowerCase())
    )
    : options;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSelectSuggestion = (option) => {
        setInputValue(option[labelKey]); // Preenche o input com o valor visível
        setShowSuggestions(false);
        onSelect(optionKey ? option[optionKey] : option); // Retorna o objeto ou valor selecionado
    };

    const handleInputFocus = () => {
        setShowSuggestions(true);
    };

    const handleInputBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setTimeout(() => setShowSuggestions(false), 150); // Evita conflito no clique
        }
    };

    return (
        <div
            className="relative w-full"
            onBlur={handleInputBlur}
            tabIndex={-1}
        >
            <TextInput
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleInputFocus}
                placeholder={placeholder}
                className="border p-2 w-full rounded-md disabled:bg-transparent/15"
                disabled={disabled}
                id={id}
            />
            {showSuggestions && (
                <ul className="absolute border dark:border-slate-800 bg-white dark:bg-slate-700 w-full max-h-40 overflow-y-auto mt-1 rounded-md z-50">
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectSuggestion(suggestion)}
                                className="p-2 cursor-pointer hover:bg-gray-200 hover:dark:bg-slate-500"
                                tabIndex={0}
                            >
                                <div className="flex items-center gap-2">
                                    {suggestion[labelKey]}
                                    {description && (
                                        <span className="text-xs dark:text-slate-400 text-gray-400">{[suggestion['description']]}</span>
                                    )}
                                </div>
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
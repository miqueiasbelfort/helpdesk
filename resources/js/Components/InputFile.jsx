import { forwardRef, useEffect, useRef, useState } from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default forwardRef(function FileInput(
    { className = "", isFocused = false, id = "", ...props },
    ref
) {
    const inputRef = ref || useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
        props.onChange(event);
    };

    return (
        <div className={`relative w-full flex flex-col gap-3 ${className}`}>
            {/* Hidden File Input */}
            <input
                {...props}
                type="file"
                multiple
                className="hidden"
                ref={inputRef}
                id={`input-${id || "file"}`}
                onChange={handleFileChange}
            />

            {/* Custom Label Button */}
            <label
                htmlFor={`input-${id || "file"}`}
                className="cursor-pointer inline-block bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-all"
            >
                <div className="flex items-center justify-between">
                    <span>Escolher arquivos</span>
                    <AttachFileIcon/>
                </div>
            </label>

            {/* Display File List */}
            {selectedFiles.length > 0 && (
                <div className="border rounded-md p-3 bg-gray-50 dark:bg-slate-700">
                    <div className="flex flex-wrap gap-3">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="text-sm text-gray-700 bg-white dark:bg-slate-600 dark:text-slate-200 p-1 px-2 rounded-md shadow-sm"
                            >
                                • {file.name} ({(file.size / 1024).toFixed(2)} KB)
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

import React from "react";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { FormLabel } from "@mui/material";
import TextField from "@/Components/TextField";
import Switch from '@mui/material/Switch';
import PrimaryButton from "@/Components/PrimaryButton";
import AddIcon from '@mui/icons-material/Add';

const FormModal = ({ handleClose, open, optionId = null }) => {

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <Dialog 
            onClose={handleClose} 
            open={open} 
            className="w-full"
        >
            <DialogTitle className="dark:bg-slate-700 dark:text-white">
                {optionId ? 'Editar Departamento' : 'Cadastrar novo Departamento'}
            </DialogTitle>
            <form className="min-w-96 p-4 flex flex-col gap-5 dark:bg-slate-700">
                <div>
                    <FormLabel htmlFor="" className="dark:text-white">Nome</FormLabel>
                    <TextField
                        hiddenLabel
                        size="small"
                        className="w-full"
                    />
                </div>
                <div>
                    <FormLabel htmlFor="" className="dark:text-white">Descrição</FormLabel>
                    <TextField
                        hiddenLabel
                        size="small"
                        className="w-full"
                    />
                </div>
                <div>
                    <FormLabel htmlFor="" className="dark:text-white">Empresa</FormLabel>
                    <TextField
                        hiddenLabel
                        size="small"
                        className="w-full"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Switch {...label} defaultChecked id="status" />
                    <FormLabel htmlFor="" className="dark:text-white">Ativo</FormLabel>
                </div>
                <div className="flex justify-end">
                    <PrimaryButton><AddIcon className="w-2 h-2 mr-2" /> Cadastrar</PrimaryButton>
                </div>
            </form>
        </Dialog>
    );
}

export default FormModal;
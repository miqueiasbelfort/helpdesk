import React, {useEffect} from "react";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { FormLabel } from "@mui/material";
import Switch from '@mui/material/Switch';
import PrimaryButton from "@/Components/PrimaryButton";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

const FormModal = ({ handleClose, open, departament }) => {

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    
    const {data, setData, reset, post, put, errors} = useForm({
        name: '',
        description: '',
        company: '',
        local: '',
        status: false
    });

    const submit = (e) => {
        e.preventDefault();
        if (departament) {
            put(route('departaments.update', { id: departament.id }), {
                onSuccess: () => {
                    onClose(); 
                }
            });
        } else {
            post(route('departaments.store'), {
                onSuccess: () => {
                    onClose(); 
                }
            });
        }
    }

    const onClose = () => {
        reset();
        handleClose();
    }

    useEffect(() => {
        if (departament) {
            setData({
                name: departament.name || '',
                description: departament.description || '',
                company: departament.company || '',
                local: departament.local || '',
                status: departament.status || false,
            });
        } else {
            reset();
        }
    }, [departament]);

    return (
        <Dialog 
            onClose={handleClose} 
            open={open} 
            className="w-full"
        >
            <DialogTitle className="dark:bg-slate-700 dark:text-white">
                {departament ? 'Editar Departamento' : 'Cadastrar novo Departamento'}
            </DialogTitle>
            <form className="min-w-96 p-4 flex flex-col gap-5 dark:bg-slate-700" onSubmit={submit}>
                <div>
                    <FormLabel htmlFor="name" className="dark:text-white">Nome</FormLabel>
                    <TextInput 
                        className="w-full"
                        value={data.name}
                        onChange={name => setData('name', name.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <FormLabel htmlFor="description" className="dark:text-white">Descrição</FormLabel>
                     <TextInput 
                        className="w-full"
                        value={data.description}
                        onChange={description => setData('description', description.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div>
                    <FormLabel htmlFor="company" className="dark:text-white">Empresa</FormLabel>
                    <TextInput 
                        className="w-full"
                        value={data.company}
                        onChange={company => setData('company', company.target.value)}
                    />
                    <InputError message={errors.company} className="mt-2" />
                </div>
                <div>
                    <FormLabel htmlFor="local" className="dark:text-white">Local</FormLabel>
                    <TextInput 
                        className="w-full"
                        value={data.local}
                        onChange={local => setData('local', local.target.value)}
                    />
                    <InputError message={errors.local} className="mt-2" />
                </div>
                <div className="flex items-center gap-2">
                    <Switch {...label} checked={data.status} onChange={e => setData('status', e.target.checked)} id="status" />
                    <FormLabel htmlFor="status" className="dark:text-white">Ativo</FormLabel>
                </div>
                <div className="flex justify-end gap-3">
                    <PrimaryButton 
                        type="button" 
                        className="bg-red-500 dark:bg-red-700 hover:dark:bg-red-500 hover:bg-red-700 focus:dark:bg-red-500 focus:bg-red-700"
                        onClick={onClose}
                    >
                        <CloseIcon className="w-2 h-2 mr-2" /> Cancelar
                    </PrimaryButton>
                    <PrimaryButton 
                        type="submit"
                    >
                        <AddIcon className="w-2 h-2 mr-2" /> {departament ? 'Editar' : 'Cadastrar'}
                    </PrimaryButton>
                </div>
            </form>
        </Dialog>
    );
}

export default FormModal;
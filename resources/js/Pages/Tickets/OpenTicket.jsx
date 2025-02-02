import React from "react";

import { Head, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

import { FormLabel } from '@mui/material';

import Header from "@/Components/Header";
import Departaments from "@/Components/Departaments";
import TextArea from "@/Components/TextArea";
import InputFile from "@/Components/InputFile";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";

const OpenTicket = ({auth}) => {

    const {data, setData, post, progress, errors} = useForm({
        departament: '',
        description: '',
        files: []
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('open-ticket.store'));
    }

    return (
        <Authenticated user={auth.user}>
            <Head title="Abrir Ticket"/>
            <div>
                <Header>
                    <h1 className='text-4xl font-bold'>Abrir Ticket</h1>
                </Header>
                <form
                    className="mt-4"
                    onSubmit={submit}
                >
                    <div className="w-full flex items-center gap-4">
                        <div className="w-[100%]">
                            <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="departament" className="dark:text-white">Departamento Responsavel</FormLabel>
                            <Departaments 
                                onSelect={departament => setData('departament', departament)}
                                id='departament'
                            />
                            <InputError message={errors.departament} className="mt-2" />
                        </div>
                    </div>
                    <div className="w-full flex-col mt-2">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="description" className="dark:text-white">Assunto</FormLabel>
                        <TextArea 
                            className='w-full min-h-36'
                            onChange={desc => setData('description', desc.target.value)}
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div className="w-full flex-col mt-2">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="description" className="dark:text-white">Assunto</FormLabel>
                        <InputFile 
                            type='file'
                            onChange={file => setData('files', file.target.files)}
                        />
                        <InputError message={errors.files} className="mt-2" />
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-3">
                        <DangerButton type='button'>Cancelar</DangerButton>
                        <PrimaryButton type='submit'>Abrir</PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}

export default OpenTicket;
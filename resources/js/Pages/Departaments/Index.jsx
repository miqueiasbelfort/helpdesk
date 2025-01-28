import React, { useState } from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

import Header from "@/Components/Header";
import PrimaryButton from "@/Components/PrimaryButton";

import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@/Components/TextField";
import FormModal from "./modal/FormModal";

const Index = ({ auth, departaments }) => {

    const [openFormModal, setOpenFormModal] = useState(false);
    const [departament, setDepartament] = useState(null);

    const handleDelete = (id) => {
        router.delete(route('departaments.destroy', {id}));
    }

    return (
        <Authenticated user={auth.user}>
            <Head title="Departamentos" />
            <Header>
                <h1 className='text-4xl font-bold'>Departamentos</h1>
            </Header>
            <div className="mt-4 w-full">
                <div className="flex items-center justify-between">
                    <PrimaryButton onClick={() => {
                        setOpenFormModal(true);
                        setDepartament(null);
                    }}><AddIcon /> Adicionar</PrimaryButton>
                    <div>
                        <TextField
                            label="Pesquisar"
                            size="small"
                        />
                    </div>
                </div>
                <div className="w-full px-5 mt-4 flex flex-col gap-4">
                    {departaments.map((departament, i) => (
                        <Badge key={i} badgeContent={departament.status ? "Ativo" : "Desativado"} color={departament.status ? 'success' : 'error'} className="w-full">
                            <div className="w-full shadow-md rounded border p-3 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-base font-bold text-primary">{departament.name}</h1>
                                        <span>-</span>
                                        <h2>{departament.company}</h2>
                                        <span>-</span>
                                        <h2>{departament.local}</h2>
                                        <span>-</span>
                                        <h2 className="text-sm font-light text-slate-400">{new Date(departament.created_at).toLocaleDateString()}</h2>
                                    </div>
                                    <p className="text-sm text-slate-400">{departament.description}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => {
                                        setDepartament(departament);
                                        setOpenFormModal(true);
                                    }} className="transition-colors hover:text-primary"><EditIcon /></button>
                                    <button onClick={() => handleDelete(departament.id)} className="transition-colors hover:text-red-500"><DeleteIcon /></button>
                                </div>
                            </div>
                        </Badge>
                    ))}
                </div>
            </div>
            <FormModal
                handleClose={() => setOpenFormModal(false)}
                open={openFormModal}
                departament={departament}
            />
        </Authenticated>
    );
}

export default Index;
import React, { useEffect, useState } from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

import Header from "@/Components/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import TextField from "@/Components/TextField";
import FormModal from "./modal/FormModal";

import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close';
import TextInput from "@/Components/TextInput";

const Index = ({ auth, departaments }) => {
    const [openFormModal, setOpenFormModal] = useState(false);
    const [departament, setDepartament] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    const handleDelete = (id) => {
        router.delete(route('departaments.destroy', { id }));
        setDeleteModal(null);
    }

    const handleFilter = (event) => {
        const query = event.toLowerCase();
        const result = departaments.filter(department =>
            department.name.toLowerCase().includes(query)
        );
        setFilteredData(result);
    };

    const handleOpenFormModal = (departament) => {
        setOpenFormModal(true);
        setDepartament(departament ? departament : null);
    }

    useEffect(() => {
        setFilteredData(departaments);
    }, [departaments]);

    return (
        <Authenticated user={auth.user}>
            <Head title="Departamentos" />
            <Header>
                <h1 className='text-4xl font-bold'>Departamentos</h1>
            </Header>
            <div className="mt-4 w-full">
                <div className="flex items-center justify-between">
                    <PrimaryButton onClick={() => handleOpenFormModal(null)}><AddIcon /> Adicionar</PrimaryButton>
                    <div>
                        <TextInput 
                            onChange={e => handleFilter(e.target.value)}
                            placeholder="Pesquisar"
                        />
                    </div>
                </div>
                <div className="w-full px-5 mt-4 flex flex-col gap-4">
                    {filteredData.map((departament, i) => (
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
                                    <button onClick={() => handleOpenFormModal(departament)} className="transition-colors hover:text-primary"><EditIcon /></button>
                                    <button onClick={() => setDeleteModal(departament)} className="transition-colors hover:text-red-500"><DeleteIcon /></button>
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
            <Dialog
                open={deleteModal ? true : false}
                onClose={() => setDeleteModal(null)}
            >
                <DialogTitle className="dark:bg-slate-700 dark:text-white">Confirmar a exclusão</DialogTitle>
                <div className="px-4 dark:bg-slate-700 dark:text-white">
                    <p className="text-lg">Tem certeza que deseja excluir o departamento <span className="text-primary font-bold">{deleteModal?.name}</span></p>
                    <div className="flex items-center justify-end mt-3 pb-4 gap-3">
                        <PrimaryButton onClick={() => setDeleteModal(null)}><CloseIcon className="w-2 h-2 mr-2" /> Cancelar</PrimaryButton>
                        <PrimaryButton onClick={() => handleDelete(deleteModal?.id)} className="bg-red-500 hover:bg-red-700 hover:dark:bg-red-700"><DeleteIcon /> Deletar</PrimaryButton>
                    </div>
                </div>
            </Dialog>
        </Authenticated>
    );
}

export default Index;
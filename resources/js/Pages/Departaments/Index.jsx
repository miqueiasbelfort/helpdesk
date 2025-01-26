import React, {useState} from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import Header from "@/Components/Header";
import PrimaryButton from "@/Components/PrimaryButton";

import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@/Components/TextField";
import FormModal from "./modal/FormModal";

const Index = ({ auth }) => {

    const [openFormModal, setOpenFormModal] = useState(false);
    const [optionId, setOptionId] = useState(null);

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
                        setOptionId(null);
                    }}><AddIcon /> Adicionar</PrimaryButton>
                    <div>
                        <TextField 
                            label="Pesquisar"
                            size="small"
                        />
                    </div>
                </div>
                <div className="w-full px-5 mt-4 flex flex-col gap-4">
                    <Badge badgeContent={"Desativado"} color="error" className="w-full">
                        <div className="w-full shadow-md rounded border p-3 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-base font-bold text-primary">Sistemas Academicos</h1>
                                    <span>-</span>
                                    <h2>IESB</h2>
                                    <span>-</span>
                                    <h2>IESB SUL</h2>
                                </div>
                                <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloremque, corporis dolorum laboriosam eum aliquid ullam. Fugiat enim soluta, pariatur animi inventore, iste perspiciatis tenetur excepturi incidunt, quo repellat deleniti!</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => {
                                    setOptionId(1);
                                    setOpenFormModal(true);
                                }} className="transition-colors hover:text-primary"><EditIcon/></button>
                                <button className="transition-colors hover:text-red-500"><DeleteIcon/></button>
                            </div>
                        </div>
                    </Badge>
                    <Badge badgeContent={"Ativo"} color="success" className="w-full">
                        <div className="w-full shadow-md rounded border p-3 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-base font-bold text-primary">Sistemas Protheus</h1>
                                    <span>-</span>
                                    <h2>Protheus</h2>
                                    <span>-</span>
                                    <h2>São Paulo</h2>
                                </div>
                                <p className="text-sm text-slate-400">Equipe formada por profissionais terceirizados</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => {
                                    setOptionId(1);
                                    setOpenFormModal(true);
                                }} className="transition-colors hover:text-primary"><EditIcon/></button>
                                <button className="transition-colors hover:text-red-500"><DeleteIcon/></button>
                            </div>
                        </div>
                    </Badge>
                </div>
            </div>
            <FormModal 
                handleClose={() => setOpenFormModal(false)}
                open={openFormModal}
                optionId={optionId}
            />
        </Authenticated>
    );
}

export default Index;
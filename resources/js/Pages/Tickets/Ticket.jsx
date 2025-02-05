import React from "react";

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import {
    DoneAll as DoneAllIcon,
    Edit as EditIcon,
    CalendarMonth as CalendarMonthIcon,
    AirplanemodeActive as AirplanemodeActiveIcon,
    NoteAdd as NoteAddIcon
} from '@mui/icons-material';

import { FormLabel } from '@mui/material';
import TextField from "@/Components/TextField";
import TextInput from "@/Components/TextInput";
import { fileFormater } from "@/utils/formaters";

const Ticket = ({ auth, ticket }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Ticket - ${ticket.id}`} />
            <div className="flex items-center justify-between">
                <h1 className='text-4xl font-bold'>Ticket - {ticket.id}</h1>
                <div className="flex items-center gap-3">
                    <button className="transition-colors hover:text-primary"><EditIcon /> Editar</button>
                    <button className="transition-colors hover:text-primary"><NoteAddIcon /> Notas</button>
                    <button className="transition-colors hover:text-primary"><DoneAllIcon /> Fechar Ticket</button>
                    <button className="transition-colors hover:text-primary"><CalendarMonthIcon /> Agendar</button>
                    <button className="transition-colors hover:text-primary"><AirplanemodeActiveIcon /> Encaminhar</button>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="open_to" className="dark:text-white">Aberto Por</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="open_to"
                            value={ticket.user.name || '---'}
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="departament" className="dark:text-white">Departamento</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="departament"
                            value={ticket.user.departament.name || '---'}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="" className="dark:text-white">Área Responsável</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="responsible_area"
                            value={ticket.departament.name || '---'}
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="responsible_operator" className="dark:text-white">Operador responsável</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="responsible_operator"
                            value={ticket.responsible || '---'}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="open_user" className="dark:text-white">Contato</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="open_user"
                            value={ticket.user.phone || '---'}
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="email" className="dark:text-white">Email de contato</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="email"
                            value={ticket.user.email || '---'}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="status" className="dark:text-white">Status</FormLabel>
                        <TextInput
                            className="w-full"
                            disabled
                            id="status"
                            value={ticket.status.name || '---'}
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="priority" className="dark:text-white">Prioridade</FormLabel>
                        <TextInput
                            className={"w-full font-bold"}
                            disabled
                            id="priority"
                            style={{color: ticket.priority.color}}
                            value={ticket.priority.name || '---'}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="description" className="dark:text-white">Descrição</FormLabel>
                    <TextField
                        id="description"
                        multiline
                        rows={5}
                        className="w-full"
                        disabled
                        value={ticket.description}
                    />
                </div>
                <div>
                    <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="files" className="dark:text-white">Arquivos</FormLabel>
                    <div className="flex items-center gap-4 flex-wrap">
                        {ticket.files.map(file => (
                            <div key={file.id} className="min-h-10 min-w-20 shadow-md rounded border flex items-center justify-center p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-500">
                                <span className="text-slate-500 dark:text-slate-200">{fileFormater(file.filename, file.id)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="notes" className="dark:text-white">Notas</FormLabel>
                    <ul>
                        <li className="flex flex-col gap-2 mt-3 p-4 shadow-md rounded border">
                            <div className="flex items-center gap-3">
                                <span className="text-green-500 font-bold">Publico</span>
                                <span>-</span>
                                <span>Miqueias Belfort</span>
                                <span>-</span>
                                <span>12/10/2023</span>
                                <span>-</span>
                                <span>Entrada na fila</span>
                            </div>
                            <span className="text-sm text-slate-500 max-w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus hic deserunt ex quibusdam dolorem, ut magnam, nesciunt nihil libero, distinctio laudantium. Omnis a recusandae sequi repudiandae veritatis nesciunt obcaecati cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius, similique, accusamus minima perferendis, dolorum esse illum ullam iusto tempore aliquam voluptates hic voluptatibus veniam doloribus sequi numquam distinctio aspernatur?</span>
                        </li>
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Ticket;
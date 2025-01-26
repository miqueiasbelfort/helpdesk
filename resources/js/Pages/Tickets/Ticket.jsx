import React from "react";

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import {
    DoneAll as DoneAllIcon,
    Edit as EditIcon,
    CalendarMonth as CalendarMonthIcon,
    AirplanemodeActive as AirplanemodeActiveIcon
} from '@mui/icons-material';

import { TextField, FormLabel } from '@mui/material';

const Ticket = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Ticket - 1234" />
            <div className="flex items-center justify-between">
                <h1 className='text-4xl font-bold'>Ticket - 1234</h1>
                <div className="flex items-center gap-3">
                    <button className="transition-colors hover:text-primary"><EditIcon /> Editar</button>
                    <button className="transition-colors hover:text-primary"><DoneAllIcon /> Fechar Ticket</button>
                    <button className="transition-colors hover:text-primary"><CalendarMonthIcon /> Agendar</button>
                    <button className="transition-colors hover:text-primary"><AirplanemodeActiveIcon /> Encaminhar</button>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="open_to">Aberto Por</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="open_to"
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="departament">Departamento</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="departament"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="">Área Responsável</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="responsible_area"
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="responsible_operator">Operador responsável</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="responsible_operator"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="open_user">Contato</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="open_user"
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="email">Email de contato</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="email"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="status">Status</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="status"
                        />
                    </div>
                    <div className="w-full">
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="priority">Prioridade</FormLabel>
                        <TextField
                            size="small"
                            hiddenLabel
                            className="w-full"
                            disabled
                            id="priority"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="description">Descrição</FormLabel>
                    <TextField
                        id="description"
                        multiline
                        rows={5}
                        className="w-full"
                        disabled
                    />
                </div>
                <div>
                    <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="files">Arquivos</FormLabel>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="min-h-10 min-w-20 shadow-md rounded border flex items-center justify-center p-3">
                            <span className="text-slate-500">nome.jpg</span>
                        </div>
                        <div className="min-h-10 min-w-20 shadow-md rounded border flex items-center justify-center p-3">
                            <span className="text-slate-500">asdasdasdsadsada.jpg</span>
                        </div>
                        <div className="min-h-10 min-w-20 shadow-md rounded border flex items-center justify-center p-3">
                            <span className="text-slate-500">asdasdasdsadsada.jpg</span>
                        </div>
                        <div className="min-h-10 min-w-20 shadow-md rounded border flex items-center justify-center p-3">
                            <span className="text-slate-500">asdasdasdsadsada.jpg</span>
                        </div>
                        <div className="min-h-10 min-w-20 shadow-md rounded border flex items-center justify-center p-3">
                            <span className="text-slate-500">asdasdasdsadsada.jpg</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="notes">Notas</FormLabel>
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
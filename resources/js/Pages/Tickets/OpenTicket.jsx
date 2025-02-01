import React from "react";

import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

import Header from "@/Components/Header";

import { FormLabel, Autocomplete, TextField } from '@mui/material';
import TextInput from "@/Components/TextInput";
import Departaments from "@/Components/Departaments";

const OpenTicket = ({auth}) => {
    return (
        <Authenticated user={auth.user}>
            <Head title="Abrir Ticket"/>
            <div>
                <Header>
                    <h1 className='text-4xl font-bold'>Abrir Ticket</h1>
                </Header>
                <form>
                    <div>
                        <FormLabel sx={{ fontWeight: 'bold' }} htmlFor="open_to" className="dark:text-white">Departamento Responsavel</FormLabel>
                        <Departaments />
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}

export default OpenTicket;
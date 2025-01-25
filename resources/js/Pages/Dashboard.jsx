import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Minha Área" />
            <h1 className='text-4xl font-bold'>Minha Área</h1>
            <div className='w-full mt-5'>
                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary className='w-full h-24'>
                        <div
                            className='flex items-center gap-3 justify-between w-full'
                        >
                            <div className='text-2xl'>
                                <HelpIcon sx={{ width: '40px', height: '40px' }} /> <span className='font-bold'>Tickets criados por mim</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold text-blue-500'>Abertos: 10</span>
                                <span className='font-bold text-green-500'>Fechados: 15</span>
                                <span className='font-bold text-yellow-500'>Pendentes: 3</span>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='max-h-[50vh] overflow-y-auto'>
                            <div className='w-full h-32 space-x-4 shadow-md border mb-4 flex items-center justify-between p-5'>
                                <div>
                                    <h1 className='font-bold text-secondary'>Nº 1450</h1>
                                    <p>Sistemas Academicos</p>
                                    <p>Miqueias Kawã Sousa Belfort</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Departamento: Recursos Humanos</p>
                                    <p>Tempo: 10h</p>
                                    <p>Prioriedade: <span>Baixa</span></p>
                                    <p>Tipo: Insidente</p>
                                </div>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 2</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 3</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 4</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 5</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 6</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 7</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary className='w-full h-24'>
                        <div
                            className='flex items-center gap-3 justify-between w-full'
                        >
                            <div className='text-2xl'>
                                <PersonIcon sx={{ width: '40px', height: '40px' }} /> <span className='font-bold'>Tickets para mim</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold text-blue-500'>Abertos: 10</span>
                                <span className='font-bold text-green-500'>Fechados: 15</span>
                                <span className='font-bold text-yellow-500'>Pendentes: 3</span>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='max-h-[50vh] overflow-y-auto'>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 1</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 2</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 3</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 4</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 5</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 6</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 7</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                            <div className='w-full h-20 shadow-md border mb-4'>
                                <h1>Chamado 8</h1>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </AuthenticatedLayout>
    );
}

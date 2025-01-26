import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import Header from '@/Components/Header';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Minha Área" />
            <Header>
                <h1 className='text-4xl font-bold'>Minha Área</h1>
            </Header>
            <div className='w-full mt-5'>
                <Accordion sx={{ width: '100%' }} className='dark:bg-slate-700 dark:text-white'>
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
                            <Link href={route('ticket')} className='w-full h-32 space-x-4 shadow-md border dark:border-gray-600 mb-4 flex items-center justify-between p-5 transition-opacity hover:bg-slate-300/15'>
                                <div>
                                    <h1 className='font-bold text-secondary dark:text-primary'>Nº 1450</h1>
                                    <p>Sistemas Academicos</p>
                                    <p>Miqueias Kawã Sousa Belfort</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p><span className='font-bold'>Departamento:</span> Recursos Humanos</p>
                                    <p><span className='font-bold'>Tempo:</span> 10h</p>
                                    <p><span className='font-bold'>Prioriedade:</span> <span className='text-green-500'>Baixa</span></p>
                                    <p><span className='font-bold'>Tipo:</span> Insidente</p>
                                    <p><span className='font-bold'>Status:</span> Aberto</p>
                                </div>
                            </Link>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ width: '100%' }} className='dark:bg-slate-700 dark:text-white'>
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
                            <Link href={route('ticket')} className='w-full h-32 space-x-4 shadow-md border dark:border-gray-600 mb-4 flex items-center justify-between p-5 transition-opacity hover:bg-slate-300/15'>
                                <div>
                                    <h1 className='font-bold text-secondary dark:text-primary'>Nº 1450</h1>
                                    <p>Sistemas Academicos</p>
                                    <p>Miqueias Kawã Sousa Belfort</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p><span className='font-bold'>Departamento:</span> Recursos Humanos</p>
                                    <p><span className='font-bold'>Tempo:</span> 10h</p>
                                    <p><span className='font-bold'>Prioriedade:</span> <span className='text-green-500'>Baixa</span></p>
                                    <p><span className='font-bold'>Tipo:</span> Insidente</p>
                                    <p><span className='font-bold'>Status:</span> Em Analise</p>
                                </div>
                            </Link>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </AuthenticatedLayout>
    );
}

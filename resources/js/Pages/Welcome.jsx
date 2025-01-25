import { SwitchThemeModa } from '@/Components/SwitchThemeModa';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div className='dark:bg-slate-800 h-screen w-full dark:text-white'>
            <Head title="Welcome" />
            <SwitchThemeModa />
            <div className='flex items-center gap-4'>
                <Link href={route('login')}>Entrar</Link>
                <Link href={route('register')}>Registrar</Link>
            </div>
        </div>
    );
}

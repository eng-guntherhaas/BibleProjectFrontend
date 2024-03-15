import Link from 'next/link';
import { RegisterForm } from '@/components/forms';

export default function RegisterPage() {

    return (
        <main>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Créer un compte
                </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                
                <RegisterForm />

                <p className='mt-10 text-center text-sm text-gray-500'>
                    Vous avez déjà un compte? {' '}
                    <Link 
                        href="/auth/login" 
                        className="block text-center text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                    Connectez-vous
                    </Link>
                </p>
                </div>
            </div>
        </main>
    );
}
'use client';

import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import Spinner from '@/components/common/Spinner';


export default function RegisterPage() {

    const router = useRouter();

    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        register({ first_name, last_name, email, password, re_password })
        .unwrap()
        .then(() => {
            toast.success('Inscription réussie. Veuillez vérifier votre courrier électronique pour vérifier votre compte.');
            router.push('/auth/login')
        })
        .catch((error) => {
            toast.error('N\'a pas réussi à créer un compte');
        });
    }

    return (
        <main>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Créer un compte
                </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form 
                    className="space-y-6"
                    onSubmit={onSubmit}>
                    <div>
                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Prénom
                    </label>
                    <div className="mt-2">
                        <input
                        id="first_name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="first_name"
                        type="text"
                        onChange={onChange}
                        value={first_name}
                        required
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Nom
                    </label>
                    <div className="mt-2">
                        <input
                        id="last_name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="last_name"
                        type="text"
                        onChange={onChange}
                        value={last_name}
                        required
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="email"
                        type="email"
                        onChange={onChange}
                        value={email}
                        required
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Mot de passe
                    </label>
                    <div className="mt-2">
                        <input
                        id="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={password}
                        required
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="re_password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirmer le mot de passe
                    </label>
                    <div className="mt-2">
                        <input
                        id="re_password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="re_password"
                        type="re_password"
                        onChange={onChange}
                        value={re_password}
                        required
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {isLoading ? <Spinner sm /> : 'S\'inscrire'}
                    </button>
                    </div>
                </form>
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
import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />

        <h2 className="mt-6 text-center text-3xl text-gray-900">
          Rapid Chat App
<<<<<<< HEAD
        </h2>
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Sign in to your account
=======
>>>>>>> ce15d5333d42eb80d96e659d0b6ed446d1d977be
        </h2>
          <h2 className='mt-6 text-center text-3xl font-semibold text-gray-900'>Sign in to your account</h2>
      </div>
      {/* Auth-Form */}
      <AuthForm />
    </div>
  );
}

'use client';

import { useState, useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle, BsTwitter, BsApple } from 'react-icons/bs';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVAriant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/users');
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    setVAriant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN');
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // Axios Register
      axios
        .post('/api/register', data)
        .then(() => signIn('credentials', data))
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (variant === 'LOGIN') {
      // NextAuth SignIn
      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials');
          }
          if (callback?.ok && !callback?.error) {
            toast.success('Logged in successfully');
            router.push('/users');
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //NextAuth Social Sign In
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Something went wrong!');
        }
        if (callback?.ok && !callback?.error) {
          toast.success('Logged in successfully');
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="
    mt-8
    mx-3
    sm:mx-auto
    sm:w-full
    sm:max-w-md
  "
    >
      <div
        className="
        bg-cyan-100
        px-4
        py-8
        shadow-xl
        sm:px-10
        backdrop-filter backdrop-blur-lg
        bg-opacity-50
        sm:rounded-lg
        rounded-lg
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
              type=""
            />
          )}
          <Input
            type="email"
            id="email"
            label="Email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} type="submit" fullWidth>
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-rose-50 rounded-lg px-2 text-gray-700">
                Or continue with
              </span>
            </div>
          </div>
          {/* Social Auth */}
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
            <AuthSocialButton
              icon={BsApple}
              onClick={() => socialAction('apple')}
            />
          </div>
        </div>

        <div
          className="
        flex
        gap-2
        justify-center
        text-sm
        mt-6
        px-2
        text-gray-500
        "
        >
          <div>
            {variant === 'LOGIN' ? 'New User' : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
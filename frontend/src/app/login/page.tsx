'use client';

import Button from '@/components/button/Button';
import H1 from '@/components/heading/H1';
import Input from '@/components/input/Input';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

interface IAuthCredentials {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const router = useRouter();

  const [validation, setValidation] = useState('');
  const [credentions, setCredentions] = useState<IAuthCredentials>({
    email: '',
    password: '',
  });

  const handleSetCredentials = (
    change: keyof IAuthCredentials,
    value: string
  ) => {
    validation && setValidation('');
    setCredentions((prevS) => ({ ...prevS, [change]: value }));
  };

  const onSubmit = async () => {
    if (
      credentions.email.trim().length <= 0 ||
      credentions.password.trim().length <= 0
    ) {
      setValidation('Enter email and password');
      return;
    }

    try {
      const resLogin = await fetch(
        'http://localhost:3001/api/isAuthenticated',
        {
          headers: {
            Authorization:
              'Basic ' +
              btoa(
                `${credentions.email.trim()}:${credentions.password.trim()}`
              ),
          },
        }
      );

      if (resLogin.ok) {
        localStorage.setItem('email', credentions.email);
        localStorage.setItem('password', credentions.password);
        router.push('/card');
      }
    } catch (e) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  };

  return (
    <div className="flex flex-col justify-center lg:flex-row lg:h-full">
      <div className="lg:w-1/2  flex flex-col items-center mt-10">
        <div>
          <H1>Authentication</H1>
        </div>
        <div className="flex flex-col mt-5 space-y-5">
          <Input
            error={validation}
            label="Email"
            type="email"
            placeholder="Email"
            value={credentions.email}
            onChange={(e) => handleSetCredentials('email', e.target.value)}
          />
          <Input
            error={validation}
            label="Password"
            type="password"
            placeholder="Password"
            value={credentions.password}
            onChange={(e) => handleSetCredentials('password', e.target.value)}
          />
        </div>

        <div className="mt-5">
          <Button onClick={onSubmit}>Submit</Button>
        </div>
        <div className="mt-5">
          <p
            className={classNames(
              'text-primary-light'
            )}
          >
            1. Zadajte svoj email a heslo
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

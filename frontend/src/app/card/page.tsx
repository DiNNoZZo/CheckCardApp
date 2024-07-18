'use client';

import Button from '@/components/button/Button';
import H3 from '@/components/heading/H3';
import Input from '@/components/input/Input';
import { ICardResultCheck } from '@/types/index.types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CardPage = () => {
  const router = useRouter();

  const [valError, setValError] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardResult, setCardResult] = useState<ICardResultCheck>();

  useEffect(() => {
    const checkUser = async () => {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');

      const res = await fetch('http://localhost:3001/api/isAuthenticated', {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + btoa(`${email}:${password}`),
        },
      });
      if (res.status === 401) {
        router.push('login');
      }
    };

    checkUser();
  }, []);

  const onSubmit = async () => {
    if (!cardNumber) {
      setValError('Enter card number');
      return;
    }

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    try {
      const res = await fetch(`http://localhost:3001/api/card/${cardNumber}`, {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + btoa(`${email}:${password}`),
        },
      });

      if (res.ok) {
        const data = (await res.json()) as ICardResultCheck;
        setCardResult(data);
      }
    } catch (e) {}
  };

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 p-10">
      <div className="flex-1 space-y-5 md:max-w-80 p-10 rounded border border-white">
        <Input
          error={valError}
          label="Enter card number"
          placeholder="Enter card number"
          type="text"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.currentTarget.value);
            valError && setValError('');
          }}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </div>
      <div className="flex-1 space-y-5 md:max-w-80 p-10 rounded border border-white">
        <div>
          <H3>End of validity:</H3>
          <H3>
            {cardResult
              ? `${new Date(
                  cardResult?.validity.validityEnd
                ).toLocaleDateString('sk')}`
              : ''}
          </H3>
        </div>
        <div>
          <H3>Card status:</H3>
          <H3>{cardResult && cardResult.state.stateDescription}</H3>
        </div>
      </div>
    </div>
  );
};

export default CardPage;

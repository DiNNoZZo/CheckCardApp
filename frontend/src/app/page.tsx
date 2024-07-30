'use client';

import Button from '@/components/button/Button';
import H1 from '@/components/heading/H1';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [checkServer, setCheckServer] = useState('');

  useEffect(() => {
    const checkServer = async () => {
      try {
        // [CR] base url by měla být v konfiguraci
        const res = await fetch('http://localhost:3001/api/home', {
          method: 'GET',
        });
        
        if (res.ok) {
          const data = await res.json();
          setCheckServer(data.message);
        }
      } catch (e) {
        setCheckServer('Something is wrong');
      }
    };

    checkServer();
  },[]);

  const handleLogIn = () => {
    router.push('/login');
  };

  const handleRedirectToMap = () => {
    router.push('/map');
  };

  return (
    <div className="flex flex-col space-y-10 p-10">
      <div className="flex justify-center">
        <H1>{checkServer}</H1>
      </div>
      <div className="flex flex-col items-center space-y-10">
        <p>
          Hello there, if you want to check your own card, you need to log in to
          the application.
        </p>
        <Button onClick={handleLogIn}>Log in</Button>
      </div>
      <div className='flex flex-col items-center space-y-10'>
        <p>You can see where there are sales points everywhere</p>
        <Button onClick={handleRedirectToMap}>Show map</Button>
      </div>
    </div>
  );
}

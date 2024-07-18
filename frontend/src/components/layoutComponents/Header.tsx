'use client';

import { IComponent } from '@/types/index.types';
import React, { FC } from 'react';
import H1 from '../heading/H1';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';

const Header: FC<IComponent> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="text-text flex items-center">
        <H1>Check Card App</H1>
      </div>
      <div className=" flex items-center space-x-5">
        <Button onClick={() => router.push('/')}>
          Home
        </Button>
        <Button onClick={() => router.push('/card')}>
          Card
        </Button>
      </div>
    </div>
  );
};

export default Header;

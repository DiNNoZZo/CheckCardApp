import { ReactNode } from 'react';

export interface IComponent<T = ReactNode> {
  children?: T;
  className?: string;
}

interface IOpeningHours {
  from: number;
  to: number;
  hours: string;
}

export interface IPIDPlace {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  type: string;
  openingHours: Array<IOpeningHours>;
  services: number;
  payMethods: number;
}

export interface IValidity {
  validityStart: string;
  validityEnd: string;
}

export interface IState {
  stateId: number;
  stateDescription: string;
}

export interface ICardResultCheck {
  validity: IValidity;
  state: IState;
}
export interface ITranslatedMessage {
  message: string;
  translation: string;
}

interface IBadReqMessages {
  validationErr: ITranslatedMessage;
  internalAppErr: ITranslatedMessage;
}

export const badRequestMessageList: IBadReqMessages = {
  validationErr: {
    message: 'Validation error',
    translation: 'Validácia zlyhala',
  },
  internalAppErr: {
    message: 'Internal application error',
    translation: 'Nastala chyba v aplikácii',
  },
};

export const users = {
  'user@test.com': 'password',
}
import { createContext } from 'react';

import { ICredentialsContext } from '@/interfaces/ICredentialsContext';

const initialState: ICredentialsContext = {
  accessToken: '',
  spaceId: '',
};

const getCredentialsContext = () => createContext(initialState);

export { getCredentialsContext, initialState };

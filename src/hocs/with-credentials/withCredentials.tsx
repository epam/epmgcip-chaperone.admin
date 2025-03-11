import { ComponentType, useEffect, useState } from 'react';

import { getCredentialsContext } from '@/contexts/credentialsContext';
import { ICredentialsResponseBody } from '@/interfaces/ICredentialsApi';
import { ICredentialsContextProps } from '@/interfaces/ICredentialsContext';
import { Logger } from '@/utils/logger';

const CredentialsContext = getCredentialsContext();

function withCredentials<
  TComponentProps extends ICredentialsContextProps = ICredentialsContextProps,
>(Component: ComponentType<TComponentProps>) {
  return function CredentialComponent(
    props: Omit<TComponentProps, keyof ICredentialsContextProps>,
  ) {
    const [spaceId, setSpaceId] = useState<string>('');
    const [accessToken, setAccessToken] = useState<string>('');

    useEffect((): void => {
      const fetchClientCredentials = async (): Promise<void> => {
        try {
          const response: Response = await fetch('/api/credentials');
          const responseBody: ICredentialsResponseBody = await response.json();

          if (responseBody.accessToken) {
            setAccessToken(responseBody.accessToken);
          }

          if (responseBody.spaceId) {
            setSpaceId(responseBody.spaceId);
          }
        } catch (error) {
          Logger.logError('Error getting settings', error);
        }
      };

      fetchClientCredentials();
    }, []);

    return (
      <CredentialsContext.Provider value={{ accessToken, spaceId }}>
        <CredentialsContext.Consumer>
          {(value) => <Component {...value} {...(props as TComponentProps)} />}
        </CredentialsContext.Consumer>
      </CredentialsContext.Provider>
    );
  };
}

export { withCredentials };

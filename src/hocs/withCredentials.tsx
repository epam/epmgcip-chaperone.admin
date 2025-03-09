import { ComponentType, useEffect, useState } from 'react';

import { getCredentialsContext } from '@/contexts/credentialsContext';
import { ICredentialsResponseBody } from '@/interfaces/ICredentialsApi';
import { ICredentialsContextProps } from '@/interfaces/ICredentialsContext';

const CredentialsContext = getCredentialsContext();

function withCredentialsContext<TComponentProps extends ICredentialsContextProps>(
  Component: ComponentType<TComponentProps>,
) {
  return function CredentialComponent(props: TComponentProps) {
    const [spaceId, setSpaceId] = useState<string>('');
    const [accessToken, setAccessToken] = useState<string>('');

    useEffect((): void => {
      const fetchClientCredentials = async (): Promise<void> => {
        const response: Response = await fetch('/api/credentials');
        const responseBody: ICredentialsResponseBody = await response.json();

        if (responseBody.accessToken) {
          setAccessToken(responseBody.accessToken);
        }

        if (responseBody.spaceId) {
          setSpaceId(responseBody.spaceId);
        }
      };

      fetchClientCredentials();
    }, []);

    return (
      <CredentialsContext.Provider value={{ accessToken, spaceId }}>
        <CredentialsContext.Consumer>
          {(value) => (
            <Component {...props} accessToken={value.accessToken} spaceId={value.spaceId} />
          )}
        </CredentialsContext.Consumer>
      </CredentialsContext.Provider>
    );
  };
}

export { withCredentialsContext };

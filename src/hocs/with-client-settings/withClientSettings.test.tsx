import { FC } from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import { ICredentialsResponseBody } from '@/interfaces/ICredentialsApi';
import { ICredentialsContextProps } from '@/interfaces/ICredentialsContext';
import { accessTokenMock, spaceIdMock } from '@/mocks/settingsMock';

import { withClientSettings } from './withClientSettings';

describe('withClientSettings tests', () => {
  const TestComponent: FC<ICredentialsContextProps> = (props) => (
    <div>
      <p data-testid="space-id">{props.spaceId}</p>
      <p data-testid="access-token">{props.accessToken}</p>
    </div>
  );

  const ClientSettingsComponent = withClientSettings(TestComponent);

  const renderComponent = () => render(<ClientSettingsComponent />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should perform call to get settings and render them correctly', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            accessToken: accessTokenMock,
            spaceId: spaceIdMock,
          } as ICredentialsResponseBody),
      }),
    ) as jest.Mock;

    renderComponent();

    await waitFor(() => {
      const spaceId = screen.getByTestId('space-id');

      expect(spaceId.innerHTML).toBe(spaceIdMock);

      const accessToken = screen.getByTestId('access-token');

      expect(accessToken.innerHTML).toBe(accessTokenMock);

      expect(global.fetch).toHaveBeenCalled();
    });
  });

  it('should perform call to get settings and handle error', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject({}),
        status: 500,
      }),
    ) as jest.Mock;

    renderComponent();

    await waitFor(() => {
      const spaceId = screen.getByTestId('space-id');

      expect(spaceId.innerHTML).toBeFalsy();

      const accessToken = screen.getByTestId('access-token');

      expect(accessToken.innerHTML).toBeFalsy();

      expect(global.fetch).toHaveBeenCalled();
    });
  });
});

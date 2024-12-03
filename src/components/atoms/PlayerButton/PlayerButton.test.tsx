import { render } from '@testing-library/react';

import PlayerButton from './PlayerButton';
import '@testing-library/jest-dom';

const Icon = () => {
  return <div></div>;
};

describe('PlayerButton', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<PlayerButton icon={Icon} text="Play" />);

    expect(getByText('Play')).toBeInTheDocument();
  });
});

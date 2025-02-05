import { render, screen } from '@testing-library/react';

import { Map } from './Map';

describe('Map Component', () => {
  it('renders an iframe with the correct attributes', () => {
    const testHeight = '500px';
    process.env.EMBED_MAP_SRC = 'https://example.com/map';

    render(<Map height={testHeight} />);

    const iframe = screen.getByTestId('map-iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('height', testHeight);
    expect(iframe).toHaveAttribute('src', process.env.EMBED_MAP_SRC);
    expect(iframe).toHaveClass('iframe');
  });
});

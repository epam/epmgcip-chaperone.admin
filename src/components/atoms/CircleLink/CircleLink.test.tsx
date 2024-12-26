import { IconBrandTelegram } from '@tabler/icons-react';
import { render, screen } from '@testing-library/react';

import CircleLink from './CircleLink';

describe('CircleLink', () => {
  it('renders the CircleLink component with an icon and a link', () => {
    const link = 'https://test.com';
    const icon = <IconBrandTelegram color="white" size="20" data-testid="icon" />;

    render(<CircleLink link={link} icon={icon} />);

    const circleLinkElement = screen.getByRole('link');

    expect(circleLinkElement).toBeInTheDocument();
    expect(circleLinkElement).toHaveAttribute('href', link);
    expect(circleLinkElement).toContainElement(screen.getByTestId('icon'));
  });
});

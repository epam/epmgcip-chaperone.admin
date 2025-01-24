import { render } from '@testing-library/react';
import * as nextIntl from 'next-intl';

import Page from './Page';

jest.mock('@contentful/rich-text-react-renderer', () => ({
  documentToReactComponents: jest.fn().mockImplementation(() => <div>Mocked Content</div>),
}));
jest.mock('@/utils/getRichTextEditorRenderOptions', () => jest.fn().mockReturnValue({}));

describe('Page Component', () => {
  const mockLocale = 'En';

  beforeEach(() => {
    jest.spyOn(nextIntl, 'useLocale').mockReturnValue(mockLocale.toLowerCase());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the title and description correctly', () => {
    const page = {
      sys: {
        id: '',
      },
      nameEn: 'Test Page',
      nameKa: '',
      nameRu: '',
      nameUz: '',
      descriptionEn: {
        json: {
          content: [],
        },
        links: undefined,
      },
      descriptionKa: {
        json: {
          content: [],
        },
        links: undefined,
      },
      descriptionRu: {
        json: {
          content: [],
        },
        links: undefined,
      },
      descriptionUz: {
        json: {
          content: [],
        },
        links: undefined,
      },
    };

    const { getByText } = render(<Page page={page} />);

    expect(getByText('Test Page')).toBeInTheDocument();
  });
});

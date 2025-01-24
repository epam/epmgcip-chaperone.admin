import * as ContentfulRichTextTypes from '@contentful/rich-text-types';

import getRichTextEditorRenderOptions from './getRichTextEditorRenderOptions';

describe('renderOptions function', () => {
  it('returns empty configuration object if links are undefined', () => {
    const result = getRichTextEditorRenderOptions(undefined);
    expect(result).toEqual({});
  });

  it('returns renderNode configuration for embedded assets', () => {
    const linksMock = {
      assets: {
        block: [
          {
            sys: { id: 'asset1' },
            url: 'http://example.com/image1.jpg',
            title: 'Test Image 1',
            height: 100,
            width: 200,
          },
        ],
      },
    };

    const result = getRichTextEditorRenderOptions(linksMock);
    expect(result).toHaveProperty('renderNode');
    expect(result.renderNode).toHaveProperty(ContentfulRichTextTypes.BLOCKS.EMBEDDED_ASSET);
  });
});

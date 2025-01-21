import { headers } from 'next/headers';

import getLastUrlSegment from './getLastUrlSegment';

jest.mock('next/headers', () => ({
  headers: jest.fn(),
}));

describe('getLastUrlSegment', () => {
  it('extracts last segment of the pathname', () => {
    (headers as jest.Mock).mockReturnValue(new Map([['x-pathname', '/product/item123/details']]));

    const segment = getLastUrlSegment();
    expect(segment).toEqual('details');
  });

  it('returns an empty string when x-pathname header is not present', () => {
    (headers as jest.Mock).mockReturnValue(new Map());

    const segment = getLastUrlSegment();
    expect(segment).toEqual('');
  });

  it('returns an empty string when x-pathname header is empty', () => {
    (headers as jest.Mock).mockReturnValue(new Map([['x-pathname', '']]));

    const segment = getLastUrlSegment();
    expect(segment).toEqual('');
  });

  it('correctly handles pathnames with no slashes', () => {
    (headers as jest.Mock).mockReturnValue(new Map([['x-pathname', 'justaname']]));

    const segment = getLastUrlSegment();
    expect(segment).toEqual('justaname');
  });
});

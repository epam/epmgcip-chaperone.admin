import { NextApiRequest, NextApiResponse } from 'next';

import { CredentialsResponseBody } from '@/interfaces/CredentialsApi';

const okStatusCode = 200;

export default function handler(_: NextApiRequest, res: NextApiResponse<CredentialsResponseBody>) {
  const accessToken = process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN;
  const spaceId = process.env.CONTENTFUL_SPACE_ID;

  return res.status(okStatusCode).json({ accessToken, spaceId });
}

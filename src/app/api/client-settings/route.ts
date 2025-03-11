import { NextResponse } from 'next/server';

const okStatusCode = 200;

export function GET() {
  const accessToken = process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN;
  const spaceId = process.env.CONTENTFUL_SPACE_ID;

  return NextResponse.json({ accessToken, spaceId }, { status: okStatusCode });
}

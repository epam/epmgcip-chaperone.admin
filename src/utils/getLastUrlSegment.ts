import { headers } from 'next/headers';

export default function getLastUrlSegment() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';

  return pathname.substring(pathname.lastIndexOf('/') + 1);
}

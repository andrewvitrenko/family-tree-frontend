'use server';

import { cookies } from 'next/headers';

const getSsrCookies = async (): Promise<string> => {
  return (await cookies())
    .getAll()
    .map(({ name, value }) => `${name}=${value};`)
    .join(' ');
};

export default getSsrCookies;

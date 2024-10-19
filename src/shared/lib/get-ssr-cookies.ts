'use server';

import { cookies } from 'next/headers';

const getSsrCookies = (): string => {
  return cookies()
    .getAll()
    .map(({ name, value }) => `${name}=${value};`)
    .join(' ');
};

export default getSsrCookies;

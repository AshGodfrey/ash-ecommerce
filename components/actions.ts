'use server';

import { cookies } from 'next/headers';

export async function create(param: string) {
  cookies().set('product', param);
}

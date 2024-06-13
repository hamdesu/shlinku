import { type inferProcedureInput } from '@trpc/server';
import { expect, test } from 'vitest';

import saltAndHash from '@/src/shared/lib/salt-hash';
import { type AppRouter, createCaller } from '@/src/shared/server/trpc';
import { createInnerTRPCContext } from '@/src/shared/server/trpc/context';

test('user register router test', async () => {
  const ctx = await createInnerTRPCContext({ session: null });
  const caller = createCaller(ctx);

  const input: inferProcedureInput<AppRouter['user']['register']> = {
    name: 'ini user gans',
    email: 'hello@gmail.com',
    password: await saltAndHash('inipassword'),
  };

  const registerUser = await caller.user.register(input);
  expect({
    name: registerUser.name,
    email: registerUser.email,
    password: registerUser.password,
  }).toStrictEqual(input);
});

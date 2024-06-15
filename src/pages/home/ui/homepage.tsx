'use client';

import { Button } from '@nextui-org/react';

import { trpc } from '@/src/shared/utils';

export function HomePage() {
  const mutation = trpc.user.register.useMutation();
  return (
    <Button
      onClick={() =>
        mutation.mutate({
          name: 'ini user gans',
          email: 'hello1@gmail.com',
          password: 'inipassword',
        })
      }
    >
      Register
    </Button>
  );
}

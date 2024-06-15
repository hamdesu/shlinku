import { createTRPCReact } from '@trpc/react-query';

import { AppRouter } from '@/src/server/trpc';

export const trpc = createTRPCReact<AppRouter>({});

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter, createTRPCContext } from '@/src/server/trpc';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };

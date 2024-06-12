import * as tprcNext from '@trpc/server/adapters/next';

import { createTRPCContext } from '@/src/shared/server/trpc/context';
import { appRouter } from '@/src/shared/server/trpc/index';

export default tprcNext.createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});

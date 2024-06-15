import { createCallerFactory, createTRPCRouter } from './api/trpc';
import { userRouter } from './routers/user';

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export const createCaller = createCallerFactory(appRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

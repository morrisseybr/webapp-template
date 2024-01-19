import "server-only";

import simpleRouter from "./routes/simpleRouter";
import { createContext, router, t } from "./trpc";

export const trpcRouter = router({
  // create routes on path ./routes and add here to merge them
  simpleRouter,
});

// create a caller to be used on server side
export const trpcCaller = async () =>
  t.createCallerFactory(trpcRouter)

// export type definition of router to be used on client side
export type TRPCRouter = typeof trpcRouter;

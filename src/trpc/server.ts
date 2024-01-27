import "server-only";

import { router } from "./trpc";
import simpleRouter from "./routes/simpleRouter";

export const trpcRouter = router({
  // create routes on path ./routes and add here to merge them
  simpleRouter,
});
// export type definition of router to be used on client side
export type TRPCRouter = typeof trpcRouter;

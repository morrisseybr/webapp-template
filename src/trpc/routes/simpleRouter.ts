import { procedure, router } from "../trpc";
import { HelloInputSchema } from "./schemas/simpleSchemas";
import { SimpleController } from "@/controllers/simpleController";

const simpleRouter = router({
  hello: procedure.input(HelloInputSchema).query((opts) => {
    return new SimpleController().hello(opts.input.name);
  })
});

export default simpleRouter;
import { authjsHandler, authjsSessionMiddleware } from "./server/authjs-handler";

import { vikeHandler } from "./server/vike-handler";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createHandler, createMiddleware } from "@universal-middleware/hono";
import { trpcHandler } from "./server/trpc-handler";

const app = new Hono();

app.use(createMiddleware(authjsSessionMiddleware)());

/**
 * Auth.js route
 * @link {@see https://authjs.dev/getting-started/installation}
 **/
app.use("/api/auth/**", createHandler(authjsHandler)());

app.use("/api/trpc/*", createHandler(trpcHandler)("/api/trpc"));

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(vikeHandler)());

export const GET = handle(app);

export const POST = handle(app);

export default process.env.NODE_ENV === "production" ? undefined : app;

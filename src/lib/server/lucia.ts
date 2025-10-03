import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";

// expect error (see next section)
export const auth = lucia({
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit()
});

export type Auth = typeof auth;
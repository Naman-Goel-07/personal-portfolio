import { lazy, type ComponentType, type LazyExoticComponent } from "react";

/**
 * Every route except Home is split into its own chunk.
 *
 * Home stays eagerly imported: it is the landing page, so lazy-loading it
 * would just add a round trip before anything paints.
 */
const loaders = {
  "/about": () => import("@/pages/About"),
  "/projects": () => import("@/pages/Projects"),
  "/achievements": () => import("@/pages/Achievements"),
  "/now": () => import("@/pages/Now"),
  "/contact": () => import("@/pages/Contact"),
  "*": () => import("@/pages/NotFound"),
} as const;

type RoutePath = keyof typeof loaders;

export const Page = Object.fromEntries(
  Object.entries(loaders).map(([path, load]) => [path, lazy(load)]),
) as unknown as Record<RoutePath, LazyExoticComponent<ComponentType>>;

/**
 * Warm a route's chunk before the click lands. Called on nav link hover and
 * focus, so by the time the user actually navigates the code is usually
 * already parsed and the transition is instant.
 */
const warmed = new Set<string>();
export const prefetchRoute = (path: string) => {
  if (warmed.has(path)) return;
  const load = loaders[path as RoutePath];
  if (!load) return;
  warmed.add(path);
  void load();
};

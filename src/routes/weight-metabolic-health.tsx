import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/weight-metabolic-health")({
  beforeLoad: () => { throw redirect({ to: "/longevity-membership", replace: true }); },
});

import { useRequiredInject as u } from "../../composables/useRequiredInject.js";
function r() {
  const t = u("uluTour"), e = u("uluTourState");
  return { api: t, state: e };
}
export {
  r as useTour
};

/**
 * Throttles a function to run at most once per animation frame.
 * Prevents scroll jank by limiting React re-renders to 60fps.
 */
export function throttleWithRAF(callback) {
  let ticking = false;
  return function throttled() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
  };
}

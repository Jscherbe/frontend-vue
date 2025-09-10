let uid = 0;

export function generateUid(prefix = 'ulu-uid') {
  uid++;
  const id = `${ prefix }-${ uid }`;
  if (typeof document !== 'undefined' && document.getElementById(id)) {
    // In the unlikely event of a collision (e.g., SSR), recurse.
    return generateUid(prefix);
  }
  return id;
}

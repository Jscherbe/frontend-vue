let uidCount = 0;

export function newUid() {
  return `ulu-popovers-uid-${ ++uidCount }`;
}
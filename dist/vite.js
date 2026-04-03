const r = {
  video: ["src", "poster"],
  source: ["src"],
  img: ["src"],
  image: ["xlink:href", "href"],
  use: ["xlink:href", "href"]
}, s = {
  ...r,
  UluImage: ["src"],
  UluImageSource: ["srcset"],
  UluCard: ["imageSrc"]
};
export {
  s as uluTransformAssetUrls
};

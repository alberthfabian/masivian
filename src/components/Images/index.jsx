const images = {
  star: require('../../assets/Images/Star.png').default,
  starBN: require('../../assets/Images/StarBN.png').default,
  default: require('../../assets/Images/Star.png').default, 
}

export const getImg = (image) => {
  let img = images[image];
  if (img === undefined) {
      img = images.default
  }
  return img;
}

export default images;
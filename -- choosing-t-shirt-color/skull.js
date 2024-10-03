// Build an altering color function accepting a color argument / parameter
const altColor = (color) => {
  const tshirtImage = document.getElementById("t-shirt-img");
  tshirtImage.src = `imgs/${color}-t-shirt.svg`;
};

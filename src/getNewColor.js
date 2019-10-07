// FUNCTION TO FETCH NEW RANDOM COLOR

const getNewColor = () => {
  const url = 'http://www.colr.org/json/color/random';

  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data.new_color);
  });

};

export default getNewColor;

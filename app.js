// let sizeOfGrid = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div'); // we place the grid inside wrapper div
  wrapper.classList.add('wrapper');

  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 560 / amtOfGrids; //make width and height of boxes dynamic
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      //adding mouseenter listener to change background color
      gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = 'black';
      });

      row.appendChild(gridBox);
    }

    wrapper.appendChild(row); //we add the row inside the wrapper div.
  }
  container.appendChild(wrapper);
};

resetButton.addEventListener('click', () => {
  let userSize = Number(prompt('what dimensions do you want for the new grid'));

  while (userSize > 100) {
    userSize = Number(
      prompt('Pick a smaller number and make sure its 100 or less')
    );
  } //while loop ends

  const wrapper = document.querySelector('.wrapper');

  if (!wrapper) {
    createGrid(userSize);
  } else {
    wrapper.remove(); // this removes the entire wrapper div, so we create the new one after reset.
    createGrid(userSize);
  }
});

// createGrid(sizeOfGrid);

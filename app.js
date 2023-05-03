// let sizeOfGrid = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createGrid = (amtOfGrids) => {
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

    container.appendChild(row);
  }
};

resetButton.addEventListener('click', () => {
  let userSize = Number(prompt('what dimensions do you want for the new grid'));

  while (userSize > 100) {
    userSize = Number(
      prompt('Pick a smaller number and make sure its 100 or less')
    );
  } //while loop ends
  createGrid(userSize);
});

createGrid(sizeOfGrid);

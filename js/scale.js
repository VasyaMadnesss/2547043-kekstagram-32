const STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
const DEFAULT_VALUE = 100;

const scaleMinusButton = document.querySelector('.scale__control--smaller');
const scalePlusButton = document.querySelector('.scale__control--bigger');
const scaleValueField = document.querySelector('.scale__control--value');
const scaledImage = document.querySelector('.img-upload__preview > img');

const scaleDown = () => {
  const currentValue = parseInt(scaleValueField.value, 10);
  if (currentValue > MIN_VALUE) {
    scaleValueField.value = `${currentValue - STEP}%`;
    scaledImage.style.transform = `scale(${(currentValue - STEP) / MAX_VALUE})`;
  }
};

const scaleUp = () => {
  const currentValue = parseInt(scaleValueField.value, 10);
  if (currentValue < MAX_VALUE) {
    scaleValueField.value = `${currentValue + STEP}%`;
    scaledImage.style.transform = `scale(${(currentValue + STEP) / MAX_VALUE})`;
  }
};

const onScalePlusButtonClick = () => {
  scaleUp();
};

const onScaleMinusButtonClick = () => {
  scaleDown();
};

const addEventListeners = () => {
  scaleMinusButton.addEventListener('click', onScaleMinusButtonClick);
  scalePlusButton.addEventListener('click', onScalePlusButtonClick);
};

const removeEventListeners = () => {
  scaleMinusButton.removeEventListener('click', onScaleMinusButtonClick);
  scalePlusButton.removeEventListener('click', onScalePlusButtonClick);
};

const initializeScale = () => {
  scaleValueField.value = `${DEFAULT_VALUE}%`;
  scaledImage.style.transform = 'scale(1)';
  addEventListeners();
};

const destroyScale = () => {
  removeEventListeners();
};

export {initializeScale, destroyScale};

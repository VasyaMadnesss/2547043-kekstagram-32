const scaleMinusButton = document.querySelector('.scale__control--smaller');
const scalePlusButton = document.querySelector('.scale__control--bigger');
const scaleValueField = document.querySelector('.scale__control--value');
const scaledImage = document.querySelector('.img-upload__preview > img');

const STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
const DEFAULT_VALUE = 100;

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

const initializeScale = () => {
  scaleValueField.value = DEFAULT_VALUE;
  scaledImage.style.transform = 'scale(1)';
  scaleMinusButton.addEventListener('click', scaleDown);
  scalePlusButton.addEventListener('click', scaleUp);
};

const destroyScale = () => {
  scaleMinusButton.removeEventListener('click', scaleDown);
  scalePlusButton.removeEventListener('click', scaleUp);
};

export {initializeScale, destroyScale};

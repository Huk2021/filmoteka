import { Notify } from 'notiflix/build/notiflix-notify-aio';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    Notify.warning(`Set state error: ${error.message}`);
  }
};
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    Notify.warning(`Get state error: ${error.message}`);
    return undefined;
  }
};

export { save, load };

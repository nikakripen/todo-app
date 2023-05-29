import { saveToLocalStorage } from "./localStorageRepository";

const localStorageMiddleware = (api) => (next) => (action) => {
  const result = next(action);

  const state = api.getState();
  saveToLocalStorage(state);

  return result;
};

export default localStorageMiddleware;

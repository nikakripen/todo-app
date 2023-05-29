export const saveToLocalStorage = (value) => {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem('state', stringValue);
  } catch (err) {
    console.log(err);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const stringValue = localStorage.getItem('state');
    return JSON.parse(stringValue);
  } catch (err) {
    console.log(err);
  }
  
}


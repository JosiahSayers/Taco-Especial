function initializeObject(optionsArray, formDataObject) {
  optionsArray.forEach(option => {
    if (
      formDataObject[option.toLowerCase()] === null ||
      formDataObject[option.toLowerCase()] === undefined
    ) {
      formDataObject[option.toLowerCase()] = true;
    }
  });
}

export default initializeObject;
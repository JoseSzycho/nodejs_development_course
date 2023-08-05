const deleteNonConfigurable = (obj, property) => {
  if (!Object.keys(obj).includes(property))
    throw new Error(`Object do no not contains property ${property}.`);

  if (Object.getOwnPropertyDescriptor(obj, property).configurable === false)
    throw new Error("Cannot delete non-configurable property.");

  // If here, we can delete de property
  delete obj[property];
};

module.exports = { deleteNonConfigurable };

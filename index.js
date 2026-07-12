function combineUsers(...arrays) {
  const users = arrays.flat();

  return {
    users,
    merge_date: Date.today().toString("M/d/yyyy")
  };
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
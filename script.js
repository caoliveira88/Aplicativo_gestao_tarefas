const getLocal = () => JSON.parse(localStorage.getItem('taskList')) || []

const setLocal = localStge =>
  localStorage.setItem('taskList', JSON.stringify(localStge))


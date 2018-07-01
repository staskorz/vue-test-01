export default store => {
  setInterval(() => {
    store.commit("decreaseSatiety")
  }, 1000)
}

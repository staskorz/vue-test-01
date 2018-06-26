export default satiety => {
  if (satiety > 50) {
    return "Full"
  } else if (satiety > 25) {
    return "Hungry"
  } else if (satiety > 0) {
    return "Starving"
  } else {
    return "Dead"
  }
}

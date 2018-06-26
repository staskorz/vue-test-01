import petImageUrl from "./pet-image-url"

const PETS = [
  {
    name: "Harsh",
    type: "Lion",
    food: "Meat",
    starvationRate: 2,
  },
  {
    name: "Seelio",
    type: "See Lion",
    food: "Fish",
    starvationRate: 1.5,
  },
  {
    name: "Sharpy",
    type: "Vulture",
    food: "Fish",
    starvationRate: 2.5,
  },
  {
    name: "Teddy",
    type: "Bear",
    food: "Meat",
    starvationRate: 1,
  },
  {
    name: "Bambi",
    type: "Mule Deer",
    food: "Grass",
    starvationRate: 3,
  },
]

export default PETS.map((pet, index) => ({
  ...pet,
  satiety: 100,
  imageUrl: petImageUrl({ id: index, width: 100, height: 100 }),
}))

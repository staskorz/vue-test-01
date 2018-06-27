import Vue from "vue"
import Pet from "./Pet"

describe("Pet.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Pet)

    const vm = new Constructor({
      propsData: {
        name: "Name01",
        imageUrl: "http://image.com/image.jpg",
        satiety: 70,
      },
    }).$mount()

    expect(
      vm.$el.querySelector("[data-test='name']").textContent.trim(),
    ).toEqual("Name01")

    expect(vm.$el.querySelector("[data-test='image']").src).toEqual(
      "http://image.com/image.jpg",
    )

    expect(
      vm.$el.querySelector("[data-test='hunger-status']").textContent.trim(),
    ).toEqual("Full")
  })
})

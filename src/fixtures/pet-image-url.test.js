/* eslint-env jest */

import petImageUrl from "./pet-image-url"

describe("pet-image-url", () => {
  it("correctly returns 2nd image URL 200x100", () => {
    expect(petImageUrl({ id: 1, width: 200, height: 100 })).toBe(
      "//picsum.photos/200/100?image=1084",
    )
  })

  it("correctly returns 22nd image URL 300x200", () => {
    expect(petImageUrl({ id: 22, width: 300, height: 200 })).toBe(
      "//picsum.photos/300/200?image=1020",
    )
  })
})

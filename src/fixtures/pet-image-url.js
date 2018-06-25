const PET_IMAGE_IDS = [
  1074,
  1084,
  1024,
  1020,
  1003,
  837,
  790,
  783,
  718,
  659,
  593,
  582,
  577,
  433,
  237,
  219,
  200,
  169,
  50,
]

const NUM_PET_IMAGES = PET_IMAGE_IDS.length

const getRollingId = index => index % NUM_PET_IMAGES

export default ({ id, width, height }) =>
  `//picsum.photos/${width}/${height}?image=${PET_IMAGE_IDS[getRollingId(id)]}`

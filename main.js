const video = document.getElementById("video")
const plaButton = document.getElementById("playpause")
const playIcon = document.querySelector(".playIcon")
const pauseIcon = document.querySelector(".pauseIcon")

video.addEventListener("mouseout", () => {
  playIcon.classList.add("hidden")
  pauseIcon.classList.add("hidden")
})

video.addEventListener("mouseover", () => {
  if (video.paused) {
    playIcon.classList.remove("hidden")
    pauseIcon.classList.add("hidden")
  } else {
    pauseIcon.classList.remove("hidden")
    playIcon.classList.add("hidden")
  }
})

video.addEventListener("click", () => {
  if (video.paused) {
    playIcon.classList.remove("hidden")
    pauseIcon.classList.add("hidden")
    video.play()
  } else {
    pauseIcon.classList.remove("hidden")
    playIcon.classList.add("hidden")
    video.pause()
  }
})

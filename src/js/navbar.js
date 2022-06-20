const bar = document.getElementById("status")
const statusBar = () => {
  currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100)
  bar.style.width = currentScroll + "%"
}
window.addEventListener("scroll", statusBar)
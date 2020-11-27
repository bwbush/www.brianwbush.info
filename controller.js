
function showArt(name) {
  overlay.style.display = "flex"
  overlay_image.src = "art/" + name + ".png"
  overlay_text.innerHTML = document.getElementById(name).innerHTML
}

function showGallery(name) {
  overlay.style.display = "flex"
  overlay_image.src = "gallery/" + name + ".png"
  overlay_text.innerHTML = document.getElementById(name).innerHTML
}

function showImage(image) {
  overlay.style.display = "flex"
  overlay_image.src = image.src
  overlay_text.innerText = image.alt.slice(0, -4)
}

function hideOverlay() {
  overlay.style.display = "none"
  const x = window.scrollX
  const y = window.scrollY
  main.focus()
  window.scrollTo(x, y)
}

function setup() {
  main.focus()
  window.scrollTo(0, 0)
}

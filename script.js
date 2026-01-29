const target = new Date()
target.setDate(target.getDate() + 14)

function update() {
  const now = new Date()
  const diff = target - now

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "Launching Soon"
    return
  }

  const d = Math.floor(diff / 86400000)
  const h = Math.floor(diff % 86400000 / 3600000)
  const m = Math.floor(diff % 3600000 / 60000)

  document.getElementById("countdown").innerText = d + "d " + h + "h " + m + "m"
}

setInterval(update, 1000)
update()

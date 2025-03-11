
const countText = prompt("Antal paragrafer")
const count = Math.min(10, Number(countText))

for (let i = 1; i <= count; ++i) {
    const p = document.createElement('p')
    p.innerText = `Paragraf ${i}`

    document.body.append(p)
}

// document.body.innerText = "Hejsan"


function doStuff(foo, bar) {
    for (let i = 0; i < foo; ++i) {
        const p = document.createElement('p')
        p.innerText = bar
        document.body.append(p)
    }
}

doStuff(4, "Hejsan")

doStuff = (a, b) => console.log(a, b)

doStuff(4, "Hejsan")


let doOtherStuff = function (a, b) {
    return a + b
}

// alert(doOtherStuff(2, 3))

let doMoreStuff = (a, b) => a + b

alert(doMoreStuff(3,4))

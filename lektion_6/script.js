console.log("Hello, World!")


for (let i = 0; i < 5; ++i) {
    const p = document.createElement("p");
    p.innerText = `Lite text som är fin, gång nummer ${i}`;
    
    document.body.appendChild(p);
}

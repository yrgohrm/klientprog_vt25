function foo() {
    for (let i = 0; i < 5; ++i) {
        console.log("hello");
    }
}

async function getJoke() {
    const resp = await fetch("https://icanhazdadjoke.com/",
            {
                headers: {
                    "Accept": "application/json",
                    "User-agent": "yrgo",
                }
            });

    if (resp.ok) {

        const data = await resp.json();

        console.log(data.joke);
    }
}

getJoke()


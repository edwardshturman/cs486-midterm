async function hello() {
    const response = await fetch("http://127.0.0.1:8080/").then((res) => res.json())
    console.log(response)
    return response
}

hello()

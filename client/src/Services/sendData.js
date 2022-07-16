export const sendData = async (target, value) => {
    let output = '';
    console.log(value)
    await fetch(`http://localhost:5000/api/${target}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
    }).then((res) => res.json())
        .then((data) => { output = data })
    return output
}

export const getData = async (target) => {
    let output = '';
    await fetch(`http://localhost:5000/api/${target}`,{
        method: 'get',
        data: 'json',
    }).then((res) => res.json())
        .then((data) => { output = data})
    return output
}

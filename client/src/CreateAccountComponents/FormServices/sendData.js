const sendData = async (target, value) => {
    let output = '';
    await fetch(`http://localhost:5000/api/${target}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)
    }).then((res) => res.json())
        .then((data) => { console.log(data); output = data})
    return output
}

export default sendData
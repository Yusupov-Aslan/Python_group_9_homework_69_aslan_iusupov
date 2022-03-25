function calculate(el) {
    let url = `/api/v1/${el.dataset.action}/`;
    console.log(url)
    let a = document.getElementById('numA').value
    let b = document.getElementById('numB').value
    let data = JSON.stringify({"A": parseInt(a), "B": parseInt(b),})
    let result_div = document.getElementById("result")
    let headers = new Headers();
    headers.append("X-CSRFToken", csrftoken);
    fetch(url, {"method": "POST", "headers": headers, "body": data})
        .then(res => res.json())
        .then(res => {
            if ("answer" in res) {
                result_div.innerText = `Result:${res.answer}`
            } else {
                result_div.innerText = `Error:${res.error}`;
            }
        })
        .catch(function (err) {
            console.warn('Something went wrong.', err);
        });
}
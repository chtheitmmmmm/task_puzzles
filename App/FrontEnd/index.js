const loginForm = document.forms.namedItem('login')
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let data = new FormData(loginForm)
    let xhr = new XMLHttpRequest();
    xhr.open('POST', loginForm.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        document.documentElement.innerHTML = xhr.responseText
    };
    data = JSON.stringify({
        account: data.get('account'),
        password: data.get('password')
    });
    xhr.send(data);
})
const button = document.getElementById('redirect')

button.addEventListener('click', function() {

    setTimeout(function() {
        window.location.href = "./valentines-card/dist/index.html"
    }, 1000)

})
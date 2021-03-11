links = document.querySelectorAll('nav a')
let path = window.location.pathname;
console.log(path)

for (let link of links) {
    let attr = link.getAttribute('href');
    if (path == attr) {
        link.classList.add('active');
    }
}
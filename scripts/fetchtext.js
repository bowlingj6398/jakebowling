document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const fileToLoad = textContainer.getAttribute('data-file');

    fetch(fileToLoad)
        .then(response => response.text())
        .then(data => {
            textContainer.innerText = data;
        })
        .catch(error => console.error('unable to fetch:', error));
});

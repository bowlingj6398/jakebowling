// wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    //define the html container
    const textContainer = document.getElementById('text-container');
    //determine which text file should be fetched based on html argument
    const fileToLoad = textContainer.getAttribute('data-file');

    //grab the text file and make it the text inside the container
    fetch(fileToLoad)
        .then(response => response.text())
        .then(data => {
            textContainer.innerText = data;
        })

        //if it doesn't work then it'll print a reason in the developer console
        .catch(error => console.error('unable to fetch:', error));
});

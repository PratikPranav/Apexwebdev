// const jokeListContainer = document.getElementById('joke-list');

// // Fetch the JSON content from the GitHub API
// fetch('https://api.github.com/repos/15Dkatz/official_joke_api/contents/jokes/index.json')
//     .then(response => response.json())
//     .then(data => {
//         const content = atob(data.content); // Decode the base64 content
//         const jokes = JSON.parse(content);  // Parse the JSON

//         // Loop through the jokes and create an HTML structure to display them
//         jokes.forEach((joke, index) => {
//             const jokeItem = document.createElement('div');
//             jokeItem.innerHTML = `<strong>Joke ${index + 1}</strong>: ${joke.setup} - ${joke.punchline}`;
//             jokeItem.style.marginBottom = '10px';
//             jokeListContainer.appendChild(jokeItem);
//         });
//     })
//     .catch(error => {
//         jokeListContainer.innerHTML = "Failed to load jokes. Please try again later.";
//         console.error('Error fetching jokes:', error);
//     });






    const jokeListContainer = document.getElementById('jokeBox');
        const nextBtn = document.getElementById('jokeBtn');
        let jokes = [];
        let currentIndex = 0;
        const jokesPerPage = 5;

        // Fetch the JSON content from the GitHub API
        fetch('https://api.github.com/repos/15Dkatz/official_joke_api/contents/jokes/index.json')
            .then(response => response.json())
            .then(data => {
                const content = atob(data.content); // Decode the base64 content
                jokes = JSON.parse(content);  // Parse the JSON
                displayJokes(currentIndex);
            })
            .catch(error => {
                jokeListContainer.innerHTML = "Failed to load jokes. Please try again later.";
                console.error('Error fetching jokes:', error);
            });

        // Function to display jokes from the currentIndex
        function displayJokes(startIndex) {
            jokeListContainer.innerHTML = ""; // Clear the current jokes
            for (let i = startIndex; i < startIndex + jokesPerPage && i < jokes.length; i++) {
                const jokeItem = document.createElement('div');
                jokeItem.innerHTML = `<strong>Joke ${i + 1}</strong>: ${jokes[i].setup} - ${jokes[i].punchline}`;
                jokeItem.style.marginBottom = '10px';
                jokeListContainer.appendChild(jokeItem);
            }
        }

        // Event listener for the "Next" button
        nextBtn.addEventListener('click', () => {
            currentIndex += jokesPerPage;
            if (currentIndex >= jokes.length) {
                currentIndex = 0; // Start over if we reach the end
            }
            displayJokes(currentIndex);
        });
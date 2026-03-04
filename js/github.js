const username = "hobbyiot";
const repoContainer = document.getElementById("repo-list");

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="${repo.html_url}" target="_blank" class="button">
                    View Repository
                </a>
            `;

            repoContainer.appendChild(card);
        });
    })
    .catch(error => {
        repoContainer.innerHTML = "<p>Unable to load repositories.</p>";
    });

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index-styles.css';

export default function Home() {
    useEffect(() => {
        const username = "JKaizenn";
        const repoList = document.getElementById("repo-list");

        fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=3`)
            .then((response) => {
                console.log("API Response:", response); // Debugging line
                if (!response.ok) {
                    return response.json().then((error) => {
                        throw new Error(
                            `GitHub API error: ${response.status} ${response.statusText} - ${error.message || error}`
                        );
                    });
                }
                return response.json();
            })
            .then((data) => {
                console.log("API Data:", data); // Debugging line
                if (Array.isArray(data)) {
                    data.forEach((repo) => {
                        const listItem = document.createElement("li");
                        listItem.innerHTML = `
                            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                        `;
                        repoList.appendChild(listItem);
                    });
                } else {
                    repoList.innerHTML = "<li>Error: Unable to fetch repositories. Data is not an array.</li>";
                }
            })
            .catch((error) => {
                console.error("Error fetching repositories:", error);
                repoList.innerHTML = `<li>Error: Unable to fetch repositories. ${error.message}</li>`;
            });
    }, []);

    return (
        <main>
            <section className="welcome">
                <h2>Explore My Work</h2>
                <p>Discover my projects, skills, and experience. Navigate through the links above to learn more about me and my work.</p>
                <div className="arrows">
                    <div className="arrow about">
                        <Link to="/about">&#8594; About Me</Link>
                    </div>
                    <div className="arrow siteplan">
                        <Link to="/siteplan">&#8594; Site Plan</Link>
                    </div>
                </div>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <ul id="project-list">
                    <li>
                        <h3><a href="https://jkaizenn.github.io/wdd131/index.html" target="_blank" rel="noopener noreferrer">Homepage Assignment</a></h3>
                        <p>This project involves creating a basic homepage using HTML and CSS to demonstrate fundamental web development skills.</p>
                    </li>
                    <li>
                        <h3><a href="https://jkaizenn.github.io/wdd131/temples.html" target="_blank" rel="noopener noreferrer">Temples Assignment</a></h3>
                        <p>This assignment focuses on creating a page to display information about temples, incorporating HTML, CSS, and JavaScript.</p>
                    </li>
                    <li>
                        <h3><a href="https://jkaizenn.github.io/wdd131/filtered-temples.html" target="_blank" rel="noopener noreferrer">Filtered Temples Assignment</a></h3>
                        <p>This project extends the temples assignment by adding filtering functionality to the temple data, using JavaScript to create an interactive user experience.</p>
                    </li>
                </ul>
            </section>
            <section className="project-images">
                <h2>Project Images</h2>
                <div className="image-container">
                    <img src="images/Homepage.png" alt="Homepage" loading="lazy" />
                    <img src="images/Temples.png" alt="Temples" loading="lazy" />
                    <img src="images/Filtered-Temples.png" alt="Filtered Temples" loading="lazy" />
                </div>
            </section>
            <section className="github-repos">
                <h2>GitHub Repositories</h2>
                <ul id="repo-list"></ul>
            </section>
        </main>
    );
}

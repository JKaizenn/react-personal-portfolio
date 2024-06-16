import React, { useEffect } from 'react';
import '../styles/about-styles.css';

export default function About() {
    useEffect(() => {
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Form submitted successfully!");
                form.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }, []);

    return (
            <main>
                <section className="profile-image">
                    <h3>Profile Picture:</h3>
                    <div className="image-container">
                        <img src={`${process.env.PUBLIC_URL}/images/Profile_Picture.JPG`} alt="Jessen Profile" loading="lazy" />
                    </div>
                </section>

                <section className="intro">
                    <h2>Welcome to My Portfolio</h2>
                    <p>Hello! I'm Jessen Forbush, a passionate software developer with a love for creating innovative solutions and learning new technologies.</p>
                </section>

                <section className="details">
                    <div className="card">
                        <h3>Background</h3>
                        <p>I have a background in computer science and have worked on various projects ranging from web development to software engineering. My journey started with a simple interest in coding, which has now become a fulfilling career.</p>
                    </div>
                    <div className="card">
                        <h3>Skills</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Hobbies</h3>
                        <p>When I'm not coding, I enjoy hiking, reading, and exploring new places. I also love playing video games and working on personal tech projects.</p>
                    </div>
                </section>

                <section className="contact">
                    <h2>Contact Me</h2>
                    <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
                    <ul>
                        <li>Email: <a href="mailto:jessenforbush@gmail.com">jessenforbush@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/jessen-forbush/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jessen-forbush</a></li>
                    </ul>
                </section>

                <section className="form-section">
                    <h2>Contact Form</h2>
                    <form id="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
    );
}

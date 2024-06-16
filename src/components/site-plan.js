import React from 'react';
import '../styles/siteplan-styles.css';

export default function SitePlan() {
    return (
            <main>
                <section id="site-name">
                    <h2>Site Name</h2>
                    <p><strong>Selected Name:</strong> Jessen Forbush's Personal Portfolio</p>
                    <p><strong>Reason:</strong> This name reflects the focus on showcasing software development projects and skills, highlighting the craftsmanship involved in coding.</p>
                </section>

                <section id="site-purpose">
                    <h2>Site Purpose</h2>
                    <p>The site serves as a personal portfolio to display various software projects, providing details on project features, technologies used, and the development process. It will include downloadable resumes, a contact form, and links to relevant social media profiles.</p>
                </section>

                <section id="scenarios">
                    <h2>Scenarios</h2>
                    <p><strong>Example Scenarios:</strong></p>
                    <ul>
                        <li>What projects has the developer worked on using JavaScript?</li>
                        <li>How can I contact the developer for a potential job opportunity?</li>
                    </ul>
                </section>

                <section id="color-schema">
                    <h2>Color Schema</h2>
                    <p><strong>Primary Color:</strong> #3a506b (used for headings and links)</p>
                    <p><strong>Accent Color:</strong> #314157 (used for buttons and highlights)</p>
                    <p>These colors will be used consistently to create a professional and cohesive look across the website.</p>
                </section>

                <section id="typography">
                    <h2>Typography</h2>
                    <p><strong>Primary Font:</strong> Arial, sans-serif (used for body text)</p>
                    <p><strong>Secondary Font:</strong> Helvetica, sans-serif (used for headings)</p>
                </section>

                <section id="wireframe">
                    <h2>Wireframe</h2>
                    <div className="wireframe-container">
                        <div className="wireframe-item">
                            <h3>Mobile View</h3>
                            <img src={`${process.env.PUBLIC_URL}/images/wireframe-portrait.jpg`} alt="Mobile Wireframe" loading="lazy" />
                        </div>
                        <div className="wireframe-item">
                            <h3>Desktop View</h3>
                            <img src={`${process.env.PUBLIC_URL}/images/wireframe-landscape.jpg`} alt="Desktop Wireframe" loading="lazy" />
                        </div>
                    </div>
                </section>
            </main>
    );
}

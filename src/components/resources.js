import React from 'react';
import '../styles/resources-styles.css';

export default function Resources() {
    return (
            <main>
                <section>
                    <h2>Resources</h2>
                    <div className="resource">
                        <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/W3-Schools.png`} alt="W3 Schools" loading="lazy" />
                        </a>
                    </div>
                    <div className="resource">
                        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/stack-overflow.png`} alt="Stack Overflow" loading="lazy" />
                        </a>
                    </div>
                    <div className="resource">
                        <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/code-academy.png`} alt="Codecademy" loading="lazy" />
                        </a>
                    </div>
                </section>
            </main>
    );
}

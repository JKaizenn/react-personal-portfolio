import React, { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        const lastUpdated = document.getElementById("last-updated");
        const lastModified = document.getElementById("last-modified");

        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(document.lastModified);

        if (lastUpdated) {
            lastUpdated.textContent = date.toLocaleDateString("en-US", options);
        }
        if (lastModified) {
            lastModified.textContent = date.toLocaleDateString("en-US", options);
        }
    }, []); // Empty dependency array means this runs once after the initial render

    return (
        <footer>
            <p>&copy; 2024 Jessen Forbush Portfolio</p>
            <p><a href="resources.html">Resources & Attributions</a></p>
            <p>Last Updated: <span id="last-updated"></span></p>
            <p>Last Modified: <span id="last-modified"></span></p>
        </footer>
    );
}

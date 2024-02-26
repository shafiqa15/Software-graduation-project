import { useEffect, useState } from "react";
import Translation from './translation.json';

function Translate() {
    const [language, setLanguage] = useState(() => localStorage.getItem("selectedLanguage") || "hindi");
    const [content, setContent] = useState({});

    useEffect(() => {
        localStorage.setItem("selectedLanguage", language);

        // Assuming a valid structure in Translation.json
        const selectedContent = Translation[language] || {}; // Fallback to an empty object if not found
        setContent(selectedContent);
    }, [language]);

    return (
        <div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="english">English</option>
                <option value="tamil">Tamil</option>
                <option value="hindi">Hindi</option>
            </select>

            {/* Conditionally rendering content to handle undefined cases */}
            <h2>{content?.Title || 'Title not found'}</h2>
            <span>{content?.Description || 'Description not found'}</span>
        </div>
    );
}

export default Translate;

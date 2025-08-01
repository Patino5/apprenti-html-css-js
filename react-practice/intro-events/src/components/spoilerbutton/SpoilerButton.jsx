import './SpoilerButton.css';

function SpoilerButton() {
    function handleSpoilerClick() {
        const spoilerElement = document.getElementById('spoiler');
        const spoilerBtn = document.getElementById('spoilerBtn');
        if (spoilerBtn.innerText === "Show Spoiler") {
            spoilerBtn.innerText = "Hide Spoiler"
            spoilerElement.style.display = 'block';
        } else {
            spoilerBtn.innerText = "Show Spoiler"
            spoilerElement.style.display = 'none';
        } 
    }

    return (
        <div className="spoiler-container">
            <p>The movie's plot twist is...</p>
            <button id="spoilerBtn" className="spoiler-button" onClick={handleSpoilerClick}>Show Spoiler</button>
            <p id="spoiler" className="spoiler-text" style={{ display: 'none' }}>
                Kaiser Soze is Verbal Kent!
            </p>
        </div>
    );
};

export default SpoilerButton;
document.addEventListener('DOMContentLoaded', function() {
    const lyricsText = [
        "oh kami yo..",
        "kisama o kirikizande",
        "bu ta no esa ni demo site aru zo",
        "kuso tare kami ni",
        "ware ga senzo wa funi ari da",
        "ima koso kami no shigoto katawangari site dearo de wanai ka",
        "warewa shouhe no aru uchi",
        "ware ware ga kami no totte kawaru no da",
        "gouman na kami to yara wa",
        "sitsugyosasete yaru"
    ];

    const delayTimes = [1000, 4000, 4000, 3000, 3000, 3000, 3000, 5000, 2000, 3000]; 

    const lyricsContainer = document.getElementById('lyrics');
    let cumulativeDelay = 0;

    function showLyrics() {
        lyricsText.forEach((line, index) => {
            setTimeout(() => {
                // Clear previous text
                lyricsContainer.innerHTML = '';

                // Create new text element
                const lineElement = document.createElement('div');
                lineElement.textContent = line;
                lineElement.classList.add('highlight');
                lyricsContainer.appendChild(lineElement);

                // Animate lyrics
                animateLyrics(lineElement);
            }, cumulativeDelay);
            cumulativeDelay += delayTimes[index];
        });
    }

    function animateLyrics(element) {
        element.style.animation = 'fadeIn 2s forwards, zoomIn 0.6s forwards'; 
    }

    showLyrics();
});
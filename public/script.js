document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('categorySearch');
    let allTalks = [];

    // Fetch talks from the server
    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            allTalks = data;
            renderSchedule(allTalks);
        })
        .catch(error => {
            console.error('Error fetching talks:', error);
            scheduleContainer.innerHTML = '<div class="error">Failed to load schedule. Please try again later.</div>';
        });

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTalks = allTalks.filter(talk => 
            talk.categories.some(cat => cat.toLowerCase().includes(searchTerm)) ||
            talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm))
        );
        renderSchedule(filteredTalks, searchTerm);
    });

    function renderSchedule(talks, searchTerm = '') {
        if (talks.length === 0) {
            scheduleContainer.innerHTML = '<div class="loading">No talks found for this category.</div>';
            return;
        }

        scheduleContainer.innerHTML = '';

        talks.forEach((talk, index) => {
            const talkEl = document.createElement('div');
            talkEl.className = 'talk-card';
            talkEl.innerHTML = `
                <div class="talk-header">
                    <span class="time">${talk.startTime} - ${talk.endTime}</span>
                    <div class="categories">
                        ${talk.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                </div>
                <h2 class="talk-title">${talk.title}</h2>
                <div class="speakers">By ${talk.speakers.join(' & ')}</div>
                <p class="description">${talk.description}</p>
            `;
            scheduleContainer.appendChild(talkEl);

            // Add Lunch or Break after talks (if not searching)
            if (searchTerm === '') {
                if (talk.id === 3) {
                    const lunchEl = document.createElement('div');
                    lunchEl.className = 'talk-card lunch-card';
                    lunchEl.innerHTML = `
                        <span class="time">13:20 - 14:20</span>
                        <h2>Lunch Break 🍱</h2>
                        <p>Refuel and network with fellow attendees.</p>
                    `;
                    scheduleContainer.appendChild(lunchEl);
                } else if (index < talks.length - 1) {
                    const breakEl = document.createElement('div');
                    breakEl.className = 'break-card';
                    breakEl.innerText = '10 Minute Transition';
                    scheduleContainer.appendChild(breakEl);
                }
            }
        });
    }
});

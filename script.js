const poses = [
    { name: 'Mountain Pose', url: 'mountain-pose', difficulty: 'beginner', sanskritName: 'Tadasana' },
    { name: 'Downward Dog', url: 'downward-dog', difficulty: 'beginner', sanskritName: 'Adho Mukha Svanasana' },
    { name: "Childs Pose", url: 'childs-pose', difficulty: 'beginner', sanskritName: 'Balasana' },
    { name: 'Warrior 1', url: 'warrior-1', difficulty: 'intermediate', sanskritName: 'Virabhadrasana I' },
    { name: 'Warrior 2', url: 'warrior-2', difficulty: 'intermediate', sanskritName: 'Virabhadrasana II' },
    { name: 'Tree Pose', url: 'tree-pose', difficulty: 'intermediate', sanskritName: 'Vrksasana' },
    { name: 'Crow Pose', url: 'crow-pose', difficulty: 'advanced', sanskritName: 'Bakasana' },
    { name: 'Headstand', url: 'headstand', difficulty: 'advanced', sanskritName: 'Sirsasana' }
];

function populatePoses() {
    const posesList = document.getElementById('poses-list');
    poses.forEach(pose => {
        const div = document.createElement('div');
        div.className = 'pose-item';
        div.innerHTML = `
            <h3><a href="poses/${pose.url}.html">${pose.name}</a></h3>
            <p><em>${pose.sanskritName}</em></p>
            <p>Difficulty: ${pose.difficulty}</p>
        `;
        posesList.appendChild(div);
    });
}

function handleDifficultyFilter() {
    const select = document.getElementById('difficulty-select');
    select.addEventListener('change', () => {
        const difficulty = select.value;
        const routineCards = document.querySelectorAll('.routine-card');
        
        routineCards.forEach(card => {
            if (difficulty === 'all' || card.dataset.difficulty === difficulty) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

let timerInterval;

function startTimer() {
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Get minutes from input
    const minutes = document.getElementById('minutes-input').value;
    
    // Validate input
    if (minutes <= 0 || minutes > 60) {
        alert('Please enter a time between 1 and 60 minutes');
        return;
    }

    // Convert minutes to seconds
    let timeLeft = minutes * 60;
    
    // Update timer immediately and then every second
    updateTimerDisplay(timeLeft);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Timer completed!');
            document.getElementById('timer-display').textContent = '00:00';
        } else {
            updateTimerDisplay(timeLeft);
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    // Add leading zeros if needed
    const display = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = display;
}

document.addEventListener('DOMContentLoaded', () => {
    populatePoses();
    handleDifficultyFilter();
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
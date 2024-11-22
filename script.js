const poses = [
    { name: 'Mountain Pose', difficulty: 'beginner', sanskritName: 'Tadasana' },
    { name: 'Downward Dog', difficulty: 'beginner', sanskritName: 'Adho Mukha Svanasana' },
    { name: "Child's Pose", difficulty: 'beginner', sanskritName: 'Balasana' },
    { name: 'Warrior I', difficulty: 'intermediate', sanskritName: 'Virabhadrasana I' },
    { name: 'Warrior II', difficulty: 'intermediate', sanskritName: 'Virabhadrasana II' },
    { name: 'Tree Pose', difficulty: 'intermediate', sanskritName: 'Vrksasana' },
    { name: 'Crow Pose', difficulty: 'advanced', sanskritName: 'Bakasana' },
    { name: 'Headstand', difficulty: 'advanced', sanskritName: 'Sirsasana' }
];

function populatePoses() {
    const posesList = document.getElementById('poses-list');
    poses.forEach(pose => {
        const div = document.createElement('div');
        div.className = 'pose-item';
        div.innerHTML = `
            <h3>${pose.name}</h3>
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
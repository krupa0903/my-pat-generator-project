document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "You love the serene landscapes of mountains and parks.",
        "Winter is your favorite season, and you enjoy activities like skiing and snowboarding.",
        "At 18, you're full of energy and curiosity, always ready for new adventures."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('funFact').textContent = randomFact;
});

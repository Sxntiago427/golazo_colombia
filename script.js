document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.navbar nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active'); // Close mobile menu after click
                }
            }
        });
    });
});

// Dummy data for team matches
const teamMatchData = {
    'Atlético Nacional': [
        {
            "text": "Atlético Nacional 2-1 Águilas Doradas (Liga BetPlay – 08 Nov 2025)",
            "result": "win",
            "details": {
                "date": "08 Nov 2025",
                "time": null,
                "stadium": null,
                "competition": "Liga BetPlay",
                "homeTeam": "Atlético Nacional",
                "awayTeam": "Águilas Doradas",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": null,
                "awayLogo": null,
                "lineups": null,
                "goals": null,
                "events": null,
                "playerRatings": null
            }
        },
        {
            "text": "Atlético Nacional 4-1 América de Cali (Copa Colombia – 02 Nov 2025)",
            "result": "win",
            "details": {
                "date": "02 Nov 2025",
                "time": null,
                "stadium": null,
                "competition": "Copa Colombia",
                "homeTeam": "Atlético Nacional",
                "awayTeam": "América de Cali",
                "homeScore": 4,
                "awayScore": 1,
                "homeLogo": null,
                "awayLogo": null,
                "lineups": null,
                "goals": null,
                "events": null,
                "playerRatings": null
            }
        },
        {
            "text": "Llaneros 0-3 Atlético Nacional (Liga BetPlay – 30 Oct 2025)",
            "result": "win",
            "details": {
                "date": "30 Oct 2025",
                "time": null,
                "stadium": null,
                "competition": "Liga BetPlay",
                "homeTeam": "Llaneros",
                "awayTeam": "Atlético Nacional",
                "homeScore": 0,
                "awayScore": 3,
                "homeLogo": null,
                "awayLogo": null,
                "lineups": null,
                "goals": null,
                "events": null,
                "playerRatings": null
            }
        },
        {
            "text": "Atlético Nacional 5-2 Independiente Medellín (Liga BetPlay – 26 Oct 2025)",
            "result": "win",
            "details": {
                "date": "26 Oct 2025",
                "time": null,
                "stadium": null,
                "competition": "Liga BetPlay",
                "homeTeam": "Atlético Nacional",
                "awayTeam": "Independiente Medellín",
                "homeScore": 5,
                "awayScore": 2,
                "homeLogo": null,
                "awayLogo": null,
                "lineups": null,
                "goals": null,
                "events": null,
                "playerRatings": null
            }
        },
        {
            "text": "Atlético Nacional 2-0 Once Caldas (Copa Colombia – 22 Oct 2025)",
            "result": "win",
            "details": {
                "date": "22 Oct 2025",
                "time": null,
                "stadium": null,
                "competition": "Copa Colombia",
                "homeTeam": "Atlético Nacional",
                "awayTeam": "Once Caldas",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": null,
                "awayLogo": null,
                "lineups": null,
                "goals": null,
                "events": null,
                "playerRatings": null
            }
        }
    ],
    'Millonarios FC': [
        {
            text: 'Envigado 1–1 Millonarios (Liga BetPlay - 07 Nov 2025)',
            result: 'draw',
        },
        {
            text: 'Millonarios 0–0 Once Caldas (Liga BetPlay - 30 Oct 2025)',
            result: 'draw',
        },
        {
            text: 'Independiente Santa Fe 0–1 Millonarios (Liga BetPlay - 26 Oct 2025)',
            result: 'win',
        },
        {
            text: 'Millonarios 1–1 Bucaramanga (Liga BetPlay - 22 Oct 2025)',
            result: 'draw',
        },
        {
            text: 'Pereira 3–2 Millonarios (Liga BetPlay - 16 Oct 2025)',
            result: 'loss',
        }
    ],
    'América de Cali': [
        { text: 'América de Cali 3–0 Unión Magdalena (Liga BetPlay - [Fecha del partido])', result: 'win' },
        { text: 'Boyacá Chicó 0–2 América de Cali (Liga BetPlay - [Fecha del partido])', result: 'win' },
        { text: 'Nacional 4–1 América de Cali (Liga BetPlay - [Fecha del partido])', result: 'loss' },
        { text: 'América de Cali 1–1 Deportivo Cali (Liga BetPlay - [Fecha del partido])', result: 'draw' },
        { text: 'América de Cali 3–0 Alianza FC (Liga BetPlay - [Fecha del partido])', result: 'win' }
    ],
    'Deportes Tolima': [
        { text: 'Llaneros 1 - 0 Deportes Tolima (Liga BetPlay - 05 Nov 2025)', result: 'loss' },
        { text: 'Deportes Tolima 2 - 2 Atlético Nacional (Liga BetPlay - 01 Nov 2025)', result: 'draw' },
        { text: 'Alianza FC 0 - 1 Deportes Tolima (Liga BetPlay - 28 Oct 2025)', result: 'win' },
        { text: 'Deportes Tolima 2 - 1 Deportivo Cali (Liga BetPlay - 25 Oct 2025)', result: 'win' },
        { text: 'Boyacá Chicó 0 - 0 Deportes Tolima (Liga BetPlay - 22 Oct 2025)', result: 'draw' }
    ],
    'Bucaramanga': [
        { text: 'Atlético Bucaramanga 3 - 1 Alianza Valledupar (Liga BetPlay - 05 Nov 2025)', result: 'win' },
        { text: 'Bucaramanga 1 - 0 Medellín (Liga BetPlay - 01 Nov 2025)', result: 'win' },
        { text: 'Fortaleza 1 - 1 Bucaramanga (Liga BetPlay - 28 Oct 2025)', result: 'draw' },
        { text: 'Bucaramanga 2 - 0 Llaneros (Liga BetPlay - 25 Oct 2025)', result: 'win' },
        { text: 'Águilas Doradas 0 - 0 Bucaramanga (Liga BetPlay - 22 Oct 2025)', result: 'draw' }
    ],
    'Independiente Medellín': [
        { text: 'Independiente Medellín 1 - 0 Millonarios (Liga BetPlay - 12 Nov 2025)', result: 'win' },
        { text: 'Independiente Medellín 2 - 1 Santa Fe (Liga BetPlay - 05 Nov 2025)', result: 'win' },
        { text: 'Independiente Medellín 3 - 0 América de Cali (Liga BetPlay - 29 Oct 2025)', result: 'win' },
        { text: 'Independiente Medellín 1 - 1 Atlético Nacional (Liga BetPlay - 22 Oct 2025)', result: 'draw' },
        { text: 'Independiente Medellín 2 - 2 Deportes Tolima (Liga BetPlay - 15 Oct 2025)', result: 'draw' }
    ],
    'Junior FC': [
        { text: 'Junior de Barranquilla 1 - 2 Millonarios (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Junior de Barranquilla 1 - 2 Atlético Nacional (Liga BetPlay - 05 Nov 2025)', result: 'loss' },
        { text: 'Junior de Barranquilla 2 - 0 Deportes Tolima (Liga BetPlay - 29 Oct 2025)', result: 'win' },
        { text: 'Junior de Barranquilla 2 - 1 La Equidad (Liga BetPlay - 22 Oct 2025)', result: 'win' },
        { text: 'Junior de Barranquilla 2 - 0 Deportivo Pasto (Liga BetPlay - 15 Oct 2025)', result: 'win' }
    ],
    'Fortaleza CEIF': [
        { text: 'Fortaleza CEIF 1 - 0 Unión Magdalena (Liga BetPlay - 12 Nov 2025)', result: 'win' },
        { text: 'Fortaleza CEIF 1 - 2 Bucaramanga (Liga BetPlay - 05 Nov 2025)', result: 'loss' },
        { text: 'Fortaleza CEIF 0 - 0 La Equidad (Liga BetPlay - 29 Oct 2025)', result: 'draw' },
        { text: 'Fortaleza CEIF 2 - 1 Deportivo Pereira (Liga BetPlay - 22 Oct 2025)', result: 'win' },
        { text: 'Fortaleza CEIF 1 - 0 Boyacá Chicó (Liga BetPlay - 15 Oct 2025)', result: 'win' }
    ],
    'Llaneros FC': [
        { text: 'Llaneros FC 1 - 3 Deportes Tolima (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Llaneros FC 0 - 0 Envigado FC (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Llaneros FC 2 - 1 Águilas Doradas (Liga BetPlay - 29 Oct 2025)', result: 'win' },
        { text: 'Llaneros FC 0 - 1 Alianza FC (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'Llaneros FC 1 - 0 Unión Magdalena (Liga BetPlay - 15 Oct 2025)', result: 'win' }
    ],
    'Águilas Doradas': [
        { text: 'Águilas Doradas 0 - 1 Deportes Tolima (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Águilas Doradas 1 - 0 Envigado FC (Liga BetPlay - 05 Nov 2025)', result: 'win' },
        { text: 'Águilas Doradas 1 - 2 Llaneros FC (Liga BetPlay - 29 Oct 2025)', result: 'loss' },
        { text: 'Águilas Doradas 2 - 0 Deportivo Pasto (Liga BetPlay - 22 Oct 2025)', result: 'win' },
        { text: 'Águilas Doradas 1 - 1 Atlético Bucaramanga (Liga BetPlay - 15 Oct 2025)', result: 'draw' }
    ],
    'Alianza FC': [
        { text: 'Alianza FC 1 - 2 Santa Fe (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Alianza FC 1 - 1 Deportivo Cali (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Alianza FC 1 - 0 Llaneros FC (Liga BetPlay - 29 Oct 2025)', result: 'win' },
        { text: 'Alianza FC 0 - 2 Junior de Barranquilla (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'Alianza FC 2 - 1 Deportivo Pereira (Liga BetPlay - 15 Oct 2025)', result: 'win' }
    ],
    'Independiente Santa Fe': [
        { text: 'Independiente Santa Fe 2 - 1 Deportivo Pereira (Liga BetPlay - 12 Nov 2025)', result: 'win' },
        { text: 'Independiente Santa Fe 0 - 2 América de Cali (Liga BetPlay - 05 Nov 2025)', result: 'loss' },
        { text: 'Independiente Santa Fe 1 - 2 Once Caldas (Liga BetPlay - 29 Oct 2025)', result: 'loss' },
        { text: 'Independiente Santa Fe 1 - 1 La Equidad (Liga BetPlay - 22 Oct 2025)', result: 'draw' },
        { text: 'Independiente Santa Fe 0 - 1 Atlético Nacional (Liga BetPlay - 15 Oct 2025)', result: 'loss' }
    ],
    'Deportivo Pereira': [
        { text: 'Deportivo Pereira 1 - 2 Independiente Santa Fe (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Deportivo Pereira 1 - 1 Independiente Medellín (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Deportivo Pereira 1 - 2 Fortaleza CEIF (Liga BetPlay - 29 Oct 2025)', result: 'loss' },
        { text: 'Deportivo Pereira 2 - 0 Boyacá Chicó (Liga BetPlay - 22 Oct 2025)', result: 'win' },
        { text: 'Deportivo Pereira 1 - 2 Alianza FC (Liga BetPlay - 15 Oct 2025)', result: 'loss' }
    ],
    'Once Caldas': [
        { text: 'Once Caldas 2 - 1 Independiente Santa Fe (Liga BetPlay - 12 Nov 2025)', result: 'win' },
        { text: 'Once Caldas 0 - 2 Atlético Nacional (Liga BetPlay - 05 Nov 2025)', result: 'loss' },
        { text: 'Once Caldas 2 - 1 Independiente Medellín (Liga BetPlay - 29 Oct 2025)', result: 'win' },
        { text: 'Once Caldas 0 - 1 Deportes Tolima (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'Once Caldas 1 - 1 Junior de Barranquilla (Liga BetPlay - 15 Oct 2025)', result: 'draw' }
    ],
    'Unión Magdalena': [
        { text: 'Unión Magdalena 0 - 1 Fortaleza CEIF (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Unión Magdalena 0 - 0 Deportivo Pasto (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Unión Magdalena 0 - 1 Águilas Doradas (Liga BetPlay - 29 Oct 2025)', result: 'loss' },
        { text: 'Unión Magdalena 1 - 0 Once Caldas (Liga BetPlay - 22 Oct 2025)', result: 'win' },
        { text: 'Unión Magdalena 0 - 1 Llaneros FC (Liga BetPlay - 15 Oct 2025)', result: 'loss' }
    ],
    'Envigado FC': [
        { text: 'Envigado FC 0 - 0 Llaneros FC (Liga BetPlay - 12 Nov 2025)', result: 'draw' },
        { text: 'Envigado FC 0 - 1 Águilas Doradas (Liga BetPlay - 05 Nov 2025)', result: 'loss' },
        { text: 'Envigado FC 0 - 2 Deportivo Pasto (Liga BetPlay - 29 Oct 2025)', result: 'loss' },
        { text: 'Envigado FC 0 - 2 Deportivo Cali (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'Envigado FC 0 - 1 Bucaramanga (Liga BetPlay - 15 Oct 2025)', result: 'loss' }
    ],
    'Deportivo Pasto': [
        { text: 'Deportivo Pasto 0 - 0 Atlético Bucaramanga (Liga BetPlay - 12 Nov 2025)', result: 'draw' },
        { text: 'Deportivo Pasto 0 - 0 Unión Magdalena (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Deportivo Pasto 2 - 0 Envigado FC (Liga BetPlay - 29 Oct 2025)', result: 'win' },
        { text: 'Deportivo Pasto 0 - 2 Águilas Doradas (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'Deportivo Pasto 0 - 1 Deportivo Cali (Liga BetPlay - 15 Oct 2025)', result: 'loss' }
    ],
    'Boyacá Chicó FC': [
        { text: 'Boyacá Chicó 0 - 1 Millonarios (Liga BetPlay - 12 Nov 2025)', result: 'loss' },
        { text: 'Boyacá Chicó 1 - 1 Atlético Bucaramanga (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Boyacá Chicó 1 - 1 Envigado FC (Liga BetPlay - 29 Oct 2025)', result: 'draw' },
        { text: 'Boyacá Chicó 0 - 2 Deportivo Pereira (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'Boyacá Chicó 0 - 1 Fortaleza CEIF (Liga BetPlay - 15 Oct 2025)', result: 'loss' }
    ],
    'La Equidad Seguros': [
        { text: 'La Equidad 1 - 0 Atlético Nacional (Liga BetPlay - 12 Nov 2025)', result: 'win' },
        { text: 'La Equidad 0 - 0 Fortaleza CEIF (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'La Equidad 0 - 1 Deportes Tolima (Liga BetPlay - 29 Oct 2025)', result: 'loss' },
        { text: 'La Equidad 1 - 2 Junior de Barranquilla (Liga BetPlay - 22 Oct 2025)', result: 'loss' },
        { text: 'La Equidad 1 - 1 Independiente Santa Fe (Liga BetPlay - 15 Oct 2025)', result: 'draw' }
    ],
    'Deportivo Cali': [
        { text: 'América de Cali 0 - 0 Deportivo Cali (Liga BetPlay - 05 Nov 2025)', result: 'draw' },
        { text: 'Deportes Tolima 2 - 1 Deportivo Cali (Liga BetPlay - 25 Oct 2025)', result: 'loss' },
        { text: 'Llaneros 1 - 1 Deportivo Cali (Liga BetPlay - 22 Oct 2025)', result: 'draw' },
        { text: 'Millonarios 0 - 0 Deportivo Cali (Liga BetPlay - 19 Oct 2025)', result: 'draw' },
        { text: 'Deportivo Cali 1 - 0 Envigado (Liga BetPlay - 16 Oct 2025)', result: 'win' }
    ]
};

function showTeamMatches(teamName) {
    const teamDetailSection = document.getElementById('team-detail');
    const teamDetailName = document.getElementById('team-detail-name');
    const teamDetailLogo = document.getElementById('team-detail-logo');
    const teamDetailMatches = document.getElementById('team-detail-matches');
    const teamsSection = document.getElementById('teams');

    teamDetailName.textContent = teamName;
    // Set team logo based on teamName - you might need a mapping for this
    // For now, let's assume images are named 'teamName.png' or similar
    // You would need to refine this to match your actual image naming convention
    let logoPath = '';
    if (teamName === 'Atlético Nacional') logoPath = 'images/Nacional.webp';
    else if (teamName === 'Millonarios FC') logoPath = 'images/millonarios.png';
    else if (teamName === 'América de Cali') logoPath = 'images/America.png';
    else if (teamName === 'Deportes Tolima') logoPath = 'images/tolima.png';
    else if (teamName === 'Bucaramanga') logoPath = 'images/Bucaramanga.jpg';
    else if (teamName === 'Independiente Medellín') logoPath = 'images/Medellin.png';
    else if (teamName === 'Junior FC') logoPath = 'images/Junior.png';
    else if (teamName === 'Fortaleza CEIF') logoPath = 'images/Fortaleza.png';
    else if (teamName === 'Llaneros FC') logoPath = 'images/Llaneros.png';
    else if (teamName === 'Águilas Doradas') logoPath = 'images/Aguilas.webp';
    else if (teamName === 'Alianza FC') logoPath = 'images/Alianza.png';
    else if (teamName === 'Independiente Santa Fe') logoPath = 'images/Santafe.png';
    else if (teamName === 'Deportivo Pereira') logoPath = 'images/Pereira.png';
    else if (teamName === 'Once Caldas') logoPath = 'images/Oncecaldas.jpg';
    else if (teamName === 'Unión Magdalena') logoPath = 'images/UnionMagdalena.png';
    else if (teamName === 'Envigado FC') logoPath = 'images/Envigado.png';
    else if (teamName === 'Deportivo Pasto') logoPath = 'images/Pasto.jpg';
    else if (teamName === 'Boyacá Chicó FC') logoPath = 'images/Boyaca.webp';
    else if (teamName === 'La Equidad Seguros') logoPath = 'images/Equidad.png';
    else if (teamName === 'Deportivo Cali') logoPath = 'images/DeportivoCali.png';
    
    teamDetailLogo.src = logoPath;
    teamDetailLogo.alt = `${teamName} Logo`;

    teamDetailMatches.innerHTML = ''; // Clear previous matches

    const matches = teamMatchData[teamName] || [];

    if (matches.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No hay datos de partidos recientes disponibles.';
        listItem.classList.add('match-unknown');
        teamDetailMatches.appendChild(listItem);
    } else {
        matches.forEach((match, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = match.text;
            listItem.classList.add(`match-${match.result}`);
            if (teamName === 'Millonarios FC' && match.details) { // Only Millonarios has details for now
                listItem.onclick = () => showMatchDetails(teamName, index);
                listItem.style.cursor = 'pointer';
            }
            teamDetailMatches.appendChild(listItem);
        });
    }

    teamsSection.style.display = 'none'; // Hide teams section
    teamDetailSection.style.display = 'block'; // Show team detail section
}

function hideTeamDetail() {
    document.getElementById('team-detail').style.display = 'none';
    document.getElementById('teams').style.display = 'block';
}

function showMatchDetails(teamName, matchIndex) {
    const match = teamMatchData[teamName][matchIndex];
    if (!match || !match.details) {
        console.error('Match details not found.');
        return;
    }

    const matchDetailSection = document.getElementById('match-detail');
    document.getElementById('team-detail').style.display = 'none'; // Hide team detail section
    matchDetailSection.style.display = 'block'; // Show match detail section

    document.getElementById('match-detail-title').textContent = `${match.details.homeTeam} vs ${match.details.awayTeam}`;
    document.getElementById('match-date').textContent = match.details.date;
    document.getElementById('match-time').textContent = match.details.time;
    document.getElementById('match-stadium').textContent = match.details.stadium;
    document.getElementById('match-competition').textContent = match.details.competition;

    document.getElementById('home-team-logo').src = match.details.homeLogo;
    document.getElementById('home-team-name').textContent = match.details.homeTeam;
    document.getElementById('home-team-score').textContent = match.details.homeScore;

    document.getElementById('away-team-logo').src = match.details.awayLogo;
    document.getElementById('away-team-name').textContent = match.details.awayTeam;
    document.getElementById('away-team-score').textContent = match.details.awayScore;

    const matchEventsList = document.getElementById('match-events');
    matchEventsList.innerHTML = '';
    match.details.events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = event;
        matchEventsList.appendChild(listItem);
    });

    // Populate lineups
    const homeLineupList = document.getElementById('home-lineup');
    const awayLineupList = document.getElementById('away-lineup');
    homeLineupList.innerHTML = '';
    awayLineupList.innerHTML = '';

    match.details.lineups.home.players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = player;
        homeLineupList.appendChild(listItem);
    });

    match.details.lineups.away.players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = player;
        awayLineupList.appendChild(listItem);
    });

    // Populate goals
    const goalsList = document.getElementById('goals-list');
    goalsList.innerHTML = '';
    if (match.details.goals.length > 0) {
        match.details.goals.forEach(goal => {
            const listItem = document.createElement('li');
            listItem.textContent = goal;
            goalsList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No se registraron goles.';
        goalsList.appendChild(listItem);
    }

    // Populate player ratings
    const playerRatingsList = document.getElementById('player-ratings-list');
    playerRatingsList.innerHTML = '';
    
    // Home team ratings
    match.details.playerRatings.home.forEach(p => {
        const listItem = document.createElement('li');
        listItem.textContent = `${p.name}: ${p.rating}`;
        playerRatingsList.appendChild(listItem);
    });
    // Away team ratings
    match.details.playerRatings.away.forEach(p => {
        const listItem = document.createElement('li');
        listItem.textContent = `${p.name}: ${p.rating}`;
        playerRatingsList.appendChild(listItem);
    });
}

function hideMatchDetail() {
    document.getElementById('match-detail').style.display = 'none';
    document.getElementById('team-detail').style.display = 'block'; // Go back to team detail
}

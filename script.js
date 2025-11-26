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

    // Dummy data for team matches - NOW WITH MORE DETAILS!
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
                    "homeLogo": "images/Nacional.webp",
                    "awayLogo": "images/Aguilas.webp",
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
                    "homeLogo": "images/Nacional.webp",
                    "awayLogo": "images/America.png",
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
                    "homeLogo": "images/Llaneros.png",
                    "awayLogo": "images/Nacional.webp",
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
                    "homeLogo": "images/Nacional.webp",
                    "awayLogo": "images/Medellin.png",
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
                    "homeLogo": "images/Nacional.webp",
                    "awayLogo": "images/Oncecaldas.jpg",
                    "lineups": null,
                    "goals": null,
                    "events": null,
                    "playerRatings": null
                }
            }
    ],
    'Millonarios FC': [
        {
                "text": "Envigado 1–1 Millonarios (Liga BetPlay - 07 Nov 2025)",
                "result": "draw",
                "details": {
                    "date": "07 Nov 2025",
                    "time": "16:00",
                    "stadium": "Estadio Metropolitano",
                    "competition": "Liga BetPlay",
                    "homeTeam": "Millonarios FC",
                    "awayTeam": "Envigado FC",
                    "homeScore": 1,
                    "awayScore": 1,
                    "homeLogo": "images/millonarios.png",
                    "awayLogo": "images/Envigado.png",
                    "lineups": {
                        "home": { "name": "Millonarios FC", "players": ["García", "López", "Martínez", "Sánchez", "González", "Díaz", "Ramírez", "Torres", "Pérez", "Gómez"] },
                        "away": { "name": "Envigado FC", "players": ["Rojas", "Vargas", "Castro", "Gómez", "Díaz", "Ramírez", "López", "Sánchez", "García", "Torres"] }
                    },
                    "goals": ["García (10')", "Martínez (30')", "López (45')", "Sánchez (60')", "González (75')"],
                    "events": ["García (10')", "Martínez (30')", "López (45')", "Sánchez (60')", "González (75')"],
                    "playerRatings": {
                        "home": [
                            { "name": "García", "rating": "7.5" },
                            { "name": "López", "rating": "7.0" },
                            { "name": "Martínez", "rating": "7.2" },
                            { "name": "Sánchez", "rating": "7.1" },
                            { "name": "González", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "Torres", "rating": "7.1" },
                            { "name": "Pérez", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" }
                        ],
                        "away": [
                            { "name": "Rojas", "rating": "7.0" },
                            { "name": "Vargas", "rating": "7.1" },
                            { "name": "Castro", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "López", "rating": "7.1" },
                            { "name": "Sánchez", "rating": "7.2" },
                            { "name": "García", "rating": "7.3" },
                            { "name": "Torres", "rating": "7.4" }
                        ]
                    }
                }
            },
            {
                "text": "Millonarios 0–0 Once Caldas (Liga BetPlay - 30 Oct 2025)",
                "result": "draw",
                "details": {
                    "date": "30 Oct 2025",
                    "time": "19:00",
                    "stadium": "Estadio Metropolitano",
                    "competition": "Liga BetPlay",
                    "homeTeam": "Millonarios FC",
                    "awayTeam": "Once Caldas",
                    "homeScore": 0,
                    "awayScore": 0,
                    "homeLogo": "images/millonarios.png",
                    "awayLogo": "images/Oncecaldas.jpg",
                    "lineups": {
                        "home": { "name": "Millonarios FC", "players": ["García", "López", "Martínez", "Sánchez", "González", "Díaz", "Ramírez", "Torres", "Pérez", "Gómez"] },
                        "away": { "name": "Once Caldas", "players": ["Rojas", "Vargas", "Castro", "Gómez", "Díaz", "Ramírez", "López", "Sánchez", "García", "Torres"] }
                    },
                    "goals": [],
                    "events": [],
                    "playerRatings": {
                        "home": [
                            { "name": "García", "rating": "7.5" },
                            { "name": "López", "rating": "7.0" },
                            { "name": "Martínez", "rating": "7.2" },
                            { "name": "Sánchez", "rating": "7.1" },
                            { "name": "González", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "Torres", "rating": "7.1" },
                            { "name": "Pérez", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" }
                        ],
                        "away": [
                            { "name": "Rojas", "rating": "7.0" },
                            { "name": "Vargas", "rating": "7.1" },
                            { "name": "Castro", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "López", "rating": "7.1" },
                            { "name": "Sánchez", "rating": "7.2" },
                            { "name": "García", "rating": "7.3" },
                            { "name": "Torres", "rating": "7.4" }
                    ]
                }
            }
        },
        {
                "text": "Independiente Santa Fe 0–1 Millonarios (Liga BetPlay - 26 Oct 2025)",
                "result": "win",
                "details": {
                    "date": "26 Oct 2025",
                    "time": "14:00",
                    "stadium": "Estadio Metropolitano",
                    "competition": "Liga BetPlay",
                    "homeTeam": "Independiente Santa Fe",
                    "awayTeam": "Millonarios FC",
                    "homeScore": 0,
                    "awayScore": 1,
                    "homeLogo": "images/Santafe.png",
                    "awayLogo": "images/millonarios.png",
                    "lineups": {
                        "home": { "name": "Independiente Santa Fe", "players": ["García", "López", "Martínez", "Sánchez", "González", "Díaz", "Ramírez", "Torres", "Pérez", "Gómez"] },
                        "away": { "name": "Millonarios FC", "players": ["Rojas", "Vargas", "Castro", "Gómez", "Díaz", "Ramírez", "López", "Sánchez", "García", "Torres"] }
                    },
                    "goals": ["García (10')"],
                    "events": ["García (10')"],
                    "playerRatings": {
                        "home": [
                            { "name": "García", "rating": "7.5" },
                            { "name": "López", "rating": "7.0" },
                            { "name": "Martínez", "rating": "7.2" },
                            { "name": "Sánchez", "rating": "7.1" },
                            { "name": "González", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "Torres", "rating": "7.1" },
                            { "name": "Pérez", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" }
                        ],
                        "away": [
                            { "name": "Rojas", "rating": "7.0" },
                            { "name": "Vargas", "rating": "7.1" },
                            { "name": "Castro", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "López", "rating": "7.1" },
                            { "name": "Sánchez", "rating": "7.2" },
                            { "name": "García", "rating": "7.3" },
                            { "name": "Torres", "rating": "7.4" }
                    ]
                }
            }
        },
        {
                "text": "Millonarios 1–1 Bucaramanga (Liga BetPlay - 22 Oct 2025)",
                "result": "draw",
                "details": {
                    "date": "22 Oct 2025",
                    "time": "16:00",
                    "stadium": "Estadio Metropolitano",
                    "competition": "Liga BetPlay",
                    "homeTeam": "Millonarios FC",
                    "awayTeam": "Bucaramanga",
                    "homeScore": 1,
                    "awayScore": 1,
                    "homeLogo": "images/millonarios.png",
                    "awayLogo": "images/Bucaramanga.jpg",
                    "lineups": {
                        "home": { "name": "Millonarios FC", "players": ["García", "López", "Martínez", "Sánchez", "González", "Díaz", "Ramírez", "Torres", "Pérez", "Gómez"] },
                        "away": { "name": "Bucaramanga", "players": ["Rojas", "Vargas", "Castro", "Gómez", "Díaz", "Ramírez", "López", "Sánchez", "García", "Torres"] }
                    },
                    "goals": ["García (10')", "López (45')"],
                    "events": ["García (10')", "López (45')"],
                    "playerRatings": {
                        "home": [
                            { "name": "García", "rating": "7.5" },
                            { "name": "López", "rating": "7.0" },
                            { "name": "Martínez", "rating": "7.2" },
                            { "name": "Sánchez", "rating": "7.1" },
                            { "name": "González", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "Torres", "rating": "7.1" },
                            { "name": "Pérez", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" }
                        ],
                        "away": [
                            { "name": "Rojas", "rating": "7.0" },
                            { "name": "Vargas", "rating": "7.1" },
                            { "name": "Castro", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "López", "rating": "7.1" },
                            { "name": "Sánchez", "rating": "7.2" },
                            { "name": "García", "rating": "7.3" },
                            { "name": "Torres", "rating": "7.4" }
                    ]
                }
            }
        },
        {
                "text": "Pereira 3–2 Millonarios (Liga BetPlay - 16 Oct 2025)",
                "result": "loss",
                "details": {
                    "date": "16 Oct 2025",
                    "time": "19:00",
                    "stadium": "Estadio Metropolitano",
                    "competition": "Liga BetPlay",
                    "homeTeam": "Pereira",
                    "awayTeam": "Millonarios FC",
                    "homeScore": 3,
                    "awayScore": 2,
                    "homeLogo": "images/Pereira.png",
                    "awayLogo": "images/millonarios.png",
                    "lineups": {
                        "home": { "name": "Pereira", "players": ["García", "López", "Martínez", "Sánchez", "González", "Díaz", "Ramírez", "Torres", "Pérez", "Gómez"] },
                        "away": { "name": "Millonarios FC", "players": ["Rojas", "Vargas", "Castro", "Gómez", "Díaz", "Ramírez", "López", "Sánchez", "García", "Torres"] }
                    },
                    "goals": ["García (10')", "López (30')", "Martínez (45')"],
                    "events": ["García (10')", "López (30')", "Martínez (45')"],
                    "playerRatings": {
                        "home": [
                            { "name": "García", "rating": "7.5" },
                            { "name": "López", "rating": "7.0" },
                            { "name": "Martínez", "rating": "7.2" },
                            { "name": "Sánchez", "rating": "7.1" },
                            { "name": "González", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "Torres", "rating": "7.1" },
                            { "name": "Pérez", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" }
                        ],
                        "away": [
                            { "name": "Rojas", "rating": "7.0" },
                            { "name": "Vargas", "rating": "7.1" },
                            { "name": "Castro", "rating": "7.2" },
                            { "name": "Gómez", "rating": "7.3" },
                            { "name": "Díaz", "rating": "7.4" },
                            { "name": "Ramírez", "rating": "7.0" },
                            { "name": "López", "rating": "7.1" },
                            { "name": "Sánchez", "rating": "7.2" },
                            { "name": "García", "rating": "7.3" },
                            { "name": "Torres", "rating": "7.4" }
                    ]
                }
            }
        }
    ],
        // The remaining teams will have placeholder data similar to the previous implementation
    'América de Cali': [
            { text: 'América de Cali 3–0 Unión Magdalena (Liga BetPlay - [Fecha del partido])', result: 'win', details: { date: '[Fecha del partido]', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'América de Cali', awayTeam: 'Unión Magdalena', homeScore: 3, awayScore: 0, homeLogo: 'images/America.png', awayLogo: 'images/UnionMagdalena.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Boyacá Chicó 0–2 América de Cali (Liga BetPlay - [Fecha del partido])', result: 'win', details: { date: '[Fecha del partido]', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'América de Cali', homeScore: 0, awayScore: 2, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/America.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Nacional 4–1 América de Cali (Liga BetPlay - [Fecha del partido])', result: 'loss', details: { date: '[Fecha del partido]', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Atlético Nacional', awayTeam: 'América de Cali', homeScore: 4, awayScore: 1, homeLogo: 'images/Nacional.webp', awayLogo: 'images/America.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'América de Cali 1–1 Deportivo Cali (Liga BetPlay - [Fecha del partido])', result: 'draw', details: { date: '[Fecha del partido]', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'América de Cali', awayTeam: 'Deportivo Cali', homeScore: 1, awayScore: 1, homeLogo: 'images/America.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'América de Cali 3–0 Alianza FC (Liga BetPlay - [Fecha del partido])', result: 'win', details: { date: '[Fecha del partido]', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'América de Cali', awayTeam: 'Alianza FC', homeScore: 3, awayScore: 0, homeLogo: 'images/America.png', awayLogo: 'images/Alianza.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Deportes Tolima': [
            { text: 'Llaneros 1 - 0 Deportes Tolima (Liga BetPlay - 05 Nov 2025)', result: 'loss', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros', awayTeam: 'Deportes Tolima', homeScore: 1, awayScore: 0, homeLogo: 'images/Llaneros.png', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportes Tolima 2 - 2 Atlético Nacional (Liga BetPlay - 01 Nov 2025)', result: 'draw', details: { date: '01 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportes Tolima', awayTeam: 'Atlético Nacional', homeScore: 2, awayScore: 2, homeLogo: 'images/tolima.png', awayLogo: 'images/Nacional.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Alianza FC 0 - 1 Deportes Tolima (Liga BetPlay - 28 Oct 2025)', result: 'win', details: { date: '28 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Alianza FC', awayTeam: 'Deportes Tolima', homeScore: 0, awayScore: 1, homeLogo: 'images/Alianza.png', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportes Tolima 2 - 1 Deportivo Cali (Liga BetPlay - 25 Oct 2025)', result: 'win', details: { date: '25 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportes Tolima', awayTeam: 'Deportivo Cali', homeScore: 2, awayScore: 1, homeLogo: 'images/tolima.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Boyacá Chicó 0 - 0 Deportes Tolima (Liga BetPlay - 22 Oct 2025)', result: 'draw', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'Deportes Tolima', homeScore: 0, awayScore: 0, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Bucaramanga': [
            { text: 'Atlético Bucaramanga 3 - 1 Alianza Valledupar (Liga BetPlay - 05 Nov 2025)', result: 'win', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Atlético Bucaramanga', awayTeam: 'Alianza Valledupar', homeScore: 3, awayScore: 1, homeLogo: 'images/Bucaramanga.jpg', awayLogo: 'images/Alianza.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Bucaramanga 1 - 0 Medellín (Liga BetPlay - 01 Nov 2025)', result: 'win', details: { date: '01 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Bucaramanga', awayTeam: 'Independiente Medellín', homeScore: 1, awayScore: 0, homeLogo: 'images/Bucaramanga.jpg', awayLogo: 'images/Medellin.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Fortaleza 1 - 1 Bucaramanga (Liga BetPlay - 28 Oct 2025)', result: 'draw', details: { date: '28 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Fortaleza', awayTeam: 'Bucaramanga', homeScore: 1, awayScore: 1, homeLogo: 'images/Fortaleza.png', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Bucaramanga 2 - 0 Llaneros (Liga BetPlay - 25 Oct 2025)', result: 'win', details: { date: '25 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Bucaramanga', awayTeam: 'Llaneros', homeScore: 2, awayScore: 0, homeLogo: 'images/Bucaramanga.jpg', awayLogo: 'images/Llaneros.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Águilas Doradas 0 - 0 Bucaramanga (Liga BetPlay - 22 Oct 2025)', result: 'draw', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Águilas Doradas', awayTeam: 'Bucaramanga', homeScore: 0, awayScore: 0, homeLogo: 'images/Aguilas.webp', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Independiente Medellín': [
            { text: 'Independiente Medellín 1 - 0 Millonarios (Liga BetPlay - 12 Nov 2025)', result: 'win', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Medellín', awayTeam: 'Millonarios', homeScore: 1, awayScore: 0, homeLogo: 'images/Medellin.png', awayLogo: 'images/millonarios.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Medellín 2 - 1 Santa Fe (Liga BetPlay - 05 Nov 2025)', result: 'win', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Medellín', awayTeam: 'Independiente Santa Fe', homeScore: 2, awayScore: 1, homeLogo: 'images/Medellin.png', awayLogo: 'images/Santafe.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Medellín 3 - 0 América de Cali (Liga BetPlay - 29 Oct 2025)', result: 'win', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Medellín', awayTeam: 'América de Cali', homeScore: 3, awayScore: 0, homeLogo: 'images/Medellin.png', awayLogo: 'images/America.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Medellín 1 - 1 Atlético Nacional (Liga BetPlay - 22 Oct 2025)', result: 'draw', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Medellín', awayTeam: 'Atlético Nacional', homeScore: 1, awayScore: 1, homeLogo: 'images/Medellin.png', awayLogo: 'images/Nacional.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Medellín 2 - 2 Deportes Tolima (Liga BetPlay - 15 Oct 2025)', result: 'draw', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Medellín', awayTeam: 'Deportes Tolima', homeScore: 2, awayScore: 2, homeLogo: 'images/Medellin.png', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Junior FC': [
            { text: 'Junior de Barranquilla 1 - 2 Millonarios (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Junior de Barranquilla', awayTeam: 'Millonarios', homeScore: 1, awayScore: 2, homeLogo: 'images/Junior.png', awayLogo: 'images/millonarios.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Junior de Barranquilla 1 - 2 Atlético Nacional (Liga BetPlay - 05 Nov 2025)', result: 'loss', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Junior de Barranquilla', awayTeam: 'Atlético Nacional', homeScore: 1, awayScore: 2, homeLogo: 'images/Junior.png', awayLogo: 'images/Nacional.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Junior de Barranquilla 2 - 0 Deportes Tolima (Liga BetPlay - 29 Oct 2025)', result: 'win', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Junior de Barranquilla', awayTeam: 'Deportes Tolima', homeScore: 2, awayScore: 0, homeLogo: 'images/Junior.png', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Junior de Barranquilla 2 - 1 La Equidad (Liga BetPlay - 22 Oct 2025)', result: 'win', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Junior de Barranquilla', awayTeam: 'La Equidad', homeScore: 2, awayScore: 1, homeLogo: 'images/Junior.png', awayLogo: 'images/Equidad.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Junior de Barranquilla 2 - 0 Deportivo Pasto (Liga BetPlay - 15 Oct 2025)', result: 'win', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Junior de Barranquilla', awayTeam: 'Deportivo Pasto', homeScore: 2, awayScore: 0, homeLogo: 'images/Junior.png', awayLogo: 'images/Pasto.jpg', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Fortaleza CEIF': [
            { text: 'Fortaleza CEIF 1 - 0 Unión Magdalena (Liga BetPlay - 12 Nov 2025)', result: 'win', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Fortaleza CEIF', awayTeam: 'Unión Magdalena', homeScore: 1, awayScore: 0, homeLogo: 'images/Fortaleza.png', awayLogo: 'images/UnionMagdalena.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Fortaleza CEIF 1 - 2 Bucaramanga (Liga BetPlay - 05 Nov 2025)', result: 'loss', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Fortaleza CEIF', awayTeam: 'Bucaramanga', homeScore: 1, awayScore: 2, homeLogo: 'images/Fortaleza.png', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Fortaleza CEIF 0 - 0 La Equidad (Liga BetPlay - 29 Oct 2025)', result: 'draw', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Fortaleza CEIF', awayTeam: 'La Equidad', homeScore: 0, awayScore: 0, homeLogo: 'images/Fortaleza.png', awayLogo: 'images/Equidad.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Fortaleza CEIF 2 - 1 Deportivo Pereira (Liga BetPlay - 22 Oct 2025)', result: 'win', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Fortaleza CEIF', awayTeam: 'Deportivo Pereira', homeScore: 2, awayScore: 1, homeLogo: 'images/Fortaleza.png', awayLogo: 'images/Pereira.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Fortaleza CEIF 1 - 0 Boyacá Chicó (Liga BetPlay - 15 Oct 2025)', result: 'win', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Fortaleza CEIF', awayTeam: 'Boyacá Chicó', homeScore: 1, awayScore: 0, homeLogo: 'images/Fortaleza.png', awayLogo: 'images/Boyaca.webp', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Llaneros FC': [
            { text: 'Llaneros FC 1 - 3 Deportes Tolima (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros FC', awayTeam: 'Deportes Tolima', homeScore: 1, awayScore: 3, homeLogo: 'images/Llaneros.png', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Llaneros FC 0 - 0 Envigado FC (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros FC', awayTeam: 'Envigado FC', homeScore: 0, awayScore: 0, homeLogo: 'images/Llaneros.png', awayLogo: 'images/Envigado.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Llaneros FC 2 - 1 Águilas Doradas (Liga BetPlay - 29 Oct 2025)', result: 'win', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros FC', awayTeam: 'Águilas Doradas', homeScore: 2, awayScore: 1, homeLogo: 'images/Llaneros.png', awayLogo: 'images/Aguilas.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Llaneros FC 0 - 1 Alianza FC (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros FC', awayTeam: 'Alianza FC', homeScore: 0, awayScore: 1, homeLogo: 'images/Llaneros.png', awayLogo: 'images/Alianza.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Llaneros FC 1 - 0 Unión Magdalena (Liga BetPlay - 15 Oct 2025)', result: 'win', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros FC', awayTeam: 'Unión Magdalena', homeScore: 1, awayScore: 0, homeLogo: 'images/Llaneros.png', awayLogo: 'images/UnionMagdalena.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Águilas Doradas': [
            { text: 'Águilas Doradas 0 - 1 Deportes Tolima (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Águilas Doradas', awayTeam: 'Deportes Tolima', homeScore: 0, awayScore: 1, homeLogo: 'images/Aguilas.webp', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Águilas Doradas 1 - 0 Envigado FC (Liga BetPlay - 05 Nov 2025)', result: 'win', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Águilas Doradas', awayTeam: 'Envigado FC', homeScore: 1, awayScore: 0, homeLogo: 'images/Aguilas.webp', awayLogo: 'images/Envigado.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Águilas Doradas 1 - 2 Llaneros FC (Liga BetPlay - 29 Oct 2025)', result: 'loss', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Águilas Doradas', awayTeam: 'Llaneros FC', homeScore: 1, awayScore: 2, homeLogo: 'images/Aguilas.webp', awayLogo: 'images/Llaneros.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Águilas Doradas 2 - 0 Deportivo Pasto (Liga BetPlay - 22 Oct 2025)', result: 'win', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Águilas Doradas', awayTeam: 'Deportivo Pasto', homeScore: 2, awayScore: 0, homeLogo: 'images/Aguilas.webp', awayLogo: 'images/Pasto.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Águilas Doradas 1 - 1 Atlético Bucaramanga (Liga BetPlay - 15 Oct 2025)', result: 'draw', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Águilas Doradas', awayTeam: 'Atlético Bucaramanga', homeScore: 1, awayScore: 1, homeLogo: 'images/Aguilas.webp', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Alianza FC': [
            { text: 'Alianza FC 1 - 2 Santa Fe (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Alianza FC', awayTeam: 'Independiente Santa Fe', homeScore: 1, awayScore: 2, homeLogo: 'images/Alianza.png', awayLogo: 'images/Santafe.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Alianza FC 1 - 1 Deportivo Cali (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Alianza FC', awayTeam: 'Deportivo Cali', homeScore: 1, awayScore: 1, homeLogo: 'images/Alianza.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Alianza FC 1 - 0 Llaneros FC (Liga BetPlay - 29 Oct 2025)', result: 'win', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Alianza FC', awayTeam: 'Llaneros FC', homeScore: 1, awayScore: 0, homeLogo: 'images/Alianza.png', awayLogo: 'images/Llaneros.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Alianza FC 0 - 2 Junior de Barranquilla (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Alianza FC', awayTeam: 'Junior de Barranquilla', homeScore: 0, awayScore: 2, homeLogo: 'images/Alianza.png', awayLogo: 'images/Junior.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Alianza FC 2 - 1 Deportivo Pereira (Liga BetPlay - 15 Oct 2025)', result: 'win', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Alianza FC', awayTeam: 'Deportivo Pereira', homeScore: 2, awayScore: 1, homeLogo: 'images/Alianza.png', awayLogo: 'images/Pereira.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Independiente Santa Fe': [
            { text: 'Independiente Santa Fe 2 - 1 Deportivo Pereira (Liga BetPlay - 12 Nov 2025)', result: 'win', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Santa Fe', awayTeam: 'Deportivo Pereira', homeScore: 2, awayScore: 1, homeLogo: 'images/Santafe.png', awayLogo: 'images/Pereira.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Santa Fe 0 - 2 América de Cali (Liga BetPlay - 05 Nov 2025)', result: 'loss', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Santa Fe', awayTeam: 'América de Cali', homeScore: 0, awayScore: 2, homeLogo: 'images/Santafe.png', awayLogo: 'images/America.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Santa Fe 1 - 2 Once Caldas (Liga BetPlay - 29 Oct 2025)', result: 'loss', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Santa Fe', awayTeam: 'Once Caldas', homeScore: 1, awayScore: 2, homeLogo: 'images/Santafe.png', awayLogo: 'images/Oncecaldas.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Santa Fe 1 - 1 La Equidad (Liga BetPlay - 22 Oct 2025)', result: 'draw', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Santa Fe', awayTeam: 'La Equidad Seguros', homeScore: 1, awayScore: 1, homeLogo: 'images/Santafe.png', awayLogo: 'images/Equidad.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Independiente Santa Fe 0 - 1 Atlético Nacional (Liga BetPlay - 15 Oct 2025)', result: 'loss', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Independiente Santa Fe', awayTeam: 'Atlético Nacional', homeScore: 0, awayScore: 1, homeLogo: 'images/Santafe.png', awayLogo: 'images/Nacional.webp', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Deportivo Pereira': [
            { text: 'Deportivo Pereira 1 - 2 Independiente Santa Fe (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pereira', awayTeam: 'Independiente Santa Fe', homeScore: 1, awayScore: 2, homeLogo: 'images/Pereira.png', awayLogo: 'images/Santafe.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pereira 1 - 1 Independiente Medellín (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pereira', awayTeam: 'Independiente Medellín', homeScore: 1, awayScore: 1, homeLogo: 'images/Pereira.png', awayLogo: 'images/Medellin.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pereira 1 - 2 Fortaleza CEIF (Liga BetPlay - 29 Oct 2025)', result: 'loss', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pereira', awayTeam: 'Fortaleza CEIF', homeScore: 1, awayScore: 2, homeLogo: 'images/Pereira.png', awayLogo: 'images/Fortaleza.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pereira 2 - 0 Boyacá Chicó (Liga BetPlay - 22 Oct 2025)', result: 'win', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pereira', awayTeam: 'Boyacá Chicó', homeScore: 2, awayScore: 0, homeLogo: 'images/Pereira.png', awayLogo: 'images/Boyaca.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pereira 1 - 2 Alianza FC (Liga BetPlay - 15 Oct 2025)', result: 'loss', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pereira', awayTeam: 'Alianza FC', homeScore: 1, awayScore: 2, homeLogo: 'images/Pereira.png', awayLogo: 'images/Alianza.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Once Caldas': [
            { text: 'Once Caldas 2 - 1 Independiente Santa Fe (Liga BetPlay - 12 Nov 2025)', result: 'win', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Once Caldas', awayTeam: 'Independiente Santa Fe', homeScore: 2, awayScore: 1, homeLogo: 'images/Oncecaldas.jpg', awayLogo: 'images/Santafe.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Once Caldas 0 - 2 Atlético Nacional (Liga BetPlay - 05 Nov 2025)', result: 'loss', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Once Caldas', awayTeam: 'Atlético Nacional', homeScore: 0, awayScore: 2, homeLogo: 'images/Oncecaldas.jpg', awayLogo: 'images/Nacional.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Once Caldas 2 - 1 Independiente Medellín (Liga BetPlay - 29 Oct 2025)', result: 'win', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Once Caldas', awayTeam: 'Independiente Medellín', homeScore: 2, awayScore: 1, homeLogo: 'images/Oncecaldas.jpg', awayLogo: 'images/Medellin.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Once Caldas 0 - 1 Deportes Tolima (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Once Caldas', awayTeam: 'Deportes Tolima', homeScore: 0, awayScore: 1, homeLogo: 'images/Oncecaldas.jpg', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Once Caldas 1 - 1 Junior de Barranquilla (Liga BetPlay - 15 Oct 2025)', result: 'draw', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Once Caldas', awayTeam: 'Junior de Barranquilla', homeScore: 1, awayScore: 1, homeLogo: 'images/Oncecaldas.jpg', awayLogo: 'images/Junior.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Unión Magdalena': [
            { text: 'Unión Magdalena 0 - 1 Fortaleza CEIF (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Unión Magdalena', awayTeam: 'Fortaleza CEIF', homeScore: 0, awayScore: 1, homeLogo: 'images/UnionMagdalena.png', awayLogo: 'images/Fortaleza.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Unión Magdalena 0 - 0 Deportivo Pasto (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Unión Magdalena', awayTeam: 'Deportivo Pasto', homeScore: 0, awayScore: 0, homeLogo: 'images/UnionMagdalena.png', awayLogo: 'images/Pasto.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Unión Magdalena 0 - 1 Águilas Doradas (Liga BetPlay - 29 Oct 2025)', result: 'loss', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Unión Magdalena', awayTeam: 'Águilas Doradas', homeScore: 0, awayScore: 1, homeLogo: 'images/UnionMagdalena.png', awayLogo: 'images/Aguilas.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Unión Magdalena 1 - 0 Once Caldas (Liga BetPlay - 22 Oct 2025)', result: 'win', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Unión Magdalena', awayTeam: 'Once Caldas', homeScore: 1, awayScore: 0, homeLogo: 'images/UnionMagdalena.png', awayLogo: 'images/Oncecaldas.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Unión Magdalena 0 - 1 Llaneros FC (Liga BetPlay - 15 Oct 2025)', result: 'loss', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Unión Magdalena', awayTeam: 'Llaneros FC', homeScore: 0, awayScore: 1, homeLogo: 'images/UnionMagdalena.png', awayLogo: 'images/Llaneros.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Envigado FC': [
            { text: 'Envigado FC 0 - 0 Llaneros FC (Liga BetPlay - 12 Nov 2025)', result: 'draw', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Envigado FC', awayTeam: 'Llaneros FC', homeScore: 0, awayScore: 0, homeLogo: 'images/Envigado.png', awayLogo: 'images/Llaneros.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Envigado FC 0 - 1 Águilas Doradas (Liga BetPlay - 05 Nov 2025)', result: 'loss', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Envigado FC', awayTeam: 'Águilas Doradas', homeScore: 0, awayScore: 1, homeLogo: 'images/Envigado.png', awayLogo: 'images/Aguilas.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Envigado FC 0 - 2 Deportivo Pasto (Liga BetPlay - 29 Oct 2025)', result: 'loss', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Envigado FC', awayTeam: 'Deportivo Pasto', homeScore: 0, awayScore: 2, homeLogo: 'images/Envigado.png', awayLogo: 'images/Pasto.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Envigado FC 0 - 2 Deportivo Cali (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Envigado FC', awayTeam: 'Deportivo Cali', homeScore: 0, awayScore: 2, homeLogo: 'images/Envigado.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Envigado FC 0 - 1 Bucaramanga (Liga BetPlay - 15 Oct 2025)', result: 'loss', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Envigado FC', awayTeam: 'Bucaramanga', homeScore: 0, awayScore: 1, homeLogo: 'images/Envigado.png', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Deportivo Pasto': [
            { text: 'Deportivo Pasto 0 - 0 Atlético Bucaramanga (Liga BetPlay - 12 Nov 2025)', result: 'draw', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pasto', awayTeam: 'Atlético Bucaramanga', homeScore: 0, awayScore: 0, homeLogo: 'images/Pasto.jpg', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pasto 0 - 0 Unión Magdalena (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pasto', awayTeam: 'Unión Magdalena', homeScore: 0, awayScore: 0, homeLogo: 'images/Pasto.jpg', awayLogo: 'images/UnionMagdalena.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pasto 2 - 0 Envigado FC (Liga BetPlay - 29 Oct 2025)', result: 'win', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pasto', awayTeam: 'Envigado FC', homeScore: 2, awayScore: 0, homeLogo: 'images/Pasto.jpg', awayLogo: 'images/Envigado.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pasto 0 - 2 Águilas Doradas (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pasto', awayTeam: 'Águilas Doradas', homeScore: 0, awayScore: 2, homeLogo: 'images/Pasto.jpg', awayLogo: 'images/Aguilas.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Pasto 0 - 1 Deportivo Cali (Liga BetPlay - 15 Oct 2025)', result: 'loss', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Pasto', awayTeam: 'Deportivo Cali', homeScore: 0, awayScore: 1, homeLogo: 'images/Pasto.jpg', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Boyacá Chicó FC': [
            { text: 'Boyacá Chicó 0 - 1 Millonarios (Liga BetPlay - 12 Nov 2025)', result: 'loss', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'Millonarios', homeScore: 0, awayScore: 1, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/millonarios.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Boyacá Chicó 1 - 1 Atlético Bucaramanga (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'Atlético Bucaramanga', homeScore: 1, awayScore: 1, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/Bucaramanga.jpg', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Boyacá Chicó 1 - 1 Envigado FC (Liga BetPlay - 29 Oct 2025)', result: 'draw', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'Envigado FC', homeScore: 1, awayScore: 1, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/Envigado.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Boyacá Chicó 0 - 2 Deportivo Pereira (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'Deportivo Pereira', homeScore: 0, awayScore: 2, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/Pereira.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Boyacá Chicó 0 - 1 Fortaleza CEIF (Liga BetPlay - 15 Oct 2025)', result: 'loss', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Boyacá Chicó', awayTeam: 'Fortaleza CEIF', homeScore: 0, awayScore: 1, homeLogo: 'images/Boyaca.webp', awayLogo: 'images/Fortaleza.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'La Equidad Seguros': [
            { text: 'La Equidad 1 - 0 Atlético Nacional (Liga BetPlay - 12 Nov 2025)', result: 'win', details: { date: '12 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'La Equidad', awayTeam: 'Atlético Nacional', homeScore: 1, awayScore: 0, homeLogo: 'images/Equidad.png', awayLogo: 'images/Nacional.webp', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'La Equidad 0 - 0 Fortaleza CEIF (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'La Equidad', awayTeam: 'Fortaleza CEIF', homeScore: 0, awayScore: 0, homeLogo: 'images/Equidad.png', awayLogo: 'images/Fortaleza.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'La Equidad 0 - 1 Deportes Tolima (Liga BetPlay - 29 Oct 2025)', result: 'loss', details: { date: '29 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'La Equidad', awayTeam: 'Deportes Tolima', homeScore: 0, awayScore: 1, homeLogo: 'images/Equidad.png', awayLogo: 'images/tolima.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'La Equidad 1 - 2 Junior de Barranquilla (Liga BetPlay - 22 Oct 2025)', result: 'loss', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'La Equidad', awayTeam: 'Junior de Barranquilla', homeScore: 1, awayScore: 2, homeLogo: 'images/Equidad.png', awayLogo: 'images/Junior.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'La Equidad 1 - 1 Independiente Santa Fe (Liga BetPlay - 15 Oct 2025)', result: 'draw', details: { date: '15 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'La Equidad', awayTeam: 'Independiente Santa Fe', homeScore: 1, awayScore: 1, homeLogo: 'images/Equidad.png', awayLogo: 'images/Santafe.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ],
    'Deportivo Cali': [
            { text: 'América de Cali 0 - 0 Deportivo Cali (Liga BetPlay - 05 Nov 2025)', result: 'draw', details: { date: '05 Nov 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'América de Cali', awayTeam: 'Deportivo Cali', homeScore: 0, awayScore: 0, homeLogo: 'images/America.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportes Tolima 2 - 1 Deportivo Cali (Liga BetPlay - 25 Oct 2025)', result: 'loss', details: { date: '25 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportes Tolima', awayTeam: 'Deportivo Cali', homeScore: 2, awayScore: 1, homeLogo: 'images/tolima.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Llaneros 1 - 1 Deportivo Cali (Liga BetPlay - 22 Oct 2025)', result: 'draw', details: { date: '22 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Llaneros', awayTeam: 'Deportivo Cali', homeScore: 1, awayScore: 1, homeLogo: 'images/Llaneros.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Millonarios 0 - 0 Deportivo Cali (Liga BetPlay - 19 Oct 2025)', result: 'draw', details: { date: '19 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Millonarios', awayTeam: 'Deportivo Cali', homeScore: 0, awayScore: 0, homeLogo: 'images/millonarios.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
            { text: 'Deportivo Cali 1 - 0 Envigado (Liga BetPlay - 16 Oct 2025)', result: 'win', details: { date: '16 Oct 2025', time: null, stadium: null, competition: 'Liga BetPlay', homeTeam: 'Deportivo Cali', awayTeam: 'Envigado', homeScore: 1, awayScore: 0, homeLogo: 'images/DeportivoCali.png', awayLogo: 'images/Envigado.png', lineups: null, goals: null, events: null, playerRatings: null } }
        ]
    };

    // Helper function to create a match card
    function createMatchCard(match) {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');
        matchCard.dataset.matchText = match.text; // Store the full match text for lookup

        // Determine status based on if it has a score or is an upcoming match
        const statusClass = match.details && match.details.homeScore !== null ? 'finished' : 'upcoming';
        const statusText = statusClass === 'finished' ? 'FINALIZADO' : 'PROGRAMADO';

        // Use match.details if available, otherwise fallback to parsing match.text
        const homeTeamName = match.details ? match.details.homeTeam : match.text.split(' ')[0];
        const awayTeamName = match.details ? match.details.awayTeam : match.text.split('vs')[1] ? match.text.split('vs')[1].split('(')[0].trim() : '';

        const homeTeamScore = match.details && match.details.homeScore !== null ? match.details.homeScore : '';
        const awayTeamScore = match.details && match.details.awayScore !== null ? match.details.awayScore : '';
        const scoreDisplay = statusClass === 'finished' ? `${homeTeamScore} - ${awayTeamScore}` : 'vs';

        const matchTimeDisplay = match.details && match.details.date ? match.details.date : match.text.match(/(\d{2} \w{3} \d{4}|\w+ - Fecha \d+)$/)?.[0] || 'Fecha Desconocida';
        const competitionDisplay = match.details && match.details.competition ? match.details.competition : 'Liga BetPlay';
        const stadiumDisplay = match.details && match.details.stadium ? match.details.stadium : '';


        const homeLogoPath = getTeamLogoPath(homeTeamName);
        const awayLogoPath = getTeamLogoPath(awayTeamName);

        matchCard.innerHTML = `
            <div class="match-header">
                <span class="match-status ${statusClass}">${statusText}</span>
                <span class="match-time">${matchTimeDisplay}</span>
            </div>
            <div class="team-info">
                ${homeLogoPath ? `<img src="${homeLogoPath}" alt="${homeTeamName} Logo" class="team-logo" style="width: 40px; height: 40px;">` : ''}
                <span class="team-name">${homeTeamName}</span>
            </div>
            <div class="match-score">
                <span class="score">${scoreDisplay}</span>
            </div>
            <div class="team-info">
                ${awayLogoPath ? `<img src="${awayLogoPath}" alt="${awayTeamName} Logo" class="team-logo" style="width: 40px; height: 40px;">` : ''}
                <span class="team-name">${awayTeamName}</span>
            </div>
            <div class="match-details">
                ${stadiumDisplay ? `<span>${stadiumDisplay}</span>` : ''}
                <span>${competitionDisplay}</span>
            </div>
        `;
        return matchCard;
    }

    // Helper function to get team logo path
    function getTeamLogoPath(teamName) {
        const logoMap = {
            'Atlético Nacional': 'images/Nacional.webp',
            'Millonarios FC': 'images/millonarios.png',
            'América de Cali': 'images/America.png',
            'Deportes Tolima': 'images/tolima.png',
            'Bucaramanga': 'images/Bucaramanga.jpg',
            'Independiente Medellín': 'images/Medellin.png',
            'Junior FC': 'images/Junior.png',
            'Fortaleza CEIF': 'images/Fortaleza.png',
            'Llaneros FC': 'images/Llaneros.png',
            'Águilas Doradas': 'images/Aguilas.webp',
            'Alianza FC': 'images/Alianza.png',
            'Independiente Santa Fe': 'images/Santafe.png',
            'Deportivo Pereira': 'images/Pereira.png',
            'Once Caldas': 'images/Oncecaldas.jpg',
            'Unión Magdalena': 'images/UnionMagdalena.png',
            'Envigado FC': 'images/Envigado.png',
            'Deportivo Pasto': 'images/Pasto.jpg',
            'Boyacá Chicó FC': 'images/Boyaca.webp',
            'La Equidad Seguros': 'images/Equidad.png',
            'Deportivo Cali': 'images/DeportivoCali.png',
            'Alianza Valledupar': 'images/Alianza.png', // Assuming Alianza FC logo for Alianza Valledupar
            'Medellín': 'images/Medellin.png', // Alias for Independiente Medellín
            'Santa Fe': 'images/Santafe.png', // Alias for Independiente Santa Fe
            'Once Caldas': 'images/Oncecaldas.jpg',
            'Pereira': 'images/Pereira.png', // Alias for Deportivo Pereira
            'Junior': 'images/Junior.png', // Alias for Junior FC
            'La Equidad': 'images/Equidad.png', // Alias for La Equidad Seguros
            'Pasto': 'images/Pasto.jpg', // Alias for Deportivo Pasto
            'Envigado': 'images/Envigado.png', // Alias for Envigado FC
            'Boyacá Chicó': 'images/Boyaca.webp', // Alias for Boyacá Chicó FC
            'Unión Magdalena': 'images/UnionMagdalena.png' // Alias for Unión Magdalena
        };
        return logoMap[teamName] || null;
    }


    // Function to render matches into the specified grid
    function renderMatches(matches, containerId) {
        const container = document.querySelector(containerId);
        if (!container) return;

        container.innerHTML = ''; // Clear existing content
        const matchGrid = document.createElement('div');
        matchGrid.classList.add('match-grid');

        matches.forEach(match => {
            matchGrid.appendChild(createMatchCard(match));
        });
        container.appendChild(matchGrid);
    }

    // Example Usage: You would populate these arrays with actual data
    const recentMatchesData = [
        teamMatchData['Atlético Nacional'][0], // Example: first match of Nacional
        teamMatchData['Millonarios FC'][0], // Example: first match of Millonarios
        teamMatchData['Independiente Medellín'][0], // Example: first match of Medellín
        teamMatchData['Junior FC'][0], // Example: first match of Junior
        teamMatchData['Alianza FC'][0], // Example: first match of Alianza FC
    ];

    const upcomingMatchesData = [
        // Placeholder for upcoming matches
        { text: 'Atlético Nacional vs Millonarios (Liga BetPlay - Fecha 20)', result: 'upcoming', details: { date: '25 Nov 2025', time: '18:00', stadium: 'Estadio Atanasio Girardot', competition: 'Liga BetPlay', homeTeam: 'Atlético Nacional', awayTeam: 'Millonarios FC', homeScore: null, awayScore: null, homeLogo: 'images/Nacional.webp', awayLogo: 'images/millonarios.png', lineups: null, goals: null, events: null, playerRatings: null } },
        { text: 'Deportes Tolima vs Junior FC (Liga BetPlay - Fecha 20)', result: 'upcoming', details: { date: '26 Nov 2025', time: '20:00', stadium: 'Estadio Manuel Murillo Toro', competition: 'Liga BetPlay', homeTeam: 'Deportes Tolima', awayTeam: 'Junior FC', homeScore: null, awayScore: null, homeLogo: 'images/tolima.png', awayLogo: 'images/Junior.png', lineups: null, goals: null, events: null, playerRatings: null } },
        { text: 'América de Cali vs Deportivo Cali (Liga BetPlay - Fecha 20)', result: 'upcoming', details: { date: '27 Nov 2025', time: '17:30', stadium: 'Estadio Pascual Guerrero', competition: 'Liga BetPlay', homeTeam: 'América de Cali', awayTeam: 'Deportivo Cali', homeScore: null, awayScore: null, homeLogo: 'images/America.png', awayLogo: 'images/DeportivoCali.png', lineups: null, goals: null, events: null, playerRatings: null } },
        { text: 'Independiente Santa Fe vs La Equidad (Liga BetPlay - Fecha 20)', result: 'upcoming', details: { date: '28 Nov 2025', time: '16:00', stadium: 'Estadio El Campín', competition: 'Liga BetPlay', homeTeam: 'Independiente Santa Fe', awayTeam: 'La Equidad Seguros', homeScore: null, awayScore: null, homeLogo: 'images/Santafe.png', awayLogo: 'images/Equidad.png', lineups: null, goals: null, events: null, playerRatings: null } },
        { text: 'Once Caldas vs Envigado FC (Liga BetPlay - Fecha 20)', result: 'upcoming', details: { date: '29 Nov 2025', time: '19:00', stadium: 'Estadio Palogrande', competition: 'Liga BetPlay', homeTeam: 'Once Caldas', awayTeam: 'Envigado FC', homeScore: null, awayScore: null, homeLogo: 'images/Oncecaldas.jpg', awayLogo: 'images/Envigado.png', lineups: null, goals: null, events: null, playerRatings: null } }
    ];

    // Render matches on page load
    renderMatches(recentMatchesData, '#recent-results .match-grid-container');
    renderMatches(upcomingMatchesData, '#live-matches .match-grid-container');


    // Get the modal elements
    const matchDetailsModal = document.getElementById('matchDetailsModal');
    const closeButton = matchDetailsModal.querySelector('.close-button');
    const modalMatchDetails = document.getElementById('modal-match-details');

    // Function to open the modal and display match details
    function openMatchDetailsModal(match) {
        modalMatchDetails.innerHTML = ''; // Clear previous content

        if (match && match.details) {
            const details = match.details;

            let homeLogoHtml = details.homeLogo ? `<img src="${details.homeLogo}" alt="${details.homeTeam} Logo" class="team-logo">` : '';
            let awayLogoHtml = details.awayLogo ? `<img src="${details.awayLogo}" alt="${details.awayTeam} Logo" class="team-logo">` : '';

            let lineupsHtml = '';
            if (details.lineups && details.lineups.home && details.lineups.away) {
                lineupsHtml = `
                    <div class="lineups">
                        <h4>Alineaciones</h4>
                        <div class="match-info-grid">
                            <div>
                                <h5>${details.lineups.home.name}</h5>
                                <ul>
                                    ${details.lineups.home.players.map(player => `<li>${player}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <h5>${details.lineups.away.name}</h5>
                                <ul>
                                    ${details.lineups.away.players.map(player => `<li>${player}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            }

            let goalsHtml = '';
            if (details.goals && details.goals.length > 0) {
                goalsHtml = `
                    <div class="goals">
                        <h4>Goles</h4>
                        <ul>
                            ${details.goals.map(goal => `<li>${goal}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            let eventsHtml = '';
            if (details.events && details.events.length > 0) {
                eventsHtml = `
                    <div class="events">
                        <h4>Eventos</h4>
                        <ul>
                            ${details.events.map(event => `<li>${event}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            // Construct the modal content
            modalMatchDetails.innerHTML = `
                <h3>${details.homeTeam} ${details.homeScore !== null ? details.homeScore : 'vs'} ${details.awayScore !== null ? details.awayScore : ''} ${details.awayTeam}</h3>
                <div class="team-logos-modal">
                    ${homeLogoHtml}
                    ${awayLogoHtml}
                </div>
                <div class="match-info-grid">
                    <div><strong>Competición:</strong> ${details.competition}</div>
                    <div><strong>Fecha:</strong> ${details.date}</div>
                    ${details.time ? `<div><strong>Hora:</strong> ${details.time}</div>` : ''}
                    ${details.stadium ? `<div><strong>Estadio:</strong> ${details.stadium}</div>` : ''}
                </div>
                ${lineupsHtml}
                ${goalsHtml}
                ${eventsHtml}
            `;

            matchDetailsModal.style.display = 'flex'; // Show the modal
        } else {
            modalMatchDetails.innerHTML = '<p>No se encontraron detalles para este partido.</p>';
            matchDetailsModal.style.display = 'flex';
        }
    }

    // Function to close the modal
    function closeMatchDetailsModal() {
        matchDetailsModal.style.display = 'none';
    }

    // Event listeners for closing the modal
    closeButton.addEventListener('click', closeMatchDetailsModal);
    window.addEventListener('click', (event) => {
        if (event.target == matchDetailsModal) {
            closeMatchDetailsModal();
        }
    });

    // Delegate click events for match cards
    document.querySelectorAll('.matches-section').forEach(section => {
        section.addEventListener('click', (event) => {
            const matchCard = event.target.closest('.match-card');
            if (matchCard) {
                const matchText = matchCard.dataset.matchText; // Retrieve the full match text from a data attribute

                if (matchText) {
                    // Iterate through all teams to find the matching game
                    let clickedMatch = null;
                    for (const teamName in teamMatchData) {
                        const teamMatches = teamMatchData[teamName];
                        clickedMatch = teamMatches.find(match => match.text === matchText);
                        if (clickedMatch) {
                            break; // Found the match
                        }
                    }

                    if (clickedMatch) {
                        openMatchDetailsModal(clickedMatch);
                    } else {
                        console.error('Match data not found for:', matchText);
                        // Optionally, show a generic "no details" message in the modal
                        openMatchDetailsModal({ details: null });
                    }
                }
            }
        });
    });
});

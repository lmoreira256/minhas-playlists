// Fonte de dados das playlists.
// Edite este arquivo para atualizar playlists, estatísticas ou regras.
const DADOS = {
  "perfil": {
    "nome": "Lucas",
    "plataforma": "Spotify"
  },
  "regras": {
    "1": "Bandas — Emoji único da banda + nome. Somente músicas daquele artista.",
    "2": "Gênero/Tema — Emoji do tema + nome. Mix de vários artistas do mesmo estilo.",
    "3": "Músicas Curtidas — Toda música vai pra cá também. Caldeirão geral pro modo aleatório.",
    "4": "Duplicatas permitidas — Uma música pode estar em várias playlists ao mesmo tempo.",
    "5": "🎛️ Eletrônica = remixes e produções atuais. 🪩 Flashback = hits dançantes clássicos dos anos 80/90."
  },
  "estatisticas": {
    "total_playlists": 10,
    "total_bandas": 3,
    "total_generos": 7,
    "musicas_curtidas": 52,
    "musicas_em_bandas": 28,
    "musicas_em_generos": 35,
    "total_distribuidas": 63
  },
  "playlists": {
    "bandas": [
      {
        "nome": "Metallica",
        "emoji": "⚡",
        "spotify_id": "1e50vFtzg0rXBWY67Bky7T",
        "spotify_url": "https://open.spotify.com/playlist/1e50vFtzg0rXBWY67Bky7T",
        "genero": "Heavy Metal / Thrash Metal",
        "capa": "images/metallica.png",
        "quantidade_musicas": 15,
        "cor_barra": "fire"
      },
      {
        "nome": "Charlie Brown Jr.",
        "emoji": "🛹",
        "spotify_id": "7lHDPSOxxCJb8pELx3KPAm",
        "spotify_url": "https://open.spotify.com/playlist/7lHDPSOxxCJb8pELx3KPAm",
        "genero": "Rock / Skate Punk / Rap Rock",
        "capa": "images/charlie-brow-jr.png",
        "quantidade_musicas": 8,
        "cor_barra": "green"
      },
      {
        "nome": "Red Hot Chili Peppers",
        "emoji": "🌶️",
        "spotify_id": "2ub0qLpe9u3TgoHlxEc43F",
        "spotify_url": "https://open.spotify.com/playlist/2ub0qLpe9u3TgoHlxEc43F",
        "genero": "Funk Rock / Rock Alternativo",
        "capa": "images/rhcp.png",
        "quantidade_musicas": 5,
        "cor_barra": "red"
      }
    ],
    "genero_tema": [
      {
        "nome": "Rock & Metal",
        "emoji": "🔥",
        "spotify_id": "1DIRkI63o97Xk7uwfHUSr9",
        "spotify_url": "https://open.spotify.com/playlist/1DIRkI63o97Xk7uwfHUSr9",
        "descricao": "Mix de vários artistas",
        "tipo": "Gênero",
        "capa": "images/rock-metal.png",
        "quantidade_musicas": 12,
        "cor_barra": "orange"
      },
      {
        "nome": "Musicas de Filmes",
        "emoji": "🍿",
        "spotify_id": "06WIjyV1YAv9zy65ZV6Fct",
        "spotify_url": "https://open.spotify.com/playlist/06WIjyV1YAv9zy65ZV6Fct",
        "descricao": "Trilhas sonoras",
        "tipo": "Tema",
        "capa": "images/filmes.png",
        "quantidade_musicas": 7,
        "cor_barra": "gold"
      },
      {
        "nome": "Eletrônica",
        "emoji": "🎛️",
        "spotify_id": "6eVHVXJ7v5XZ7gHJFF83cC",
        "spotify_url": "https://open.spotify.com/playlist/6eVHVXJ7v5XZ7gHJFF83cC",
        "descricao": "Remixes & produções",
        "tipo": "Gênero",
        "capa": "images/eletronica.png",
        "quantidade_musicas": 4,
        "cor_barra": "cyan"
      },
      {
        "nome": "Clássicos",
        "emoji": "⏳",
        "spotify_id": "61aLbXXeqHJe5q3WsWLHOV",
        "spotify_url": "https://open.spotify.com/playlist/61aLbXXeqHJe5q3WsWLHOV",
        "descricao": "Músicas atemporais",
        "tipo": "Tema",
        "capa": "images/classicos.png",
        "quantidade_musicas": 3,
        "cor_barra": "purple"
      },
      {
        "nome": "Flashback",
        "emoji": "🪩",
        "spotify_id": "68yhRQ5TdaViDLGaIlRoB0",
        "spotify_url": "https://open.spotify.com/playlist/68yhRQ5TdaViDLGaIlRoB0",
        "descricao": "Hits anos 80 / 90",
        "tipo": "Tema",
        "capa": null,
        "quantidade_musicas": 4,
        "cor_barra": "pink"
      },
      {
        "nome": "Pop Rock",
        "emoji": "🎤",
        "spotify_id": "5A3KxorisdsKTbtdMqgxeW",
        "spotify_url": "https://open.spotify.com/playlist/5A3KxorisdsKTbtdMqgxeW",
        "descricao": "Pop rock nacional & internacional",
        "tipo": "Gênero",
        "capa": null,
        "quantidade_musicas": 3,
        "cor_barra": "blue"
      },
      {
        "nome": "Games",
        "emoji": "🎮",
        "spotify_id": "41fJUVNI7pQPECZP8uEHk0",
        "spotify_url": "https://open.spotify.com/playlist/41fJUVNI7pQPECZP8uEHk0",
        "descricao": "Músicas de videogames",
        "tipo": "Tema",
        "capa": null,
        "quantidade_musicas": 2,
        "cor_barra": "teal"
      }
    ],
    "geral": [
      {
        "nome": "Músicas Curtidas",
        "emoji": "💜",
        "spotify_id": null,
        "spotify_url": null,
        "descricao": "Todas as músicas • Aleatório",
        "capa": null,
        "quantidade_musicas": 52
      }
    ]
  },
  "musicas_classificadas": [
    { "musica": "Amarillo By Morning - Club Version", "artista": "Y.O.G.A., Middy Nelson",  "playlists": ["🎛️ Eletrônica"] },
    { "musica": "We Are The World",                   "artista": "USA for Africa",           "playlists": ["⏳ Clássicos"] },
    { "musica": "Real Gone",                           "artista": "Sheryl Crow",              "playlists": ["🍿 Musicas de Filmes", "🔥 Rock & Metal"] },
    { "musica": "Coco Jamboo",                         "artista": "Mr. President",            "playlists": ["🪩 Flashback"] },
    { "musica": "Danger Zone",                         "artista": "Kenny Loggins",            "playlists": ["🍿 Musicas de Filmes", "🔥 Rock & Metal"] },
    { "musica": "A Aposta",                            "artista": "Luka",                     "playlists": ["🎤 Pop Rock"] },
    { "musica": "Video Games",                         "artista": "Tenacious D",              "playlists": ["🎮 Games"] },
    { "musica": "Break My Stride",                     "artista": "Matthew Wilder",           "playlists": ["🪩 Flashback"] },
    { "musica": "Live Is Life",                        "artista": "Opus",                     "playlists": ["🪩 Flashback", "⏳ Clássicos"] },
    { "musica": "Karma Chameleon",                     "artista": "Culture Club",             "playlists": ["🪩 Flashback"] }
  ]
};

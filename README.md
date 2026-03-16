# 🎧 Minhas Playlists — Spotify • Lucas

Página web para visualização das minhas playlists do Spotify, com capas personalizadas, player embutido e estatísticas.

## 📁 Estrutura do projeto

```
minhas-playlists/
├── index.html          # Página principal (imagens em base64)
├── dados.json          # Dados de todas as playlists, regras e músicas
├── README.md           # Este arquivo
└── images/             # Capas das playlists (PNG originais)
    ├── metallica.png
    ├── rock-metal.png
    ├── filmes.png
    ├── rhcp.png
    ├── eletronica.png
    └── classicos.png
```

## 🎵 Playlists

### Bandas
| Emoji | Nome | Gênero |
|-------|------|--------|
| ⚡ | Metallica | Heavy Metal / Thrash Metal |
| 🛹 | Charlie Brown Jr. | Rock / Skate Punk / Rap Rock |
| 🌶️ | Red Hot Chili Peppers | Funk Rock / Rock Alternativo |

### Gênero / Tema
| Emoji | Nome | Descrição |
|-------|------|-----------|
| 🔥 | Rock & Metal | Mix de vários artistas |
| 🍿 | Musicas de Filmes | Trilhas sonoras |
| 🎛️ | Eletrônica | Remixes & produções |
| ⏳ | Clássicos | Músicas atemporais |
| 🪩 | Flashback | Hits anos 80/90 |
| 🎤 | Pop Rock | Pop rock nacional & internacional |
| 🎮 | Games | Músicas de videogames |

### Geral
| Emoji | Nome | Descrição |
|-------|------|-----------|
| 💜 | Músicas Curtidas | Todas as músicas no aleatório |

## 📋 Regras de organização

1. **Bandas** — Emoji único + nome. Somente músicas daquele artista.
2. **Gênero/Tema** — Emoji do tema + nome. Mix de vários artistas.
3. **Músicas Curtidas** — Toda música vai pra cá. Caldeirão geral.
4. **Duplicatas permitidas** — Uma música pode estar em várias playlists.
5. **🎛️ Eletrônica** = remixes atuais. **🪩 Flashback** = hits clássicos 80/90.

## ✏️ Como atualizar

- Edite `dados.json` para atualizar quantidades, adicionar playlists ou músicas
- Adicione novas capas na pasta `images/`
- O `index.html` possui as imagens em base64 (autossuficiente)

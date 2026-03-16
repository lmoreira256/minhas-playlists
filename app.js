const SPOTIFY_EMBED_BASE = 'https://open.spotify.com/embed/playlist';
const SPOTIFY_URL_BASE   = 'https://open.spotify.com/playlist';

let activeCard = null;

// ── Render ──────────────────────────────────────────────────────────────────

function renderHeader(data) {
  const { perfil, estatisticas } = data;

  document.querySelector('.header p').textContent =
    `${perfil.plataforma} • ${perfil.nome}`;

  document.querySelector('.stats-bar').innerHTML = `
    <div class="stat">
      <div class="stat-number">${estatisticas.total_bandas}</div>
      <div class="stat-label">Bandas</div>
    </div>
    <div class="stat">
      <div class="stat-number">${estatisticas.total_generos}</div>
      <div class="stat-label">Gênero / Tema</div>
    </div>
    <div class="stat">
      <div class="stat-number">${estatisticas.total_playlists}</div>
      <div class="stat-label">Playlists</div>
    </div>
  `;
}

function renderDashboard(estatisticas) {
  const cards = [
    { icon: '🎵', value: estatisticas.musicas_curtidas,   label: 'Músicas Curtidas',   highlight: true },
    { icon: '🎸', value: estatisticas.musicas_em_bandas,  label: 'Músicas em Bandas',  highlight: false },
    { icon: '🎵', value: estatisticas.musicas_em_generos, label: 'Músicas em Gêneros', highlight: false },
    { icon: '📊', value: `~${estatisticas.total_distribuidas}`, label: 'Total Distribuídas', highlight: false },
  ];

  document.getElementById('dashboard').innerHTML = cards.map(card => `
    <div class="dash-card ${card.highlight ? 'highlight' : ''}">
      <div class="dash-icon">${card.icon}</div>
      <div class="dash-value">${card.value}</div>
      <div class="dash-label">${card.label}</div>
    </div>
  `).join('');
}

function renderBreakdown(playlists) {
  const all = [
    ...playlists.bandas,
    ...playlists.genero_tema,
  ];

  const max = Math.max(...all.map(p => p.quantidade_musicas));

  const rows = all.map(playlist => {
    const pct = Math.round((playlist.quantidade_musicas / max) * 100);
    return `
      <div class="bar-row">
        <span class="bar-label">${playlist.emoji} ${playlist.nome}</span>
        <div class="bar-track">
          <div class="bar-fill ${playlist.cor_barra}" style="width: ${pct}%">
            ${playlist.quantidade_musicas}
          </div>
        </div>
        <span class="bar-count">${playlist.quantidade_musicas}</span>
      </div>
    `;
  }).join('');

  document.getElementById('breakdown').innerHTML = `
    <div class="breakdown-title">📊 MÚSICAS POR PLAYLIST</div>
    ${rows}
  `;
}

function renderPlaylistCard(playlist, type) {
  const tagClass = { band: 'tag-band', genre: 'tag-genre', general: 'tag-general' }[type];
  const tagLabel = { band: 'Banda', genre: 'Gênero', general: 'Geral' }[type];

  const cover = playlist.capa
    ? `<img src="${playlist.capa}" alt="${playlist.nome}" loading="lazy">`
    : `<div class="card-cover-placeholder">${playlist.emoji}</div>`;

  const subtitle = playlist.genero || playlist.descricao || '';

  const clickable = playlist.spotify_id
    ? `onclick="openPlaylist('${playlist.spotify_id}', '${playlist.emoji} ${playlist.nome}', this)"`
    : '';

  return `
    <div class="playlist-card" ${clickable}>
      <div class="card-cover">
        ${cover}
        ${playlist.spotify_id ? `
          <div class="play-overlay">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        ` : ''}
      </div>
      <div class="card-info">
        <div class="card-name">
          <span class="card-emoji">${playlist.emoji}</span>${playlist.nome}
        </div>
        <div class="card-type">${subtitle}</div>
        <span class="card-tag ${tagClass}">${tagLabel}</span>
      </div>
    </div>
  `;
}

function renderSection(containerId, title, emoji, playlists, type) {
  const count = playlists.length;
  const cards = playlists.map(p => renderPlaylistCard(p, type)).join('');

  document.getElementById(containerId).innerHTML = `
    <div class="section-header">
      <span class="section-emoji">${emoji}</span>
      <span class="section-title">${title}</span>
      <span class="section-count">${count} playlist${count !== 1 ? 's' : ''}</span>
      <div class="section-line"></div>
    </div>
    <div class="playlist-grid">${cards}</div>
  `;
}

function renderRules(regras) {
  const items = Object.entries(regras).map(([num, texto]) => `
    <div class="rule">
      <span class="rule-number">${num}</span>
      <span class="rule-text">${texto}</span>
    </div>
  `).join('');

  document.getElementById('rules').innerHTML = `
    <div class="rules-title">📋 REGRAS DE ORGANIZAÇÃO</div>
    ${items}
  `;
}

// ── Modal ────────────────────────────────────────────────────────────────────

function openPlaylist(playlistId, title, cardEl) {
  if (activeCard) activeCard.classList.remove('active');
  cardEl.classList.add('active');
  activeCard = cardEl;

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('spotifyEmbed').src =
    `${SPOTIFY_EMBED_BASE}/${playlistId}?utm_source=generator&theme=0`;
  document.getElementById('spotifyLink').href = `${SPOTIFY_URL_BASE}/${playlistId}`;

  document.getElementById('modalOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;

  document.getElementById('modalOverlay').classList.remove('show');
  document.getElementById('spotifyEmbed').src = '';
  document.body.style.overflow = '';

  if (activeCard) {
    activeCard.classList.remove('active');
    activeCard = null;
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Bootstrap ────────────────────────────────────────────────────────────────

async function init() {
  const response = await fetch('dados.json');
  const data = await response.json();

  renderHeader(data);
  renderDashboard(data.estatisticas);
  renderBreakdown(data.playlists);
  renderSection('section-bandas',  'BANDAS',       '🎸', data.playlists.bandas,       'band');
  renderSection('section-generos', 'GÊNERO / TEMA', '🎵', data.playlists.genero_tema,  'genre');
  renderSection('section-geral',   'GERAL',         '💜', data.playlists.geral,         'general');
  renderRules(data.regras);
}

init();

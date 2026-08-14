import { useApp } from '../hooks/useApp';
import { useDivaAccent } from '../hooks/useDivaAccent';
import { getAllCharacters, getExtraCharacters } from '../data';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import FlipCard from '../components/FlipCard';

function CharFlipCard({ char, onAccentSelect }) {
  const { t } = useApp();

  return (
    <FlipCard
      className={`char-flip diva-flip-card ${char.id}-card`}
      accent={char.accent}
      ariaLabel={`${char.name} profile card`}
      onFlip={() => onAccentSelect(char.accent)}
    >
      <div className="char-flip-front" style={{ borderColor: char.accent + '66' }}>
        <img src={char.img} alt={char.alt} />
        <div className="char-name-overlay">{char.name}</div>
      </div>
      <div className="char-flip-back">
        <p className="char-back-name" style={{ color: char.accent }}>{char.name}</p>
        <p className="char-code">{char.code} &nbsp;·&nbsp; {char.voice}</p>

        <div className="char-stat-row">
          <span className="char-stat-label">{t('lbl_voice_by')}</span>
          <span className="char-stat-val">{t(char.voiceByKey)}</span>
        </div>
        <div className="char-stat-row">
          <span className="char-stat-label">{t('lbl_released')}</span>
          <span className="char-stat-val">{t(char.releasedKey)}</span>
        </div>
        <div className="char-stat-row">
          <span className="char-stat-label">{t('lbl_height')}</span>
          <span className="char-stat-val">{t(char.heightKey)}</span>
        </div>
        <div className="char-stat-row">
          <span className="char-stat-label">{t('lbl_signature')}</span>
          <span className="char-stat-val">{t(char.signatureKey)}</span>
        </div>
        <p className="char-songs-title">{t('lbl_iconic_songs')}</p>
        <ul className="char-songs-list">
          {char.songs.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </FlipCard>
  );
}

export default function Characters() {
  const { t } = useApp();
  const { setAccent } = useDivaAccent();
  return (
    <>
      <PageHero title={t('chars_title')} sub={t('chars_page_sub')} />

      <main id="main">
        {/* ── CRYPTON 6 ── */}
        <div className="chars-section-label">
          <span>{t('tab_main')}</span>
        </div>
        <div className="char-grid">
          {getAllCharacters().map(c => <CharFlipCard key={c.id} char={c} onAccentSelect={setAccent} />)}
        </div>

        {/* ── EXTRA ── */}
        <div className="chars-section-label chars-section-label--extra">
          <span>{t('tab_extra')}</span>
        </div>
        <div className="char-grid char-grid--extra">
          {getExtraCharacters().map(c => <CharFlipCard key={c.id} char={c} onAccentSelect={setAccent} />)}
        </div>
      </main>

      <Footer extra={
        <span style={{ color: 'var(--muted)', fontSize: '12px' }}>
          {t('footer_chars_src')}
        </span>
      } />
    </>
  );
}

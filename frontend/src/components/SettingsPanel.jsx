import { useEffect, useRef } from 'react';
import { useApp } from '../hooks/useApp';

/**
 * Accessible settings surface using native HTML5 <dialog>.
 * - showModal() provides focus trap + inert background for screen readers
 * - ESC and ::backdrop click close via dialog close / cancel events
 */
export default function SettingsPanel({ open, onClose }) {
  const { theme, setTheme, lang, setLang, t } = useApp();
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleDialogClose = () => {
    onClose();
  };

  const handleBackdropClick = (e) => {
    // Clicks on the dialog element itself (not children) = backdrop area
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      id="settings-panel"
      className="settings-dialog"
      aria-labelledby="settings-dialog-title"
      onClose={handleDialogClose}
      onClick={handleBackdropClick}
    >
      <div
        className="settings-drawer"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="settings-header">
          <span id="settings-dialog-title">{t('settings_title')}</span>
          <button
            type="button"
            className="settings-close"
            onClick={() => dialogRef.current?.close()}
            aria-label={t('settings_close')}
          >
            ✕
          </button>
        </div>
        <div className="settings-body">
          <div className="settings-group">
            <p className="settings-label" id="settings-theme-label">
              {t('settings_theme')}
            </p>
            <div
              className="settings-row"
              role="group"
              aria-labelledby="settings-theme-label"
            >
              {['dark', 'light'].map((th) => (
                <button
                  key={th}
                  type="button"
                  className={`settings-theme-opt${theme === th ? ' active' : ''}`}
                  data-theme={th}
                  aria-pressed={theme === th}
                  onClick={() => setTheme(th)}
                >
                  {t(`settings_${th}`)}
                </button>
              ))}
            </div>
          </div>
          <div className="settings-group">
            <p className="settings-label" id="settings-lang-label">
              {t('settings_lang')}
            </p>
            <div
              className="settings-row"
              role="group"
              aria-labelledby="settings-lang-label"
            >
              <button
                type="button"
                className={`lang-opt${lang === 'en' ? ' active' : ''}`}
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                {t('settings_lang_en')}
              </button>
              <button
                type="button"
                className={`lang-opt${lang === 'vi' ? ' active' : ''}`}
                aria-pressed={lang === 'vi'}
                onClick={() => setLang('vi')}
              >
                {t('settings_lang_vi')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

import { useTranslation } from 'react-i18next';
import './App.css'

function App() {

  const {t, i18n} = useTranslation();

  return (
    <main className="poc-page">
      <div className="topbar">
        <label className="language-picker">
          <span className="sr-only">{t('app.languagePickerLabel')}</span>
          <select
            value={i18n.language || 'en'}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </label>
      </div>

      <section className="hero-card">
        <p className="eyebrow">{t('app.subtitle')}</p>
        <h1>{t('app.title')}</h1>
        <p>
          {t('app.description')}
        </p>

        <div className="actions">
          <button type="button">{t('buttons.getStarted')}</button>
          <button type="button" className="secondary">
            {t('buttons.learnMore')}
          </button>
        </div>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>{t('app.headline')}</h2>
          <p>
            {t('app.headLineParagraph')}
          </p>
          <label className="field">
            <span>{t('app.namePlaceholder')}</span>
            <input type="text" placeholder={t('app.nameInputPlaceholder')} />
          </label>
        </article>

        <article className="card">
          <h2>{t('app.callToActionHeadline')}</h2>
          <p>
            {t('app.callToActionParagraph')}
          </p>
          <label className="field">
            <span>{t('app.emailPlaceholder')}</span>
            <input type="email" placeholder={t('app.emailInputPlaceholder')} />
          </label>
          <button type="button" className="full-width">
            {t('buttons.submit')}
          </button>
        </article>
      </section>

    </main>
  )
}

export default App

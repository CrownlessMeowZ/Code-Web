import { Component } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../i18n';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary', error, info);
  }

  handleRetry = () => {
    this.setState({ error: null });
  };

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <main className="page-transition inner-page" style={{ paddingTop: 'var(--topbar-h)' }}>
        <section className="page-hero">
          <h1 className="page-hero-title">{i18n.t('error_boundary_title')}</h1>
          <p className="page-hero-sub">{i18n.t('error_boundary_sub')}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            <button type="button" className="undo-btn" onClick={this.handleRetry} style={{ margin: 0 }}>
              {i18n.t('error_boundary_retry')}
            </button>
            <Link to="/" className="undo-btn" style={{ margin: 0, textDecoration: 'none' }}>
              {i18n.t('error_boundary_home')}
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

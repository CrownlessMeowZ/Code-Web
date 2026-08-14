import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/app-context';

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  const { t } = useTranslation();
  return { ...ctx, t };
}
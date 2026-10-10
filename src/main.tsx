import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for complete offline functionality
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('Kundin Mulki AI: Sabon abu ya samu, ana sabuntawa...');
  },
  onOfflineReady() {
    console.log('Kundin Mulki AI: App yana aiki 100% Offline ba tare da intanet ba!');
  },
});

createRoot(document.getElementById('root')!).render(<App />);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.scss';
import App from '@/app/App';

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <>
    <App />
  </>
=======
  <StrictMode>
    <App />
  </StrictMode>
>>>>>>> e3dabfc180839a4b015ec9f64f1c223a8d7cde27
);

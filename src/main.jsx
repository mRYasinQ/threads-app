import { createRoot } from 'react-dom/client';

import './styles/app.css';

import App from './App.jsx';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<App />);

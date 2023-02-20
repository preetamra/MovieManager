import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from './Auth/Auth0ProviderWithHistory';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
    </BrowserRouter>);

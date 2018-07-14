import React from 'react';
import '../styles/loadingPage.css';

const styles = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
}

const LoadingPage = () => (
    <div style={styles}>
        <div>
            {/*<img className="loading-logo" src="/images/logo.png" alt="logo" />*/}
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
    </div>
);

export default LoadingPage;
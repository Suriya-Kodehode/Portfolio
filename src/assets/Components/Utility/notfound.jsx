import { Link } from 'react-router-dom';
import { useMode } from '../toggleTheme/ThemeContext.jsx';

const NotFound = () => {
    const modeContext = useMode();
    const { mode } = modeContext || { mode: 'light' };
    const isLight = mode === 'light';

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '100vw',
            minHeight: '90vh',
            padding: '2rem',
            textAlign: 'center',
        },
        errorCode: {
            fontSize: '6rem',
            fontWeight: 'bold',
            color: isLight ? '#ddd' : '#555',
            margin: '0',
            opacity: 0.3,
            userSelect: 'none'
        },
        title: {
            fontSize: '4rem',
            fontWeight: 'bold',
            color: isLight ? '#ff6b6b' : '#ff7979',
            margin: '0',
            textShadow: isLight 
                ? '2px 2px 4px rgba(0, 0, 0, 0.2)' 
                : '2px 2px 4px rgba(255, 255, 255, 0.3)'
        },
        subtitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-color)',
            margin: '0'
        },
        message: {
            fontSize: '1.1rem',
            color: 'var(--text-color)',
            opacity: 0.8,
            maxWidth: '500px',
            lineHeight: '1.6',
            marginBottom: '1rem'
        },
        button: {
            display: 'inline-block',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: '500',
            color: isLight ? '#ffffff' : '#000000',
            backgroundColor: isLight ? '#4285f4' : '#74b9ff',
            border: 'none',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: isLight 
                ? '0 4px 12px rgba(66, 133, 244, 0.3)' 
                : '0 4px 12px rgba(116, 185, 255, 0.3)'
        }
    };

    const handleMouseEnter = (e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = isLight 
            ? '0 6px 16px rgba(66, 133, 244, 0.4)' 
            : '0 6px 16px rgba(116, 185, 255, 0.4)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = styles.button.boxShadow;
    };

    return (
        <div style={styles.container}>
            <div style={styles.errorCode}>404</div>
            <h1 style={styles.title}>Page Not Found</h1>
            <h2 style={styles.subtitle}>Oops! This page doesn't exist</h2>
            <p style={styles.message}>
                The page you're looking for might have been moved, deleted, or you entered the wrong URL. 
                Don't worry, you can navigate back to the homepage.
            </p>
            <Link 
                to="/" 
                style={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;

import './Header.css';
import Navigation from './Navigation';

export default function Header() {
    return (
        <div className='header-container'>
            <h1 className='header-title'>Brendan Trepal</h1>
            <Navigation />
        </div>
    );
}
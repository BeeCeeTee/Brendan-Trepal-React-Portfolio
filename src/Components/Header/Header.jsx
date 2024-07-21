import { useState } from 'react';
import './Header.css';
import Navigation from './Navigation';

const handlePageChange = (page) => setCurrentPage(page);

export default function Header() {
    return (
        <div className='header-container'>
            <h1 className='title'>Brendan Trepal</h1>
            <Navigation />
        </div>
    );
}
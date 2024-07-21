import { useState } from 'react';
import Navigation from './Navigation';

const handlePageChange = (page) => setCurrentPage(page);

export default function Header() {
    return (
        <div>
            <h1>Brendan Trepal</h1>
            <Navigation />
        </div>
    );
}
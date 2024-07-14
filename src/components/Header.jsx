import { useState } from 'react';
import Navigation from './Navigation';

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
)

export default Header;
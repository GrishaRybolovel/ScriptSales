import React from 'react';
import '../../App.css';

const Sidebar = ({ setActivePage }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={() => setActivePage('dashboard')}>Показатели</div>
            <div className="sidebar-item" onClick={() => setActivePage('users')}>Пользователи</div>
        </div>
    );
}

export default Sidebar;
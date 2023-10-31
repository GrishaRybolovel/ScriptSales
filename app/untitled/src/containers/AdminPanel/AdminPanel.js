import React, {useState} from 'react';
import '../../App.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Content from "../Content/Content";
// import handleSearch from "../../utils/Variables";

const AdminPanel = () => {
    const [activePage, setActivePage] = useState('dashboard');



    return (
        <div className="admin-panel">
            <div className="admin-title">LostSales</div>
            <Sidebar setActivePage={setActivePage} />
            <div className="main-content">
                <Header activePage={activePage} />
                <Content activePage={activePage} />
            </div>
        </div>
    );
}

export default AdminPanel;
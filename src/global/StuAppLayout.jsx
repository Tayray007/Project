import React from 'react';
import StuSidebar from '../pages/Student/Studentsidebar';
import Topbar from './Topbar';
import PageContent from './PageContent';
import { Outlet } from 'react-router-dom';

// import Sidebar from '../pages/Student/MockSideBar';

const StuAppLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ flex: 2 }}>
        <StuSidebar />
       {/* <Sidebar/> */}
      </div>

      {/* Content Area */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 8 }}>
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div style={{ flex: 1 }}>
        <PageContent/>
        
        
        </div>
      </div>
    </div>
  );
};

export default StuAppLayout;

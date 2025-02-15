'use client';

import React, { useState } from 'react';

import RecentTickets from './RecentTickets';

import TopConsultants from './TopConsultants';
import DashboardStats from './DashboardStats';
import DynamicChart from './DynamicChart';
import TopSessions from './TopSessions';

import './customScrollbar.css'; // Import custom scrollbar styles
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Dashboard({sampleData} : any) {

  return (
     
      <div style={{ width: '100%' }}>
        
        <DashboardStats />
        <div className="dashboard-grid-container" >
          <div>
            <RecentTickets />
          </div>
          <div>
            <TopConsultants />
          </div>
          <div>
            <DynamicChart />
          </div>
          <div>
            <TopSessions />
          </div>
        </div>
      </div>
  );
}

import React from 'react';
import ProtectedRoutes from '../component/ProtectedRoutes';

function Settings() {
  return (
    <ProtectedRoutes>
      <div style={{ padding: '2rem' }}>
        <h1>Settings</h1>
        <p>Settings page coming soon...</p>
      </div>
    </ProtectedRoutes>
  );
}

export default Settings;

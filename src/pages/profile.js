import React from 'react';
import ProtectedRoutes from '../component/ProtectedRoutes';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <ProtectedRoutes>
      <div style={{ padding: '2rem' }}>
        <h1>Profile</h1>
        {user && (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Email Verified:</strong> {user.isEmailVerified ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </ProtectedRoutes>
  );
}

export default Profile;

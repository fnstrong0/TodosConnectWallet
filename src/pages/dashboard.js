import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../store/slices/authSlice';
import ProtectedRoutes from '../component/ProtectedRoutes';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isAuthenticated, user]);

  return (
    <ProtectedRoutes>
      <div style={{ padding: '2rem' }}>
        <h1>Dashboard</h1>
        {user && (
          <div>
            <p>Welcome, {user.name}!</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        )}
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => navigate('/profile')}
            style={{
              padding: '0.5rem 1rem',
              marginRight: '1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Profile
          </button>
          <button
            onClick={() => navigate('/logout')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </ProtectedRoutes>
  );
}

export default Dashboard;

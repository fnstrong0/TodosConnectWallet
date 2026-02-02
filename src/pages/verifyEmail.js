import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { verifyEmail } from '../api/authApi';

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const token = searchParams.get('token');

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setMessage('Invalid verification token');
        setIsLoading(false);
        return;
      }

      try {
        const response = await verifyEmail(token);
        setMessage(response.message || 'Email verified successfully!');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } catch (error) {
        setMessage(error.message || 'Verification failed');
      } finally {
        setIsLoading(false);
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Email Verification</h2>
        
        {isLoading ? (
          <div>Verifying email...</div>
        ) : (
          <>
            <div style={{
              backgroundColor: message.includes('success') ? '#efe' : '#fee',
              color: message.includes('success') ? '#3c3' : '#c33',
              padding: '0.75rem',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              {message}
            </div>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
              Go to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;

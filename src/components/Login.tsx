import React, { useState } from 'react';
import { signInWithGoogle } from '@site/src/firebase/auth';
import Link from '@docusaurus/Link';

interface LoginProps {
  buttonText?: string;
}

const Login: React.FC<LoginProps> = ({ buttonText = 'Sign in with Google' }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
    } catch (error) {
      console.error('Error during sign-in: ', error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <div />
      ) : (
        <div style={{ textAlign: 'left' }}>
          <Link
            className="button button--primary button--md"
            onClick={handleLogin}
          >
            {loading ? 'Signing in...' : buttonText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;

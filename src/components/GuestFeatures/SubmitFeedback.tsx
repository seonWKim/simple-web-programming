import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import Login from '@site/src/components/Login';
import Link from '@docusaurus/Link';
import { getUser } from '@site/src/firebase/auth';
import { saveFeedback } from '@site/src/firebase/store/feedback';

const SubmitFeedback: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getUser();
            setUser(currentUser);
        };
        fetchUser();
    }, []);

    const handleFeedbackSubmit = async () => {
        if (user) {
            const name = user.displayName || 'Anonymous';
            const email = user.email || 'No email provided';
            const photoURL = user.photoURL
            await saveFeedback(name, email, photoURL, feedback);
            setFeedback('');
        }

        window.location.reload()
    };

    if (!user) {
        return <Login buttonText={'Sign in with Google to give us feedbacks'} />;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
        <textarea
            placeholder="Best toastmaster meetings ever!!"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="form-control"
            style={{
                width: '100%',
                height: '100px',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da',
                fontSize: '16px',
            }}
        />
                <div style={{ alignSelf: 'flex-end' }}>
                    <Link
                        className="button button--primary button--md"
                        onClick={handleFeedbackSubmit}
                    >
                        Submit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubmitFeedback;

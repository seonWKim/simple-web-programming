import React, { useCallback, useEffect, useState } from 'react';
import { findFeedbacks } from '@site/src/firebase/store/feedback';
import { Feedback } from '@site/src/types/Feedback';
import './FeedbackList.css';

const fallbackAvatarLinks = [
  'https://drive.google.com/thumbnail?id=1Eoic8f4bCxZDfuuHOBx9iW6l09j-s1JN',
  'https://drive.google.com/thumbnail?id=14Ql_1qh32UQ2BisuTIz5dAJhZ2kDOqQ1',
  'https://drive.google.com/thumbnail?id=1FCszMH0dE69p3ii3vgH0rwbbCv08p4Nk',
  'https://drive.google.com/thumbnail?id=1K0ckzE1jJVwkLS6H70BdLgPX5PlikVjZ',
];

const getRandomAvatar = () => {
  const index = Math.floor(Math.random() * fallbackAvatarLinks.length);
  return fallbackAvatarLinks[index];
};

const formattedString = (date: Date): string => {
  const createdAtSeconds = date.seconds;
  const createdAtDate = new Date(createdAtSeconds * 1000);
  return createdAtDate.toLocaleDateString('en-CA');
};

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleFeedbacks, setVisibleFeedbacks] = useState<Feedback[]>([]);
  const pageSize = 10;
  const rotationInterval = 3000; // New comment appears every 3 seconds

  const fetchFeedbacks = useCallback(async () => {
    const newFeedbacks = await findFeedbacks(pageSize);
    setFeedbacks(newFeedbacks.map(it => ({
      ...it,
      photoURL: it.photoURL ? it.photoURL : getRandomAvatar()
    })));
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  useEffect(() => {
    if (feedbacks.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      }, rotationInterval);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [feedbacks]);

  useEffect(() => {
    if (feedbacks.length > 0) {
      if (feedbacks.length > pageSize) {
        setVisibleFeedbacks(
            Array.from({ length: pageSize }).map(
                (_, i) => feedbacks[(currentIndex + i) % feedbacks.length]
            )
        );
      } else {
        setVisibleFeedbacks(feedbacks)
      }
    }
  }, [feedbacks, currentIndex, pageSize]);

  return (
      <div className="feedback-list">
        <div className="feedback-carousel">
          {visibleFeedbacks.map((feedback, index) => (
              <div
                  key={index}
                  className="feedback-item"
                  style={{
                    animation: `slideIn 0.8s ease forwards`, // Apply slide animation for new items
                  }}
              >
                <div className="avatar-container">
                  <img
                      src={feedback?.photoURL}
                      alt={feedback?.name}
                      className="avatar"
                  />
                </div>
                <div className="content-container">
                  <div className="author-name">{feedback?.name}</div>
                  <div className="comment-content">{feedback?.content}</div>
                  <div className="timestamp">
                    {formattedString(feedback?.createdAt)}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default FeedbackList;

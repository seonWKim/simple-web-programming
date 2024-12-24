// src/firebase/store/feedback.ts
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@site/src/firebase/config';
import { Feedback } from '@site/src/types/Feedback';
import { v7 as uuidv7 } from 'uuid';

const guestFeedbackCollection = collection(db, '/guest-feedback');

export const saveFeedback = async (
    name: string,
    email: string,
    photoURL: string | null,
    content: string
) => {
  try {
    await addDoc(guestFeedbackCollection, {
      id: uuidv7(),
      name: name,
      email: email,
      photoURL: photoURL,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (e) {
    console.error('Error adding feedback: ', e);
  }
};

export const findFeedbacks = async (
  pageSize: number,
  latestIdSeen?: string
) => {
  let feedbacksQuery;

  if (latestIdSeen) {
    feedbacksQuery = query(
      guestFeedbackCollection,
      where('id', '<', latestIdSeen),
      orderBy('id', 'desc'),
      limit(pageSize)
    );
  } else {
    feedbacksQuery = query(
      guestFeedbackCollection,
      orderBy('id', 'desc'),
      limit(pageSize)
    );
  }

  try {
    const querySnapshot = await getDocs(feedbacksQuery);
    const feedbacks: Feedback[] = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Feedback;
      return {
        ...data,
      };
    });

    return feedbacks;
  } catch (e) {
    console.error('Error fetching feedbacks: ', e);
    return [];
  }
};

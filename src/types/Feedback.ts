export interface Feedback {
  id: string;
  name: string;
  email: string;
  photoURL: string | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

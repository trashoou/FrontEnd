import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface UserData {
  id: number;
  email: string;
  username: string;
  password: string;
}

function UserDetails(): JSX.Element {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (response.ok) {
          const userData: UserData = await response.json();
          setUser(userData);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Отобразите другую информацию о пользователе */}
    </div>
  );
}

export default UserDetails;

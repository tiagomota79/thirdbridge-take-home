'use client';
import { useState, useEffect } from 'react';
import FriendCard from './friend-card';
import { Loader } from 'lucide-react';
import { getUserFriends } from '@/lib/actions/user.actions';
import { User } from '@/types';

const FriendsSection = ({ userId }: { userId: number }) => {
  // This section simulates a slow API response
  const [friends, setFriends] = useState<User[]>([]);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      setFriends(await getUserFriends(userId));
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [userId]);
  // End of simulated API response

  if (friends.length === 0)
    return (
      <div className='row-span-3 flex items-center space-x-2'>
        <Loader className='h-8 w-8 animate-spin' />
        <p>Chargement...</p>
      </div>
    );

  return (
    <div className='row-span-3 grid md:grid-cols-3 gap-4'>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsSection;

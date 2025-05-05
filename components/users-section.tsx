'use client';
import { redirect, useParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { User } from '@/types';

const UsersSection = ({ users }: { users: User[] }) => {
  const { id } = useParams();

  const handleOnClick = (userId: string) => {
    if (id && id === userId) {
      redirect('/');
    }
    redirect(`/user/${userId}`);
  };

  return (
    <Card className='h-40 md:col-span-2 md:h-[calc(100vh-6rem)] overflow-y-auto mb-4 md:mb-0'>
      <CardContent>
        {users.map((user) => (
          <p
            key={user.id}
            onClick={() => handleOnClick(user.id.toString())}
            className={`${
              user.id.toString() === id ? 'font-bold bg-gray-200' : ''
            } cursor-pointer py-1 px-2 rounded-md`}
          >
            {user.name}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default UsersSection;

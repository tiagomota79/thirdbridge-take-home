import FriendsSection from '@/components/friends-section';
import UserCard from '@/components/user-card';

const User = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  return (
    <div className='md:col-span-3 grid md:grid-rows-5 gap-4 md:h-[100vh]'>
      <UserCard userId={Number(id)} />
      <FriendsSection userId={Number(id)} />
    </div>
  );
};

export default User;

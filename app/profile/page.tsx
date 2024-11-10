import Profile from "@/components/Profile";
import { UserDetailsType } from "@/lib/types";
import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfilePage() {
  const session = await getSession();
  const user = session?.user;

  if (!user) return null;

  const UserDetails: UserDetailsType = {
    picture: user.picture,
    name: user.name,
    username: user.nickname,
    email: user.email,
  };

  return (
    <div className="flex items-center justify-center height-screen p-4">
      Profile Page
    </div>
  );
}

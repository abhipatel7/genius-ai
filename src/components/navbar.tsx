import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/mobile-sidebar';
import { getAPILimitCount } from '@/lib/api-limit';

export default async function Navbar() {
  const apiLimitCount = await getAPILimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

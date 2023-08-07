import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/mobile-sidebar';
import { getAPILimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

export default async function Navbar() {
  const apiLimitCount = await getAPILimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

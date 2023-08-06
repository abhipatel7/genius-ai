import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { getAPILimitCount } from '@/lib/api-limit';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getAPILimitCount();

  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

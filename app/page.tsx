import LandingPageBanner from '@/components/lp-banner';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] bg-slate-200'>
      <Navbar />
      <LandingPageBanner />
    </div>
  );
}

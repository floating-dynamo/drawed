import { SITE_CONFIG } from '@/site.config';

export const HeroSection = () => {
  const { landingPage } = SITE_CONFIG;

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='flex flex-col md:text-5xl text-3xl gap-2 font-bold flex-wrap'>
        <p>{landingPage.title_1}</p>
        <p className='text-primary'>{landingPage.title_2}</p>
      </div>
      <div className='md:w-[65%] w-[90%]'>
        <p className='text-muted-foreground text-center md:text-sm text-xs'>{landingPage.subTitle}</p>
      </div>
    </div>
  );
};

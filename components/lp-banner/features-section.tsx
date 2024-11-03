import { SITE_CONFIG } from '@/site.config';

export const FeaturesSection = () => {
  const {
    landingPage: { features },
  } = SITE_CONFIG;

  return (
    <>
      {features.map(({ icon: Icon, subTitle, title }) => {
        return (
          <div
            key={title.substring(0, 5)}
            className='max-w-96 flex items-start flex-col text-left gap-4 rounded-md border px-4 py-6 bg-white'
          >
            <Icon className='size-5 text-primary' />
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>
                {title}
                {/* {!isLive && <span className='font-light text-xs ml-4 px-2 text-secondary py-0.5 bg-primary rounded-sm'>Coming Soon</span>} */}
              </p>
              <p className='text-muted-foreground text-sm'>{subTitle}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

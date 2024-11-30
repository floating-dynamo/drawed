'use client';
import DrawingCompleteAlert from '@/components/dashboard/drawing-complete-alert';
import { Button } from '@/components/ui/button';
import { DASHBOARD_IMAGES } from '@/lib/constants';
import { Check, RefreshCw, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [streak, setStreak] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const [promptsLeftForTheDay, setPromptsLeftForTheDay] = useState(3);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setImage(getRandomImage(DASHBOARD_IMAGES));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRandomImage(images: string[]) {
    let randomIndex = Math.floor(Math.random() * images.length);
    if (images[randomIndex] === image && randomIndex < images.length - 1) {
      randomIndex++;
    } else if (images[randomIndex] === image && randomIndex == images.length - 1) {
      randomIndex = 0;
    }
    return images[randomIndex];
  }

  function getNewImage() {
    if (promptsLeftForTheDay > 0) {
      setPromptsLeftForTheDay((prev) => prev - 1);
      setImage(getRandomImage(DASHBOARD_IMAGES));
    }
  }

  function markDrawingCompleted() {
    if (isComplete === false) {
      setStreak((prev) => prev + 1);
    }
    setIsComplete(true);
  }

  function renderImage() {
    return (
      <div>
        <p className="md:font-normal font-semibold md:text-xl">{image}</p>
      </div>
    );
  }

  function renderTopSection() {
    return (
      <div className="flex justify-between items-center flex-wrap w-full gap-3">
        <h1 className="font-bold text-xl md:text-2xl">Today&apos;s Drawing Challenge</h1>
        <div className="flex gap-6 items-center md:w-fit w-full justify-between">
          <p className="font-semibold">
            Streak: <span className="text-primary font-normal">{streak} days</span>
          </p>
          <Button size={'icon'} variant={'outline'}>
            <Link href="/profile">
              <Settings2 className="size-5 text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  function renderButtons() {
    return (
      <>
        <Button variant="outline" onClick={getNewImage} disabled={!promptsLeftForTheDay || isComplete}>
          <RefreshCw /> New Prompt ({promptsLeftForTheDay} left)
        </Button>
        <Button onClick={markDrawingCompleted} disabled={isComplete}>
          <Check /> Complete Drawing
        </Button>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center flex-wrap md:justify-center md:mt-14 mx-auto md:min-h-fit min-h-screen py-8 px-8 bg-white md:w-3/4 rounded-md gap-4">
      {renderTopSection()}
      <div className="flex flex-col gap-4 bg-gray-100 w-full py-6 px-4 rounded-lg flex-wrap">
        {renderImage()}
        {!isComplete ? (
          <div className="flex justify-between flex-wrap gap-4">{renderButtons()}</div>
        ) : (
          <div>
            <DrawingCompleteAlert />
          </div>
        )}
      </div>
    </div>
  );
}

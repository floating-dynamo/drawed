import { Calendar, PencilRuler, RefreshCcw, Tag } from 'lucide-react';

export const SITE_CONFIG = {
  brandName: 'DrawED',
  brandLogo: PencilRuler,
  landingPage: {
    title_1: 'Improve Your Art Skills',
    title_2: 'One drawing at a time.',
    subTitle:
      'Join DrawED (Draw Everyday) and challenge yourself to create art everyday. Get personalized prompts, track your progress, and build a consistent drawing habbit.',
    features: [
      {
        icon: Calendar,
        title: 'Daily Prompts',
        subTitle: 'Get a new drawing prompt every day to keep your creativity flowing and skills improving.',
        isLive: false,
      },
      {
        icon: Tag,
        title: 'Personalized Topics',
        subTitle: 'Choose upto 5 tags to customize your drawing prompts based on your interests and skill level.',
        isLive: true,
      },
      {
        icon: RefreshCcw,
        title: 'Flexible Options',
        subTitle: `Not feeling today's drawing? Get up to 3 refreshes daily to find the perfect drawing for you.`,
        isLive: true,
      },
    ],
  },
  signInPage: {
    fields: [
      { name: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
      { name: 'Password', type: 'password', placeholder: 'Enter your password', required: true },
    ],
  },
  signUpPage: {
    fields: [
      { name: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
      // { name: 'Username', type: 'text', placeholder: 'Enter your username', required: true },
      { name: 'Password', type: 'password', placeholder: 'Enter your password', required: true },
      { name: 'Confirm Password', type: 'password', placeholder: 'Confirm your password', required: true },
    ],
  },
};

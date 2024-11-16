'use client';
import SignInForm from '@/components/sign-in/sign-in-form';
import { SITE_CONFIG } from '@/site.config';

export default function SignInPage() {
  const {
    signInPage: { fields: signInFormFields },
  } = SITE_CONFIG;

  return (
    <div>
      <SignInForm signInFormFields={signInFormFields} />
    </div>
  );
}

'use client';
import SignUpForm from '@/components/sign-up/sign-up-form';
import { SITE_CONFIG } from '@/site.config';

export default function SignUpPage() {
  const {
    signUpPage: { fields: signUpFormFields },
  } = SITE_CONFIG;

  return (
    <div>
      <SignUpForm SignUpFormFields={signUpFormFields} />
    </div>
  );
}

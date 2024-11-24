'use client';
import { useState } from 'react';

const useSignUpForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  function getValue(name: string): string {
    switch (name.toLowerCase()) {
      case 'email':
        return email;
      case 'password':
        return password;
      case 'confirm password':
        return confirmPassword;
      default:
        return '';
    }
  }

  function setValue(name: string, value: string) {
    switch (name.toLowerCase()) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirm password':
        setConfirmPassword(value);
        break;
      default:
    }
  }

  function handleSignUpSubmit() {
    console.log({
      email,
      password,
      confirmPassword,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function checkConfirmPassword(name: string) {
    if (name === 'Confirm Password' && confirmPassword && password) return confirmPassword === password;
    return false;
  }

  const disableSignUpButton = !email || !password || !confirmPassword || !checkConfirmPassword('Confirm Password');

  return {
    getValue,
    setValue,
    handleSignUpSubmit,
    togglePasswordVisibility,
    showPassword,
    disableSignUpButton,
    checkConfirmPassword,
  };
};

export default useSignUpForm;

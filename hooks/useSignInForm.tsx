'use client';
import { useState } from 'react';

const useSignInForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  function getValue(name: string): string {
    switch (name.toLowerCase()) {
      case 'email':
        return email;
      case 'password':
        return password;
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
      default:
    }
  }

  function handleSignInSubmit() {
    console.log({
      email,
      password,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function checkIsPassword(type: string) {
    return type === 'password';
  }

  const disableSignInButton = !email || !password;

  return { getValue, setValue, handleSignInSubmit, togglePasswordVisibility, showPassword, disableSignInButton };
};

export default useSignInForm;

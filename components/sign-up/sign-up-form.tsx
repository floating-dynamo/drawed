import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Check, Eye, EyeOff, X } from 'lucide-react';
import useSignUpForm from '@/hooks/useSignUpForm';

interface SignUpFormProps {
  SignUpFormFields: { name: string; type: string; placeholder: string; required: boolean }[];
}

function SignUpForm({ SignUpFormFields }: SignUpFormProps) {
  const {
    getValue,
    setValue,
    handleSignUpSubmit,
    togglePasswordVisibility,
    showPassword,
    disableSignUpButton,
    checkConfirmPassword,
  } = useSignUpForm();
  return (
    <div className="flex items-center md:justify-center flex-col min-h-screen md:bg-slate-200 bg-white py-0 md:py-4">
      <div className="flex justify-center flex-col sm:min-w-96 min-w-56 md:bg-white px-8 py-12  gap-12 rounded-md">
        <div>
          <p className="font-bold text-xl md:text-3xl text-primary">Sign Up</p>
          <p className="text-muted-foreground md:text-lg text-sm">
            Enter your username and password to access your account.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {SignUpFormFields.map(({ name, type, placeholder, required }) => {
            return (
              <div key={name} className="flex flex-col gap-2">
                <Label className="text-sm md:text-lg">{name}</Label>
                <div className="relative">
                  <Input
                    type={(() => {
                      if (type === 'password' && name === 'Password' && showPassword) {
                        return 'text';
                      }
                      return type;
                    })()}
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => {
                      setValue(name, e.target.value);
                    }}
                    required={required}
                    value={getValue(name)}
                  />
                  {type === 'password' && name === 'Password' && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? 'Show password' : 'Hide password'}
                    >
                      {showPassword ? (
                        <Eye className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  )}
                </div>
                <div>
                  {name === 'Confirm Password' &&
                    getValue(name) &&
                    (!checkConfirmPassword(name) ? (
                      <div className="text-sm text-red-500 flex items-center gap-2">
                        <X className="size-4" /> Passwords do not match
                      </div>
                    ) : (
                      <div className="text-sm text-green-500 flex items-center gap-2">
                        <Check className="size-4" /> Passwords match
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        <Button onClick={handleSignUpSubmit} disabled={disableSignUpButton}>
          Submit
        </Button>
        <div>
          <p className="text-muted-foreground text-center">
            Already have an account?
            <Link href={'/sign-in'} className="text-black hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

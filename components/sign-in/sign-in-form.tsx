import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import useSignInForm from '@/hooks/useSignInForm';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

interface SignInFormProps {
  signInFormFields: { name: string; type: string; placeholder: string; required: boolean }[];
}

function SignInForm({ signInFormFields }: SignInFormProps) {
  const { getValue, setValue, handleSignInSubmit, togglePasswordVisibility, showPassword, disableSignInButton } =
    useSignInForm();
  return (
    <div className="flex items-center md:justify-center flex-col min-h-screen md:bg-slate-200 bg-white">
      <div className="flex justify-center flex-col sm:min-w-96 min-w-56 md:bg-white px-8 py-12  gap-12 rounded-md">
        <div>
          <p className="font-bold text-xl md:text-3xl text-primary">Sign In</p>
          <p className="text-muted-foreground md:text-lg text-sm">
            Enter your username and password to access your account.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {signInFormFields.map(({ name, type, placeholder, required }) => {
            return (
              <div key={name} className="flex flex-col gap-2">
                <Label className="text-sm md:text-lg">{name}</Label>
                <div className="relative">
                  <Input
                    type={(() => {
                      if (type === 'password' && showPassword) {
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
                  {type === 'password' && (
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
              </div>
            );
          })}
        </div>
        <Button onClick={handleSignInSubmit} disabled={disableSignInButton}>
          Submit
        </Button>
        <div>
          <p className="text-muted-foreground text-center">
            Don't have an account?
            <Link href={'/sign-up'} className="text-black hover:underline ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

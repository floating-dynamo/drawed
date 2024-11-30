import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PencilLine } from 'lucide-react';

const DrawingCompleteAlert = () => {
  return (
    <Alert variant="info">
      <PencilLine className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You have completed today&apos;s drawing. Come back tomorrow for more!</AlertDescription>
    </Alert>
  );
};

export default DrawingCompleteAlert;

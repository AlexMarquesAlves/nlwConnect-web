import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
}

export function IconButton({ children }: IconButtonProps) {
  return (
    <>
      <h1>IconButton</h1>
      {children}
    </>
  );
}

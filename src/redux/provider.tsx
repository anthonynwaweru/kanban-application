// provider.tsx
"use client";
import { SessionProvider } from "next-auth/react";
import { store } from "./store";
import { Provider } from "react-redux";

// Custom provider component
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>;
    </SessionProvider>
  );
}


import { Provider } from "react-redux";
import ClientProvider from "./componnents/ClientProvider/ClientProvider";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "cafe menu",
  description: "choose your favorit food",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
          </ClientProvider>
      </body>
    </html>
  );
}

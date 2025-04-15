import ReactQueryProvider from "./componnents/ReactQueryProvider/ReactQueryProvider";
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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

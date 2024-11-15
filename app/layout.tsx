import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar";
import { UserDetailsType } from "@/lib/types";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vultr-lab",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/login");
  }

  const UserDetails: UserDetailsType = {
    picture: user.picture,
    name: user.name,
    username: user.nickname,
    email: user.email,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col">
            <NavBar picture={user.picture} name={user.name} />
            {children}
          </div>
        </body>
      </UserProvider>
    </html>
  );
}

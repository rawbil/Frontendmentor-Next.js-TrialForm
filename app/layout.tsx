import { Metadata } from "next";
import "./globals.css";

const fontUrl =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";

export const metadata: Metadata = {
  title: "Login/Register Form",
  description: "This is a login or register form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href={fontUrl}/>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

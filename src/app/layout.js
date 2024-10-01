import "./globals.css";

export const metadata = {
  title: "edit this",
  description: "edit this",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "DownVidly",
  description: "Download youtube video and audio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="kanit">{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="leading-normal tracking-normal text-white gradient" style={{fontFamily: 'Source Sans Pro'}}>
          {children}
      </body>
    </html>
  );
}

export const metadata = {
  
  title: "Techphilia 8",
  description: "The Future is Here",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

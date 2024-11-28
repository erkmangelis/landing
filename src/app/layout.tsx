import "@/styles/reset.css";
import "@/styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta property="og:title" content="Erkmen Geliş | Yapım Aşamasında" />
        <meta property="og:description" content="Erkmen Geliş'in kişisel web sitesi." />
        <link
          href="https://fonts.googleapis.com/css2?family=Almendra:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/anvil.svg" />
        <title>Erkmen Geliş | Yapım Aşamasında</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

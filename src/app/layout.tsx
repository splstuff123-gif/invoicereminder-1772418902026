import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "invoicereminder",
  description: "track invoices and send reminders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

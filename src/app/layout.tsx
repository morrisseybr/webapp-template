import type { Metadata } from "next";
import "./globals.css";
import moment from "moment";
import { LocaleProvider } from "@/components/locale-provider";
import TRPCProvider from "@/components/trpc-provider";

moment.locale("pt-br");

export const metadata: Metadata = {
  title: "Webapp Template",
  description: "by MorrisseyBR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <TRPCProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}

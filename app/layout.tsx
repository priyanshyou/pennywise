import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/providers/auth-provider";
import ProgressProvider from "@/providers/progress-provider";

export const metadata: Metadata = {
  title: "PennyWise | Smart Expense Tracker",
  description: "Manage your finances with PennyWise. Simple, beautiful, and effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`antialiased bg-background text-foreground`}
      >
        <ProgressProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className="flex justify-center w-full ">{children}</main>
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}

import "@/app/ui/global.css";
import Navbar from "@/app/ui/components/navbar/Navbar";
import Footer from "@/app/ui/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "./navbar/Navbar";
import Footer from "../components/Footer";

export const siteTitle = "Interntrip";

export default function Layout({ children, home }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

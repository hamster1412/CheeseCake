import Navbar from "./navbar/Navbar";
import Footer from "../components/Footer";
import SalarySlider from '../components/joblist/SalarySlider';

export const siteTitle = "Interntrip";

export default function Layout({ children, home }) {
  return (
    <div>
      <Navbar />
      <SalarySlider/>
      {children}
      <Footer />
    </div>
  );
}

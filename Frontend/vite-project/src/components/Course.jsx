import Footer from "./Footer";
import Navbar from "./Navbar";
import Courses from "./Courses";

export default function Course() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Courses/>
      </div>
      <Footer/>
    </>
  );
}

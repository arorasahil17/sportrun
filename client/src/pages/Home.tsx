import { useNavigate } from "react-router";
import Courses from "./Courses";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-[700px] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('public/hero.png')" }}
      >
        {/* Hero Section */}
        <div className="text-center px-4">
          <h1 className="lg:text-6xl text-3xl  font-bold text-white mb-6">
            Total <span className="text-red-500">Weight-Loss</span> Challenge
          </h1>
          <button
            onClick={() => navigate("/subscription")}
            className="bg-red-500 text-white px-6 py-3 mt-10 text-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Subscription List Section */}
      <Courses />
    </>
  );
};

export default Home;

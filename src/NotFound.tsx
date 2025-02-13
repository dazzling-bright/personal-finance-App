import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center ">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404: Page not Found</h1>
      <p className="text-xl mb-2">Oops! Looks like you're lost in space. 🚀</p>
      <p className="text-gray-500 mb-6">
        The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg cursor-pointer transition-colors hover:bg-red-600"
      >
        🔙 Go Back
      </button>
    </section>
  );
};

export default NotFound;

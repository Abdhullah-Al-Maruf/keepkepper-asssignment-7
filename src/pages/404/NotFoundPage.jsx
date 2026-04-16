import { Link, useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] px-4 relative overflow-hidden">
      
     
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>


      <div className="relative z-10 bg-white/80 backdrop-blur-lg border border-white/50 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] max-w-md w-full text-center">
        
    
        <div className="relative mx-auto w-48 h-48 mb-6">
          <div className="absolute inset-0 bg-green-100 rounded-full transform rotate-6 scale-105"></div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNtaWJ0aHBoZ3J4eGZ4eGZ4eGZ4eGZ4eGZ4eGZ4eGZ4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/13CoXDiaCcCoyk/giphy.gif"
            alt="Confused Cat"
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-5xl font-black text-green-600 mb-2 tracking-tight">
          404
        </h1>
        
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Well, this is paw-ful... 🐾
        </h2>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you are looking for has wandered off. 
          Maybe it's chasing a laser pointer somewhere else.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <button className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg shadow-green-200 transition-all duration-300 transform hover:-translate-y-1">
              Go Home
            </button>
          </Link>
          
          <button 
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-green-100 hover:border-green-200 text-green-700 font-semibold rounded-xl transition-all duration-300 hover:bg-green-50"
          >
            ← Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
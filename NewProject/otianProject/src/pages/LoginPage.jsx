import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { LoginInput } from '../components/LoginInput';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Login submitted:', { email, password, rememberMe });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
        <div className="grid md:grid-cols-[3fr_2fr]">
          {/* right panel */}
          <div className="hidden md:flex items-center justify-center p-12 bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-hidden  rounded-lg">
          </div>

          {/* left panel */}
          <div className="p-12 flex flex-col justify-center">

            <div className="text-center mb-8 animate-fadeIn">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center 
                              justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h1 className="ml-3 text-3xl font-bold text-blue-">Otian</h1>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600 text-sm">
                Welcome back, glad to see you again
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
              <LoginInput
                label="E-mail or Phone Number"
                type="text"
                placeholder="Enter Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <LoginInput
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                showPasswordToggle={true}
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded 
                             focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900 
                                 transition-colors">
                    Remember me
                  </span>
                </label>
                
                <a href="#" className="text-sm text-blue-500 hover:text-blue-600 
                                     font-medium transition-colors hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-blue-500 hover:bg-blue-600 
                         text-white font-semibold rounded-lg shadow-lg
                         transition-all duration-200 transform hover:scale-[1.02]
                         active:scale-[0.98] focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold transition-colors hover:underline">
                  Sign Up here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

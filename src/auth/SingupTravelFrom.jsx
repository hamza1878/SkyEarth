import React from "react";


export default function SignupTravelForm({ onSwitch = () => {} }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center w-full h-full"
      style={{
        backgroundImage:
          "url('/view-background-login-singup.jpg')",
      }}
    >
      <div className="absolute inset-0 p-2 bg-black/50"></div>

      <main className="relative z-8 w-full max-w-md mx-2">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-white/30">
          <header className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Welcome to Travelly</h1>
            <p className="text-sm text-slate-600 mt-2">Sign up to manage your trips & bookings</p>
          </header>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
         
           <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
email              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="you@example.com"
              />
            </div>
         <div>
              <label htmlFor="First_name" className="block text-sm font-medium text-slate-700 mb-1">
                First_name
              </label>
              <input
                id="First_name"
                name="First_name"
                type="First_name"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="hamza"
              />
            </div>
            <div>
              <label htmlFor="Last_name" className="block text-sm font-medium text-slate-700 mb-1">
                Last_name
              </label>
              <input
                id="Last_name"
                name="Last_name"
                type="Last_name"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="bensassi"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span className="text-slate-700">Remember me</span>
              </label>


            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all disabled:opacity-70 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white"
            >
              Sign up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => onSwitch('login')}
                className="text-indigo-600 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-slate-300"></span>
              <span className="text-xs text-slate-500 uppercase">or sign up with</span>
              <span className="h-px w-14 bg-slate-300"></span>
            </div>

            <div className="mt-4 flex gap-3 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.99H7.898v-2.887h2.54V9.847c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.444 2.887h-2.329v6.99C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                </svg>
                Facebook
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M21.6 12.227c0-5.425-4.397-9.827-9.827-9.827-5.426 0-9.828 4.402-9.828 9.827 0 5.426 4.402 9.828 9.828 9.828 2.202 0 4.232-.74 5.869-1.985l-2.372-2.059c-.822.553-1.88.88-3.497.88-3.434 0-6.224-2.79-6.224-6.224 0-3.436 2.79-6.226 6.224-6.226 3.434 0 6.225 2.79 6.225 6.226 0 1.184-.327 1.98-.727 2.667h-6.052v3.041c.91.17 1.86.26 2.927.26 5.43 0 9.827-4.402 9.827-9.827z" fill="#DB4437"/>
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-white/80 mt-4">
          <p>© {new Date().getFullYear()} Travelly — Explore the world ✈️</p>
        </footer>
      </main>
    </div>
  );
}

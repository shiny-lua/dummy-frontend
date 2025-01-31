import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen bg-[#1A1D1F] flex justify-center gap-20 items-center px-20">
            <div className="px-20 w-full flex flex-col">
                <Link to="/" className="flex items-center text-gray-400 gap-2">
                    <img src="/image/icon/back-icon.png" alt="" className="w-2.5 h-4" />
                    Back to Homepage
                </Link>
                <div className="flex flex-col items-center p-8">
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text text-[14px] mb-4">#1 AI VIDEO CLIPPING TOOL</div>
                        <div className="text-white text-[32px] font-bold mb-4">
                            Transform your idea to Viral videos,<br />In just a few minutes
                        </div>
                    </div>
                    <img src="/image/auth/auth.png" className="-my-30" />
                    <div className="flex items-center gap-4 text-white text-2xl font-semibold mt-8">
                        <div className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent w-16 h-[1px]" />
                        <div className="text-white text-[32px] font-semibold">Over 10K User Love It</div>
                        <div className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent w-16 h-[1px]" />
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent h-[500px] w-2 " />
            {/* Right Section */}
            <div className="w-full flex flex-col ml-40 mr-30 h-screen py-40">
                <div className="mb-8">
                    <h2 className="text-[38px] font-bold mb-2">
                        <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4834D4] text-transparent bg-clip-text">Sign in</span>
                        <span className="text-white"> to continue</span>
                    </h2>
                    <p className="text-gray-400 text-[18px]">Sign Up to your account and start creating</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full bg-[#2A2D2F] text-[16px] text-white rounded-full border border-slate-600 p-4 pl-14"
                            />
                            <img src="/image/icon/user.png" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full bg-[#2A2D2F] text-[16px] text-white rounded-full border border-slate-600 p-4 pl-14"
                            />
                            <img src="/image/icon/user.png" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter registered email account"
                                className="w-full bg-[#2A2D2F] text-[16px] text-white rounded-full border border-slate-600 p-4 pl-14"
                            />
                            <img src="/image/icon/email.png" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-[#2A2D2F] text-[16px] text-white rounded-full border border-slate-600 p-4 pl-14"
                            />
                            <img src="/image/icon/password.png" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-[#FF6B6B] rounded bg-[#2A2D2F]" />
                            <span className="ml-2 text-gray-400">Auto-Login</span>
                        </label>
                        <Link to="/forgot-password" className="text-gray-400 hover:text-white">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="pt-4 pb-8">
                        <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#CD449C] to-[#4834D4] text-white font-semibold ">
                            Login
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-white text-2xl">
                        <div className="bg-slate-400 w-full h-[1px]" />
                        <div className="text-white/60 text-[18px] w-full text-center">or Login With Email</div>
                        <div className="bg-slate-400 w-full h-[1px]" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6">
                        <button className="flex items-center justify-center p-4 rounded-full bg-[#2A2D2F]">
                            <img src="/image/icon/google-login.png" alt="Google" width={24} height={24} />
                        </button>
                        <button className="flex items-center justify-center p-4 rounded-full bg-[#2A2D2F]">
                            <img src="/image/icon/facebook-login.png" alt="Facebook" width={24} height={24} />
                        </button>
                        <button className="flex items-center justify-center p-4 rounded-full bg-[#2A2D2F]">
                            <img src="/image/icon/apple-login.png" alt="Apple" width={24} height={24} />
                        </button>
                    </div>

                    <div className="pt-10 text-[16px] text-gray-400">
                        don't have a account? {' '}
                        <Link to="/signup" className="text-[#FF6B6B]">
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
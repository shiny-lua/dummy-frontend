import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-primary items-center border-b border-white/60">
            <nav className="flex justify-between items-center py-7 px-30 relative z-10">
                <div className="flex items-center">
                    <div className="text-[40px] text-white font-bold">Dummy <span className="bg-gradient-to-r from-[#F2714F] via-[#CD449C] via-[#7F50DE] via-[#5F6AF0] to-[#4D88F8] inline-block text-transparent bg-clip-text">Logo</span></div>
                </div>
                <div className="flex items-center gap-20">
                    <Link className="text-[24px] text-white line-height-[24px] " to="/treding">Trending</Link>
                    <Link className="text-[24px] text-white line-height-[24px] " to="/funny">Funny</Link>
                    <Link className="text-[24px] text-white line-height-[24px] " to="/inspirational">Inspirational</Link>
                    <Link className="text-[24px] text-white line-height-[24px] " to="/affiliate">Affiliate</Link>
                    <Link className="text-[24px] text-white line-height-[24px] " to="/pricing">Pricing</Link>
                </div>
                <div className="flex items-center gap-10">
                    <Link className="text-[18px] font-semibold text-white/60" to="/signin">Login</Link>
                    <div className="bg-gradient-to-r from-[#F2714F] py-1.5 to-[#4D88F8] rounded-full">
                        <Link className="relative bg-primary px-5 py-2 mx-[1.5px] z-10 text-[18px] font-semibold text-white rounded-full " to="/signup">Sign up</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;  
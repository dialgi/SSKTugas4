import {Link} from "react-router-dom";
import {Icon} from  "../icon"

const Navbar = () => {
    return (
        <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-36 h-screen px-7 py-12 flex flex-col justify-between">
            <div>
                <Link to="/">
                <div className="flex justify-center mb-10">Logo</div>
                <div className="flex bg-primary text-white px-4 py-3 rounded-md">
                    <div className="text-white mx-auto sm:mx-0"></div>
                    <div className="ms-3 text-white hidden sm:block">
                        <Icon.Overview />
                    </div>
                    <div className="ms-3 text-white hidden sm:block">Overview</div>
                </div>
                </Link>
                <Link to="balance">
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                    <div className="mx-auto sm:mx-0"></div>
                    <div className="ms-3 text-special-bg2 hidden sm:block">
                        <Icon.Balance />
                    </div>
                    <div className="ms-3 text-white hidden sm:block">Balance</div>
                </div>
                </Link>
                <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
                    <div className="mx-auto sm:mx-0"></div>
                    <div className="ms-3 text-special-bg2 hidden sm:block">
                        <Icon.Transaction />
                    </div>
                    <div className="ms-3 text-white hidden sm:block">Transaction</div>
                </div>
            </div>
            <div>
                <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
                    <div className="mx-auto sm:mx-0">D</div>
                    <div className="ms-3 text-special-bg2 hidden sm:block">Logout</div>
                </div>
                <div className="border-b my-10 border-b-special-bg"></div>
                <div className="flex justify-between">
                    <div className="mx-auto sm:mx-0">foto</div>
                    <div className="hidden sm:block">
                        Username
                        <br />
                        View Profile
                    </div>
                    <div className="hidden sm:block">icon</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
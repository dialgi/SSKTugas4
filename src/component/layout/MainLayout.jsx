import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";


const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}
         
          {/* bottom content start*/}
          <div className="">
            <div className="">
              <div className="text-lg text-gray-02 mb-2">Title4</div>
              <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                widget 4
              </div>
            </div>
            <div className="">
              <div className="mb-8">
                <div className="text-lg text-gray-02 mb-2">Title5</div>
                <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                  widget 5
                </div>
              </div>
              <div className="">
                <div className="text-lg text-gray-02 mb-2">Title6</div>
                <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                  widget 6
                </div>
              </div>
            </div>
          </div>
          {/* bottom content end*/}
        </main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
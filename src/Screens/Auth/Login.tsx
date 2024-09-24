import AtmInputField from "../../Atoms/AtmInputField";
import maqLogo from "../../Assets/logo/MAQ_logo.png"

const Login = () => {



  return (
    <>
     <div
          id="authentication-modal"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-70 "
        >
          <div className="relative p-4 w-[500px] max-w-lg max-h-full">
            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-lg">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 ">
                <img src={maqLogo} alt="" className="w-20 h-20"/>
                <h3 className="text-xl font-semibold text-gray-500 ">Login</h3>
                
              </div>

              {/* Modal Body */}
              <div className="flex flex-col gap-5 p-4 md:p-5">
                <AtmInputField type={"text"} id={"text"} label={"Email"} />
                <AtmInputField
                  type={"password"}
                  id={"password"}
                  label={"Password"}
                />

                <div className="flex justify-end ">
                  <a
                    href="/"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <div className="text-sm font-medium text-gray-400 ">
                  Not registered?{" "}
                  <a
                    href="/#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;

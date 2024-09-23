

type Props = {
  closeModal: () => void;
};

function Login({ closeModal }: Props) {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 z-50 w-full h-full bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={closeModal}
        >
          X
        </button>

        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Customer Data
        </h1>

        {/* Name Field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Customer Mobile Number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* Address Field */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Customer Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-200">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

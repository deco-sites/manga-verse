interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section() {
  return (
    <div className="flex  flex-col justify-evenly lg:flex-row m-6 rounded-3xl p-4">
      <div className="flex flex-col items-center text-center py-12 px-6 md:flex-row md:text-left md:justify-between">
        <div className="w-full">
          <img
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/02165194-6080-46d2-bdc9-33f4a2382e78"
            alt="Reading Illustration"
            className="md:w-1/2 mt-8 md:mt-0"
          />

          <h1 className="text-4xl font-bold mb-4">Welcome to Bookscape</h1>
          <p className="text-lg mb-8">The world of books at your fingertips</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold">Millions Of Titles</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold">Genuine Books</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold">Great Pricing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold">Faster Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md p-8 bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>
        <p className="mb-6">
          Please enter your contact details to Sign up or Sign in
        </p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Email address or Phone Number"
            className="p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="p-3 bg-red-500 text-white rounded">
            Next
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="block mb-2">Or</span>
          <div className="flex justify-center space-x-4">
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/77788881-4f0b-402b-8e03-7c8b108c833a"
              alt="Google Sign In"
              className="w-8"
            />
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/95058cd9-1e05-442d-93d6-6d02266a0f53"
              alt="Apple Sign In"
              className="w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

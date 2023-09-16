const ErrorPage = ({ error: { code, message } }) => {
  const reloadPage = () => {
    if (message.includes("Network Error")) {
      window.location.reload();
    } else if (message.includes("404")) {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-gray-800 text-lg mt-4 mb-6">{message}</p>
        {message.includes("Network Error") || message.includes("404") ? (
          <button
            className="bg-red-600 text-white py-3 px-6 font-semibold rounded-md hover:bg-red-700 focus:outline-none"
            onClick={reloadPage}
          >
            {message.includes("Network Error") ? "Retry" : "Go Home"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ErrorPage;

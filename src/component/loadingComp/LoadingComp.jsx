import { useSelector } from "react-redux";

function LoadingComp() {
    const {isLoading} = useSelector((state) => state.authUser);
  return (
    isLoading ? (
    <div className="absolute inset-0 w-full h-full z-10">
      <div className="flex h-full justify-center items-center">
        <div className="w-32 h-32 bg-transparent rounded-lg flex flex-col gap-6 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
            <path
              fill="none"
              stroke="#24305E"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray="300 385"
              strokeDashoffset="0"
              d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
            >
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animate>
            </path>
          </svg>
        </div>
      </div>
    </div>
    ) : (
        <></>
    )
  );
}

export default LoadingComp;

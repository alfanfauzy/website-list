import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // ini akan kembali ke halaman sebelumnya
    };

    return (
        <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleBack}
        >
            <div className="flex items-center space-x-2 fill-gray-500 gap-1">
                <svg
                    className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
                </svg>
                <span className="text-gray-400 hover:text-gray-700 font-semibold ">
                    Back
                </span>
            </div>
        </div>
    );
};

export default BackButton;

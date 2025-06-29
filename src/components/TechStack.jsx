export default function TechStack() {
    return(
        <div className="py-6 flex flex-col gap-3">
            <h3 className="text-center text-[#303841]">My Tech Stack</h3>
            <div className="flex items-center justify-between">
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-javascript-fill text-[#3A4750] text-4xl"></i>JS
                </span>
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-reactjs-line text-[#3A4750] text-4xl"></i>React/native
                </span>
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-tailwind-css-line text-[#3A4750] text-4xl"></i>Tailwind
                </span>
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-firebase-line text-[#3A4750] text-4xl"></i>Firebase
                </span>
            </div>
        </div>
    )
}
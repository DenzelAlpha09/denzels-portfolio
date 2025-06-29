export default function TechStack() {
    return(
        <div className="py-6 flex flex-col gap-3">
            <h3 className="text-center text-[#303841]">My Tech Stack</h3>
            <div className="flex items-center justify-between">
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-javascript-fill text-[#3A4750] text-3xl"></i><span className="text-[#3A4750] text-[13px]">JS</span>
                </span>
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-reactjs-line text-[#3A4750] text-3xl"></i><span className="text-[#3A4750] text-[13px]">React/native</span>
                </span>
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-tailwind-css-line text-[#3A4750] text-3xl"></i><span className="text-[#3A4750] text-[13px]">Tailwind</span>
                </span>
                <span className="flex flex-col items-center gap-[3px]">
                    <i className="ri-firebase-line text-[#3A4750] text-3xl"></i><span className="text-[#3A4750] text-[13px]">Firebase</span>
                </span>
            </div>
        </div>
    )
}
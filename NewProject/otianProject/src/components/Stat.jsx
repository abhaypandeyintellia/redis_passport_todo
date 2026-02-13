import { FaWheelchair } from "react-icons/fa"

export const Stat = ({text, count}) => {
    return <>
    <div className="flex flex-row p-2 m-1.5 bg-white shadow-sm rounded-lg">
        <div className="p-2 m-2"><FaWheelchair scale={2}/></div>
        <div className="flex flex-col">
            <div className=" text-gray-600">{text}</div>
            <div className="text-xl font-bold">{count}</div>
        </div>
    </div>  
    </>
}
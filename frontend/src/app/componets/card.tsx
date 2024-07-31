import { FaBuilding } from "react-icons/fa";

interface CardType{
  color?: string,
  quantity?: string,
  text?: string,
  icon?: React.ReactNode
}

export function Card({color, quantity, text, icon}: CardType){

  return(
    <div className={`${color} p-6 flex 
                              gap-2 rounded-xl`}>
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold">{quantity}</strong>
                  <span className="text-sm text-zinc-500">{text}</span>
                </div>
                {icon}
              </div>
  )
}
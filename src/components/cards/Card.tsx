interface Icard {
  count: number;
  text: string;
  icon?: any;
  position: number;
}
export default function Card({ count, position, text, icon }: Icard) {
  return (
    <div className="w-[24vw] h-[97px] rounded-3xl bg-white flex justify-center items-center gap-6">
      <div
        className={`w-[68px] h-[68px] rounded-full flex justify-center items-center ${
          position === 1
            ? "bg-[#FFF2F2]"
            : position === 2
            ? "bg-[#E9FCF1]"
            : "bg-[#E8F2FD]"
        }`}
      >
        {icon && icon}
      </div>
      <div>
        <p className="text-3xl text-[#0D0D0D] font-black">{count}</p>
        <p className="text-[#666666]">{text}</p>
      </div>
    </div>
  );
}

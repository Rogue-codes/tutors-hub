interface IPaper {
  title: string;
  img: string;
  desc?: string
}
export default function Paper({ img, title, desc }: IPaper) {
  return (
    <div className='w-[24%] h-[288px] flex flex-col justify-center gap-4 items-center rounded-3xl bg-white border-b-8 border-[#12A454]'>
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="w-[100px] h-[100px]">
        <img src={img} alt="" />
      </div>
      {desc && <p>{desc}</p>}
      <button className="px-12 py-2 rounded-md bg-[#12A45412] text-[#12A454]">View all</button>
    </div>
  )
}

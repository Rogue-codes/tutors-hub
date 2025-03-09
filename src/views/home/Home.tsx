import Card from "../../components/cards/Card";
import Paper from "../../components/cards/Paper";

export default function Home() {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <Card count={100} text="Total Students" position={1}/>
        <Card count={2} text="Courses" position={2}/>
        <Card count={20} text="Results" position={3} />
      </div>

      <div className="w-full h-[443px] bg-white rounded-3xl mt-6">

      </div>

      <div className="flex mt-8 pb-12 justify-between items-center">
        <Paper/>
        <Paper/>

        <div className="w-[48%] rounded-3xl bg-[#12A454] h-[288px]">

        </div>
      </div>
    </div>
  );
}

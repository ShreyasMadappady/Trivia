import SynthMain from "../components/SynthMain";

function DashBoard() {
  return (<>
    <div className="flex justify-between items-center mx-[48.84px] mt-[67.37px]">
      <div>
        <h1 className="font-bold text-[33.68px]">
          Think
          <span className="text-[#E00000]">!</span> Master Dashboard
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-[16.84px] ">Sample Performance</h1>
        <h1 className="font-bold text-[16.84px] flex justify-end">
          Content Analytics
        </h1>
      </div>
    </div>
    <SynthMain/></>
  );
}

export default DashBoard;

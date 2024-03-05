import SynthMain from "../components/SynthMain";

function DashBoard() {
  return (
    <>
      <div className="flex justify-between items-center mx-[3.0525rem] mt-[4.21rem]">
        <div>
          <h1 className="font-bold text-[2.105rem]">
            Think
            <span className="text-[#E00000]">!</span> Master Dashboard
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-[1.05rem] ">Sample Performance</h1>
          <h1 className="font-bold text-[1.05rem] flex justify-end">
            Content Analytics
          </h1>
        </div>
      </div>
      <SynthMain />
    </>
  );
}

export default DashBoard;

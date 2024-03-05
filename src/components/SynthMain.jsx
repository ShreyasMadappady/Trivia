import OptionsBox from "./OptionsBox";

function SynthMain() {
  return (
    <div className="bg-[#D9D9D9] mx-[3.05rem] px-[1.52rem] py-[1.21rem] mt-[4.59rem] rounded-[0.52rem]">
      <div>
        {" "}
        <h1 className="font-bold text-[1.31rem]">Synth No. 1</h1>
        <div className="flex">
          {" "}
          <h1
            className="font-bold text-[1.31rem
      ]"
          >
            Source Title
          </h1>
          <h1>
            : Mollusk Eyes Reveal How Future Evolution Depends on the Past
          </h1>
        </div>
        <div className="flex">
          {" "}
          <h1
            className="font-bold text-[1.31rem
]"
          >
            Source Link
          </h1>
          <h1 className="text-[1.05rem]">
            :
            https://www.quantamagazine.org/mollusk-eyes-reveal-how-future-evolution-depends-on-the-past-20240229/
          </h1>
        </div>
      </div>
      <div className="flex pt-[3.04rem] gap-[6.19rem]">
        <div
          className="flex 
        "
        >
          <h1
            className="font-bold text-[1.31rem
]"
          >
            Field: <span className="text-[#E00000]  font-normal">Biology</span>
          </h1>
        </div>
        <div className="flex">
          <h1
            className="font-bold text-[1.31rem
]"
          >
            Sub-Field:{" "}
            <span className="text-[#E00000] font-normal">
              Evolutionary Biology
            </span>
          </h1>
        </div>
      </div>
      <div className="flex gap-[1.42rem]">
        <div>
          {" "}
          <OptionsBox />
          <OptionsBox />
        </div>
        <div>
          {" "}
          <OptionsBox />
          <OptionsBox />
        </div>
      </div>
    </div>
  );
}

export default SynthMain;

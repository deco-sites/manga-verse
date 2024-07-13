interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section() {
  return (
    <div className="flex flex-col justify-start items-center flex-wrap m-8">
      <h1 class="text-3xl font-semibold text-black">Authors</h1>
      <div className="flex flex-row justify-evenly items-center flex-wrap m-8">
        <div>
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/2e4e64ad-f030-4011-ae32-07cf3d65dfb0"
              className="h-44 w-44 rounded-full"
              alt="author img"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-slate-200 flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5/5</h1>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Akshat Gupta</h2>
              <h5 className="text-2xl">
                Genuine Books
              </h5>
              <button className="text-xl text-white bg-green-500 rounded-xl p-2">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/1fda9caf-b67c-4f94-8210-f2fd36956760"
              className="h-44 w-44 rounded-full"
              alt="author img"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-slate-200 flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5/5</h1>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Ankur Warikoo</h2>
              <h5 className="text-2xl">Perfect Showcase For Authors</h5>
              <button className="text-xl text-white bg-green-500 rounded-xl p-2">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/229d6ed3-582e-4da7-a193-7fa6a3fc798d"
              className="h-44 w-44 rounded-full"
              alt="author img"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-slate-200 flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5/5</h1>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Dr. Cuterus</h2>
              <h5 className="text-2xl">Fresh, Discovery-Led UI/UX</h5>
              <button className="text-xl text-white bg-green-500 rounded-xl p-2">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/a161a392-5338-444a-980f-f0e6b7f0fb46"
              className="h-44 w-44 rounded-full"
              alt="author img"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-slate-200 flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5/5</h1>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Durjoy Dutta</h2>
              <h5 className="text-2xl">Cool Community Features</h5>
              <button className="text-xl text-white bg-green-500 rounded-xl p-2">
                Explore More
              </button>
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11645/b5820361-05ec-4534-a597-765525046b61"
              className="h-44 w-44 rounded-full"
              alt="author img"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-slate-200 flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5/5</h1>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Nona Uppal</h2>
              <h5 className="text-2xl">Discover, Browse, Buy, Read</h5>
              <button className="text-xl text-white bg-green-500 rounded-xl p-2">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

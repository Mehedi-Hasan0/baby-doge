import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="text-white overflow-hidden section-padding bg-[url('/assets/images/footer-newsletter-bg.png')] bg-cover bg-center pt-16 pb-28 md:pt-24 md:pb-36 xl:pt-28 xl:pb-56">
      <div className="main-container">
        <div className="flex lg:justify-end justify-center items-center lg:items-end">
          <div className="w-fit">
            <div className="flex flex-col justify-end items-center gap-2">
              <h4 className="font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-[56px]">
                Katana Inu is a{" "}
                <span className="text-yellowRed">MMO NFT PC Game</span>
              </h4>
              <p className="text-sm sm:text-base md:text-lg 2xl:text-2xl opacity-90">
                {" "}
                With focus on free2play and play2earn to attract web2 gamers.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col justify-center items-center gap-5 mt-7 lg:mt-12">
              <h3 className="font-bold text-[#F5FBF2] text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                Don't miss our latest news
              </h3>
              <form>
                <div
                  htmlFor="email"
                  className="bg-[#000000]/90 border border-darkYellow/50 rounded-2xl rounded-bl-2xl min-w-[210px] sm:min-w-[300px] lg:min-w-[500px] h-[60px] sm:h-[70px] flex items-center gap-3"
                >
                  <input
                    type="text"
                    id="email"
                    className="min-w-[210px] sm:min-w-[300px] lg:min-w-[500px] h-[58px] sm:h-[68px] bg-[#000000]/90 outline-none rounded-tl-2xl rounded-bl-2xl pl-3"
                  />
                  <button className="h-[40px] w-[70px] sm:h-[50px] bg-darkYellow/50 hover:bg-darkYellow sm:px-5 mr-5 rounded-xl transition duration-500 ease-in flex justify-center items-center">
                    <Image
                      src={"/assets/icons/submit.svg"}
                      alt=""
                      width={32}
                      height={8}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

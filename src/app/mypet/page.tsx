"use client"

import Image from "next/image";
import images from "@/assets/Images";


function MyPet() {
       return (

              <>
                     <header className="bg-orange-200 text-black px-6 py-2 flex justify-between items-center text-sm">
                            <div className="flex items-center gap-6">
                                   <div className="flex items-center gap-1">
                                          <Image src={images.phone} alt="phone"  height={19} width={19} />
                                          <span>(+080)-945-678</span>
                                   </div>
                                   <div className="flex items-center gap-1">
                                         <Image src={images.email} alt="email"  height={19} width={19} />
                                          <span>pets@gmail.com</span>
                                   </div>
                            </div>
                            <div className="flex items-center gap-1">
                                  <Image src={images.language} alt="lan"  height={19} width={19} />
                                   <span>English </span>
                            </div>
                     </header>
                        <header className="w-full h-[80px] bg-white px-15 py-10 flex items-center justify-between">
                            <Image src={images.logo} alt="logo" width={150} height={100} />

                            <div  className="bg-gray-200 w-[433px] h-[46px] flex text-center ">
                                    <input  placeholder="search article, members..." />
                                    <button className="bg-orange-300 h-[40px] w-[130px]">
                                   <Image src={images.plus} alt="prfile" height={10} width={10} />
                                 </button>
                            </div>

                            <div>

                            </div>

                     </header>
              </>

       )

}

export default MyPet
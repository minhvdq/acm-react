import './styles.css'; 
// import styles from './styles.module.css'; 

export default function BoardPage () {
    
    const testFunction = () => { 
      var x = document.getElementById('div-1'); 
      if (x.style.display === "none") {
        x.style.display = "block"; 
      } else { 
        x.style.display = "none"; 
      }
    }

    return (
        
        <>  
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
          </style>
          
          {/* <body> */}
          <h1> OUR TEAM </h1>
          {/* <div class="grid grid-cols-2 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
          </div> */}
          <div class='flex justify-center bg-[#f6f6f6]'>
            <section id="Member display wrapper" class="max-w-[1200px] mx-auto px-4 py-8  ">
              <div class="flex flex-col gap-[72px]">
                <div class="flex flex-col lg:w-4/5 md:w-full mt-[100px]">
                  <h2 class="md:text-4xl xs:text-2xl font-semibold">Introducing the team</h2>
                  <p class="mt-6 md:text-lg xs:text-sm">Learn more about the team at DTI and what we do behind the scenes. Our design, development, business, and product teams all strive to use creativity and innovation to make DTI &#x27;s products more impactful and functional.</p>
                </div>
                <div class="grid md:grid-cols-6 xs:grid-cols-3 justify-between">
                  <div class="flex flex-col items-center h-[111px]  hover:opacity-100">
                    <h3 class="font-semibold md:text-xl xs:text-base mb-4">Full Team</h3>
                    <button aria-label="select Full Team role" class="custom-focus-state">
                        <img alt="" loading="lazy" width="66" height="66" decoding="async" data-nimg="1" class="cursor-pointer lg:h-[66px] xs:h-[50px] w-auto scale-125 hover:scale-125" style={{color:"transparent"}} src='public/Images/PNG_transparency_demonstration_1.png'/>
                    </button>
                  </div>
                  <div class="flex flex-col items-center h-[111px] opacity-50 hover:opacity-100">
                    <h3 class="font-semibold md:text-xl xs:text-base mb-4">Leads</h3>
                    <button aria-label="select Leads role" class="custom-focus-state">
                        <img alt="" loading="lazy" width="66" height="66" decoding="async" data-nimg="1" class="cursor-pointer lg:h-[66px] xs:h-[50px] w-auto  hover:scale-125" style={{color:"transparent"}} src='public/Images/PNG_transparency_demonstration_1.png'/>
                    </button>
                  </div>
                  <div class="flex flex-col items-center h-[111px] opacity-50 hover:opacity-100">
                    <h3 class="font-semibold md:text-xl xs:text-base mb-4">Development</h3>
                    <button aria-label="select Development role" class="custom-focus-state">
                        <img alt="" loading="lazy" width="72" height="66" decoding="async" data-nimg="1" class="cursor-pointer lg:h-[66px] xs:h-[50px] w-auto  hover:scale-125" style={{color:"transparent"}} src='public/Images/PNG_transparency_demonstration_1.png'/>
                    </button>
                  </div>
                  <div class="flex flex-col items-center h-[111px] opacity-50 hover:opacity-100">
                    <h3 class="font-semibold md:text-xl xs:text-base mb-4">Design</h3>
                    <button aria-label="select Design role" class="custom-focus-state">
                        <img alt="" loading="lazy" width="66" height="66" decoding="async" data-nimg="1" class="cursor-pointer lg:h-[66px] xs:h-[50px] w-auto  hover:scale-125" style={{color:"transparent"}} src='public/Images/PNG_transparency_demonstration_1.png'/>
                    </button>
                  </div>
                  <div class="flex flex-col items-center h-[111px] opacity-50 hover:opacity-100">
                    <h3 class="font-semibold md:text-xl xs:text-base mb-4">Business</h3>
                    <button aria-label="select Business role" class="custom-focus-state">
                        <img alt="" loading="lazy" width="66" height="66" decoding="async" data-nimg="1" class="cursor-pointer lg:h-[66px] xs:h-[50px] w-auto  hover:scale-125" style={{color:"transparent"}} src='public/Images/PNG_transparency_demonstration_1.png'/>
                    </button>
                  </div>
                  <div class="flex flex-col items-center h-[111px] opacity-50 hover:opacity-100">
                    <h3 class="font-semibold md:text-xl xs:text-base mb-4">Product</h3>
                    <button aria-label="select Product role" class="custom-focus-state">
                        <img alt="" loading="lazy" width="66" height="66" decoding="async" data-nimg="1" class="cursor-pointer lg:h-[66px] xs:h-[50px] w-auto  hover:scale-125" style={{color:"transparent"}} src='public/Images/PNG_transparency_demonstration_1.png'/>
                    </button>
                  </div>
                </div>
                <div>
                  <div class="md:mb-[120px] xs:mb-10">
                    <h2 class="font-semibold md:text-[32px] xs:text-2xl">Leads Team</h2>
                    <p class="mt-3 md:text-xl xs:text-sm">Striving to connect and mentor our members for their best growth.</p>
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 md:gap-10  xs:gap-5 md:mt-10 xs:mt-5">
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class="rounded-lg border bg-card text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md md:h-[238px] xs:h-[202px] w-full object-cover"/>
                                <h3 class="text-left font-bold">James Spokes</h3>
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div> 
              </div> 
            </section>
          </div> 
            
          {/* </body> */}
          

        </>
    )
}
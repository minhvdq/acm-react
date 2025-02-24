// import './style.css'; 
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
          {/* <h1> OUR TEAM </h1> */}
          {/* <div class="grid grid-cols-2 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
          </div> */}
          <div class='flex justify-center bg-[#1e1e1e] text-[#ffffff]'>
            <section id="Member display wrapper" class="max-w-[1200px] mx-auto px-4 py-8  ">
              <div class="flex flex-col gap-[72px]">
                <div>
                  <div class="md:mb-[120px] xs:mb-10">
                    <h2 class="font-semibold md:text-[32px] xs:text-2xl">Leads Team</h2>
                    <p class="mt-3 md:text-xl xs:text-sm">Striving to connect and mentor our members for their best growth.</p>
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 md:gap-10 xs:gap-5 md:mt-10 xs:mt-5">
                    <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class=" rounded-lg border-[#2c2c2c] bg-[#2c2c2c] text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="bg-[#2c2c2c] border-[#2c2c2c] memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="text-[#ffffff] card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md bg-card md:h-[238px] xs:h-[202px] w-full object-contain"/>
                                <div class="flow-root ">
                                  <p class="float-left font-bold text-[14px] md:text-[20px]">
                                      Damian Vu 
                                  </p>

                                  <p class="float-right mt-2 text-[12px] md:text-[15px]">
                                      Class 2027
                                  </p>
                                </div>
                                {/* <h4 class="text-right">idk</h4> */}
                            </div>
                            <p class="w-fit h-[32px] flex items-center px-[12px] py-[4px] rounded-2xl text-[14px]" style={{backgroundColor:'#FFD0D0'}}>Full Team Lead</p>
                          </div>
                        </div>
                      </button>
                      <button class="memberCard card-clickable flex flex-col items-center custom-focus-state" aria-label="open James Spokes&#x27;s details">
                        <div class=" rounded-lg border-[#2c2c2c] bg-[#2c2c2c] text-card-foreground shadow-sm memberCard card-clickable w-full md:p-3 md:pb-4 xs:p-2 xs:pb-3 h-fit grow opacity-100">
                          <div class="bg-[#2c2c2c] border-[#2c2c2c] memberCard card-clickable flex h-full flex-col md:gap-3 xs:gap-2 xs:text-[16px] justify-between md:text-lg">
                            <div class="text-[#ffffff] card-clickable flex flex-col md:gap-3 xs:gap-2 justify-between">
                                <img src='public/Images/PNG_transparency_demonstration_1.png' alt="James-Spokes" class="rounded-md bg-card md:h-[238px] xs:h-[202px] w-full object-contain"/>
                                <div class="flow-root ">
                                  <p class="float-left font-bold text-[14px] md:text-[20px]">
                                      Damian Vu 
                                  </p>

                                  <p class="float-right mt-2 text-[12px] md:text-[15px]">
                                      Class 2027
                                  </p>
                                </div>
                                {/* <h4 class="text-right">idk</h4> */}
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
                                <h3 class="text-left font-bold">Placeholder</h3>
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
                                <h3 class="text-left font-bold">Placeholder</h3>
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
                                <h3 class="text-left font-bold">Placeholder</h3>
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
                                <h3 class="text-left font-bold">Placeholder</h3>
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
                                <h3 class="text-left font-bold">Placeholder</h3>
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
                                <h3 class="text-left font-bold">Placeholder</h3>
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
function Project() {
    return <div className="bg-[#1F1F1F] text-white h-[1400px]">

        <div>
        <div className="flex">
            <h1 className="text-7xl ml-[300px] ">latest projects</h1>
            <button className="bg-[#ffffff] ml-[1300px] text-2xl text-black w-[150px] rounded-[20px] h-[60px]">All work</button>
           </div>
           <div>
            <p className="ml-[300px] mt-16 text-3xl">Explore the captivating world of cutting-edge UI/UX designsthat redefine digital experiences, showcasing our <br />
            innovative solutions and inspiring creative journeys.</p>
            <div className="flex gap-10">

                <div className="w-[500px] mt-16 ml-[300px] h-[400px] bg-[#ffffff]">
                    <img className="h-[400px]" src="./src/Images/7e2ef464b08278a904b4c375e1d024cc1935d5e5.jpg" alt="" />
                <h1 className="text-3xl ml-[180px] font-semibold mt-8">Hormuud</h1>
                </div>

                <div className="w-[500px] mt-16 ml-[100px] h-[400px] bg-[#ffffff]">
                    <img className="h-[400px]" src="./src/Images/949ec8c27ed2698bcfc71e86934afab81ab66893.jpg" alt="" />
                    <h1 className="text-3xl ml-[180px] font-semibold mt-8">Transform</h1>

                </div>
                

                <div className="w-[500px] mt-16 ml-[100px] h-[400px] bg-[#ffffff]">
                    <img className="h-[400px]" src="./src/Images/WhatsApp Image 2024-07-25 at 13.24.27_2ce0e955.jpg" alt="" />
                    <h1 className="text-3xl ml-[180px] font-semibold mt-8">Desing</h1>

                </div>
                
            </div>
           </div>
        </div>

    </div>
}

export default Project
function Header() {
    return <div className="bg-[#1F1F1F] text-white">
        <div className="h-[1150px]  ">

           <div className="flex justify-between pt-10 ml-20">
           <h1 className="text-4xl font-bold">Eng Hakimi</h1>
            <ul className="flex gap-10 text-3xl mr-[300px] ">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
           </div>

            <div className="flex">
                
           <div className="mt-[200px] ml-[300px]">
            <p className="text-[#ffffff] text-4xl mt-6">Welcome </p>
            <h1 className="font-bold text-7xl mt-5 ">I’m Eng <br /> Hakimi</h1>

            <button className="text-4xl mt-14  w-[240px] bg-sky-400 hover:bg-sky-800  h-[80px] rounded-[20px] ">Contact me</button>

           </div>
           
           <div className="ml-[700px]  ">
            <img className="w-[600px] mt-10 h-[700px]" src="./src/Images/unsplash_OhKElOkQ3RE.png" alt="" />
           </div>

            </div>
            <div className="flex mt-10 gap-20 ml-[300px] text-4xl font-bold ">
                <h1>Client </h1>
                <h1>Client </h1>
                <h1>Client </h1>
                <h1>Client </h1>
            </div>
        </div>

    </div>
}
export default Header
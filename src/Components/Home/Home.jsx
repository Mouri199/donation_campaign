import { useLoaderData } from "react-router-dom";
import Donations from "../Donations/Donations";
import { useState } from "react";



const Home = () => {
    const donations = useLoaderData();

    const [searchData,setSearchData] = useState(donations);
    const [changeSearch,setChangeSearch] = useState(donations);

    
    const handleSearch=()=>{
        const searchField = document.getElementById('searchField')
        const searchText = searchField.value;
        console.log(searchText);
        if(searchText.length>0){
            const data = searchData.filter(card => card.category == searchText)
            if(data){
              setChangeSearch(data)
            }
        }
        else{
            setChangeSearch(searchData)
        }
        console.log(searchData);
        console.log(changeSearch);
    }
    


    return (
        <div>

            <div className="hero h-[200px] lg:h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/Dp8dYdj/banner.jpg)' }}>
                <div className="hero-overlay  bg-white bg-opacity-90"></div>
                <div className=" text-center text-neutral-content">
                    <div>
                        <h1 className="lg:mb-5 text-[#0B0B0B] text-lg md:text-4xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                       <div>
                        <input className="lg:p-2 w-32 lg:w-96 text-black font-semibold lg:text-xl" type="text" placeholder="Search here..." id="searchField" />
                       
                       <button onClick={handleSearch} className="lg:p-2 bg-red-500 text-white">Get Started</button>
                       </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-16 lg:px-44">
                {changeSearch.map(donation => <Donations key={donation.id} donation={donation}> </Donations>)}
            </div>



        </div>

    );
};

export default Home;

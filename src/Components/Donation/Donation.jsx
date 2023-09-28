import { useEffect, useState } from "react";
import DonationData from "./DonationData";

const Donation = () => {

    
    const [donated, setDonated] = useState([])
    const [noData, setNoData] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {

        const addDonate = JSON.parse(localStorage.getItem('donated'));
        if (addDonate) {
            setDonated(addDonate)
        }
        else {
            setNoData("No Data Found")
        }

    }, [])

    console.log(donated);


    return (
        <div>
            {noData ? <p className="h-[80vh] flex justify-center items-center font-semibold text-4xl">{noData}</p> : (<div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-16 py-5 gap-5">
                    {
                        isShow ? donated.map(card => <DonationData key={card.id} card={card}></DonationData>) : donated.slice(0, 4).map(card => <DonationData key={card.id} card={card}></DonationData>)
                    }
                </div>
                <div>
                    {
                        donated.length >= 4 && <button onClick={() => setIsShow(!isShow)} className="flex items-center mt-10 bg-red-500 p-2 rounded-lg font-semibold text-white mx-auto">{isShow ? "See less" : "See More"}</button>
                    }
                </div>

            </div>)}</div>
    );
};

export default Donation;
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationData = ({ card }) => {

    return (
        <div className="w-[425px] lg:w-[650px] lg:h-[230px]" style={{backgroundColor:card.card_bg}}>
           <div className="flex items-center">
           <div><img className="w-[200px] h-[250px] lg:w-[250px] lg:h-[230px]" src={card.image} />
            </div>
            <div className="card-body">
                <h2 className="lg:p-2 text-center w-28 lg:w-32 rounded-lg lg:text-2xl text-lg font-semibol" style={{color:card.text_color,backgroundColor:card.card_bg}}>{card.category}</h2>
                <p className=" text-lg lg:text-2xl font-semibold">{card.title}</p>
                <p className="font-semibold " style={{color:card.text_color}}>${card.price}</p>

                <button className="text-white w-28 p-1 rounded-md font-semibold " style={{backgroundColor:card.text_color}}>
                    <Link to={`/donationDetails/${card.id}`} >View Details</Link>
                </button>
            </div>
           </div>
        </div>
    );
};

export default DonationData;




/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Donations = ({donation}) => {

    const { id, image, category, title, card_bg, category_bg, text_color } =donation || {};

    return (

        <Link to={`/donationDetails/${id}`}>
            <div className="card" style={{ backgroundColor: card_bg }}>
                <figure><img className="w-80 h-56" src={image} /></figure>
                <div className="py-5 ml-2">
                    <p className="p-1 rounded-lg text-center font-medium w-28" style={{ backgroundColor: category_bg, color: text_color }}>{category}</p>
                    <h2 className="my-2 font-medium lg:font-semibold" style={{ color: text_color }}>{title}</h2>
                </div>
            </div>
        </Link>

    );
};

export default Donations;
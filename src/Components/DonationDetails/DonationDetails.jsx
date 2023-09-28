import { useLoaderData, useParams } from "react-router-dom";
import './Details.css';
import swal from "sweetalert";

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  
  const param = useParams();
  const donation = donationDetails.find(details => details.id == param.id);

  const handleDonated = () => {
    const addedData = [];

    const addDonate = JSON.parse(localStorage.getItem('donated'))
    if (!addDonate) {
      addedData.push(donation)
      localStorage.setItem('donated', JSON.stringify(addedData))
      swal("Thank You!", "You have donated!", "success");
    }
    else {

      const isExits = addDonate.find(donation => donation.id == param.id)
      if (!isExits) {
        addedData.push(...addDonate, donation)
        localStorage.setItem('donated', JSON.stringify(addedData))
        swal("Thank You!", "You have donated!", "success");
      }
      else {
        swal("Sorry!", "You already donated!", "error");
      }

    }
  }



  return (
    <div className="card lg:w-[1290px] lg:h-[700px] my-10">
      <div className="image-container">
        <img className="lg:w-[1290px] lg:h-[700px] rounded-lg px-10" src={donation.image} />
      </div>
      <button onClick={handleDonated} className=" overlay-button p-2 lg:p-2 w-36 text-lg font-semibold" style={{ backgroundColor: donation.text_color }}>Donate $ {donation.price}</button>
      <div className="overlay"></div>
      <div className="pl-12">
        <h2 className="card-title">{donation.title}</h2>
        <p className="w-[350px] md:w-[650px] lg:w-[1200px]">{donation.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;

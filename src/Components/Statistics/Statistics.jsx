import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { keepStoredDonationData } from "../LocalStorage/localstorage";
import Chart from "react-apexcharts"

const Statistics = () => {
  const getDonateData = useLoaderData();
  const [getTotalDonateData,setGetPieData] = useState([]);
  const storageInfo = keepStoredDonationData();
 

  useEffect(() =>{
    const storageData = keepStoredDonationData();
    const filterData = getDonateData.filter(data => storageData.includes(data.id));
    setGetPieData(filterData)
  },[getDonateData]);

 const donateDataPrice =storageInfo.map((info)=> parseInt(info.price));
 const totalDonations =donateDataPrice.reduce((total,item) => total + item,0);
 console.log(totalDonations);

 const storageDataPrice = getDonateData.map((info)=> parseInt(info.price));
 const storageDataTotalPrice = storageDataPrice.reduce((total,item) => total+item,0);
 console.log(storageDataTotalPrice);

 const donationReduce = storageDataTotalPrice -totalDonations;
 console.log(donationReduce);

 const yourDonationPercentage = (totalDonations / storageDataTotalPrice) * 100;
const totalDonationPercentage = 100 - yourDonationPercentage;


 
  return (
    <div className="mt-20">
      <Chart 
      type="pie"
      className="w-full"
      height={400}
      series={[totalDonationPercentage,getDonateData.length]}
      options={{
        noData:{text:"Empty Data"},
        colors:['#FF444A','#00c49F'],
        labels:["Total Donation","Your Donation"],
        
      }}
      >

      </Chart>
    </div>
  );
};

export default Statistics;
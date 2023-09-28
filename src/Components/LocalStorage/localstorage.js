const keepStoredDonationData = () => {
    const storedAllData = localStorage.getItem('donated')
    if(storedAllData){
        return JSON.parse(storedAllData)
    }
    return[]
}

const storedata = id =>{
    const storedDonationsData = keepStoredDonationData()
    const exits = storedDonationsData.find (donationId=> donationId.id == id.id)
    if(!exits){
        storedDonationsData.push(id)
        localStorage.setItem('donated' ,JSON.stringify(storedDonationsData))
    }
}

export {keepStoredDonationData,storedata}
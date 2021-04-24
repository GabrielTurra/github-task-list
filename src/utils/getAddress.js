const GetAddress = async (ZipCode) => {
    const handleZipCode = ZipCode.replace('-', '');

    if(handleZipCode.length < 8){
        return;
    }

    const handleAddress = await fetch(
        `https://ws.apicep.com/cep/${handleZipCode}.json`, {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
            }
        }
    )
      .then((response) => response.json())
      .catch((err) => console.log(`Falha na requisição: ${err}`));
        
    const myAddress = { 
        state: handleAddress.state,
        city: handleAddress.city,
        street: handleAddress.address, 
        district: handleAddress.district,
    };

    return myAddress;
}

export default GetAddress;
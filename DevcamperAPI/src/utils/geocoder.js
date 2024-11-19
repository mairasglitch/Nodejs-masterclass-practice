async function parseAddress(address) {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&addressdetails=1&limit=1`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();

    return data[0]; // Return the first (and only) result
  } catch (error) {
    console.error("Error fetching geocoding data:", error);
  }
}

async function parseAddressByZipcode(zipcode) {
  const encodedZipcode = encodeURIComponent(zipcode);

  const url = `https://nominatim.openstreetmap.org/search?postalcode=${encodedZipcode}&format=json&addressdetails=1&limit=1`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();

    return data[0]; // Return the first (and only) result
  } catch (error) {
    console.error("Error fetching geocoding data:", error);
  }
}

module.exports = {
  parseAddress,
  parseAddressByZipcode,
};

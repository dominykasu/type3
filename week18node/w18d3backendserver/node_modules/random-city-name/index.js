function randomCity(options) {
    let citiesByCountryCode = {
        'US': [
            'New York'
        ],
        'CA': [
            'Toronto'
        ]
    }
    let allCities = [];

    for (const countryCode of Object.keys(citiesByCountryCode)) {
        allCities = allCities.concat(citiesByCountryCode[countryCode]);
    }
 
    switch (options.countryCode) {
        case 'US':
            return 'New York';
        case 'CA':
            return 'Toronto';
        default:
            return allCities[0];
    }
   }
}
module.exports.randomCity = randomCity
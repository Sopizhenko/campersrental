export const capitalize = (str) => {
    if (!str) return ""; // Handle empty strings
    return str[0].toUpperCase() + str.slice(1);
}

export const getFilterParams = (filters, page) => {
    const queryParams = new URLSearchParams();

    queryParams.append("page", page);
    queryParams.append("limit", page * 4);

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== '' && value !== false) queryParams.append(key, value);
    });

    return queryParams.toString();
}

export const featureMapping = {
    engine: 'icon-fuel-pump',
    transmission: 'icon-transmission',
    AC: 'icon-fridge',
    bathroom: 'icon-shower',
    kitchen: 'icon-cup-hot',
    TV: 'icon-tv',
    radio: 'icon-radio',
    refrigerator: 'icon-fridge',
    microwave: 'icon-microwave',
    gas: 'icon-gas-stove',
    water: 'icon-water',
    petrol: 'icon-fuel-pump',
    automatic: 'icon-transmission',
    panelTruck: 'icon-grid-1_2',
    fullyIntegrated: 'icon-grid-2',
    alcove: 'icon-grid-3'
};

export const defaultFilters = {
    location: '',
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    microwave: false,
    radio: false,
    refrigerator: false,
    gas: false,
    water: false,
    petrol: false,
    form: '',
};

export const vehicleTypesMapping = {
    panelTruck: 'Van',
    fullyIntegrated: 'Fully Integrated',
    alcove: 'Alcove'
};
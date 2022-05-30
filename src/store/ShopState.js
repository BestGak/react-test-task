export const CATEGORIES = {
    ALL: 'ALL',
    WHOLESLAE: 'Wholesale',
    RETAIL: 'Retail'
}
export const SHOPS = [{
    title: "Lyvarska str., 2",
    description: "Discount -20% on roses",
    category: CATEGORIES.WHOLESLAE,
    lat: 50.489964,
    lng: 30.474434

}, {
    title: "Feodosiyskiy lane, 14",
    description: "Demiivska",
    category: CATEGORIES.WHOLESLAE,
    lat: 50.402663,
    lng: 30.531727
}, {
    title: "Hlybochytska, 40G",
    description: "",
    category: CATEGORIES.WHOLESLAE,
    lat: 50.461457,
    lng: 30.49765

}, {
    title: "Verkhniy Val str, 54/23",
    description: "Podil",
    category: CATEGORIES.RETAIL,
    lat: 50.469762,
    lng: 30.518413
}, {
    title: "Marshala Tymoshenka str, 18",
    description: "Minska",
    category: CATEGORIES.RETAIL,
    lat: 50.51152,
    lng: 30.5052
}, {
    title: "Peremohy Avenue, 65A",
    description: "Nyvky",
    category: CATEGORIES.WHOLESLAE,
    lat: 50.458441,
    lng: 30.411522

}, {
    title: "Danyla Shcherbakivskoho str., 37",
    description: '',
    category: CATEGORIES.WHOLESLAE,
    lat: 50.468066,
    lng: 30.405332
}];

export const CATEGORY_SHOPS_DATA = [{
    title: 'All Shops',
    type: CATEGORIES.ALL
}, {
    title: 'Wholesale and retail shops',
    type: CATEGORIES.WHOLESLAE
}, {
    title: 'Retails Stores',
    type: CATEGORIES.RETAIL
}];
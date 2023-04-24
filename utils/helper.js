export const filterRestaurant = (searchText, allRestaurant) => {
    return allRestaurant.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  };
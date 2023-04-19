const useRestaurant = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2984413999999981&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING#"
      );
      const json = await data.json();
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error, "mero ho hai");
      setAllRestaurant([]);
      setFilteredRestaurant([]);
    }
  }
};

export default useRestaurant
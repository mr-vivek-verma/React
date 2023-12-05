import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className='body'>
        <div className='search'>Search</div>
        <div className='restaurant-container'>
        {/* So here we have passed props */}
        {
            resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
        </div>
        </div>
    )
}

export default Body;
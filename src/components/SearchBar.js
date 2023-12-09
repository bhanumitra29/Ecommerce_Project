// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchItems } from "../redux/features/details/detailsSlice";
// import { useNavigate } from "react-router-dom";
// ;
// const SearchComponent = () => {
//     const dispatch = useDispatch();
//     const [searchQuery, setSearchQuery] = useState("");
//     const searchedItems = useSelector(state => state.detailsReducer.value);
//     const loading = useSelector(state => state.detailsReducer.loading);
//    const Navi = useNavigate();
    
    

//     const handleSearch = () => {
//         dispatch(searchItems(searchQuery));
//         setSearchQuery(""); 
//     };

//     const navigateToSearchedItems = () => {
//       Navi("/searcheditems", { searchedItems }); 
//   };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//             {loading && <p>Loading...</p>}
//             {searchedItems ? (
//                 searchedItems.length === 0 ? (
//                     <p>No items found</p>
//                 ) : (
//                   // <SearchedItem SearchedDetails={searchedItems} />
//                   // Navi("/sercheditems")
//                   <button onClick={navigateToSearchedItems}>{searchedItems.name}</button>
//                 )
//             ) : (
//                 <p>No items found</p>
//             )}
//         </div>
//     );
// };

// export default SearchComponent;

import React from 'react'

const SearchBar = () => {
  return (
    <div>
      search
    </div>
  )
}

export default SearchBar
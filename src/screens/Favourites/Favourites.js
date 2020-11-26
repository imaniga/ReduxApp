import React, {useContext} from 'react'
import {ScrollView} from 'react-native'
import SecondaryBookComponent from '../../components/SecondaryBookComponent/SecondaryBookComponent'
import { BookContext } from '../../context/book-context'
import {REMOVE_FROM_FAVOURITES} from '../../context/actions'

const Favourites = () => {
    const [state, dispatch] = useContext(BookContext);
    const removeBookFromFavourites = (id) => {
        dispatch({
            type: REMOVE_FROM_FAVOURITES,
            payload:id
          });
        console.log(state)  
    }
    return(
        <ScrollView>
            {state.favouriteBooks.map((item)=>{
                return (<SecondaryBookComponent
                     key={item._id}
                     book ={item} 
                     onRemove={()=>removeBookFromFavourites(item._id)}
                     />)
            })}
        </ScrollView>
    )
}

export default Favourites;
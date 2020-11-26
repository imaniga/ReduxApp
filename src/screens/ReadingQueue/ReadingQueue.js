import React, {useContext} from 'react'
import {ScrollView} from 'react-native'
import SecondaryBookComponent from '../../components/SecondaryBookComponent/SecondaryBookComponent'
import { BookContext } from '../../context/book-context'
import {REMOVE_FROM_READING} from '../../context/actions'


const ReadingQueue = () => {
    const [state, dispatch] = useContext(BookContext);
    const removeBookFromReading = (id) => {
        dispatch({
            type: REMOVE_FROM_READING,
            payload:id
          });
        console.log("aiiiici",state)  
    }
    return(
        <ScrollView>
            {state.readingQueue.map((item)=>{
                return (<SecondaryBookComponent
                     key={item._id}
                     book ={item} 
                     onRemove={()=>{removeBookFromReading(item._id)}}
                     />)
            })}
        </ScrollView>
    )
}

export default ReadingQueue;
import React, {useContext} from 'react'
import {ScrollView} from 'react-native'
import Book from '../../components/Book/Book'
import { BookContext } from '../../context/book-context'


const ReadingQueue = () => {
    const [state, dispatch] = useContext(BookContext);
    return(
        <ScrollView>
            {state.readingQueue.map((item, index)=>{
                return (<Book
                     key={index}
                     book ={item} />)
            })}
        </ScrollView>
    )
}

export default ReadingQueue;
import React, {useState, useContext} from 'react'
import {View,Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles'
import { BookContext } from '../../context/book-context'


const BookDetails = ({route}) => {
const {book} = route.params     

const [inputs, setInputs] = useState(book? {name:book.name, author:book.author, genre:book.genre.name}:{name:'', author:'', genre:''})
const [state, dispatch] = useContext(BookContext);
const addBook = () => {
    dispatch({
        type: "ADD_BOOK",
        payload: { name: inputs.name, author:inputs.author, genre:inputs.genre }
      });
}

const editBook = () => { 
    dispatch({
        type: "UPDATE_BOOK",
        payload: {...book, name: inputs.name, author:inputs.author, genre:inputs.genre}
      });   
}

const onPressButton = () =>{
  if(inputs.title&&inputs.author&&inputs.genre)
  if(book) {
      editBook(book);
  }
  else {
      addBook();
  }    
}



    return (
        <View>
            <View style={styles.container}>
            <Text style={styles.label}>Book name</Text>
            <TextInput style={styles.input} 
            value={inputs.name}
            onChangeText={val=>{setInputs({...inputs, name:val})}}
            />
            </View>
            <View style={styles.container}>
            <Text style={styles.label}>Book author</Text>
            <TextInput style={styles.input} 
            value={inputs.author}
            onChangeText={val=>setInputs({...inputs, author:val})}
            />
            </View>
            <View style={styles.container}>
            <Text style={styles.label}>Book genre</Text>
            <TextInput style={styles.input} 
            value={inputs.genre}
            onChangeText={val=>setInputs({...inputs, genre:val})}
            />
            </View>    
            <View>
              <TouchableOpacity onPress={onPressButton} style={styles.button}><Text style={styles.btnText}>
               {book? 'Edit book':'Add book'}   
            </Text></TouchableOpacity>    
            </View>  
        </View>
    )
}

export default BookDetails



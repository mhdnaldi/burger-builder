import axios from 'axios'

const instance = axios.create({
  baseUrl: 'https://react-myburger-763c5-default-rtdb.firebaseio.com'
})

export default instance
import Axios from 'axios'

const axios = Axios.create({
  timeout: 60 * 1000,
})

export default axios

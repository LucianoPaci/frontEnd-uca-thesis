import * as api from './api/src'

const client = new api.DefaultApi()
client.apiClient.basePath = process.env.REACT_APP_API_URL
export default client
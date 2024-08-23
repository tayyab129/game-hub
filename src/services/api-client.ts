import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
  count: number
  next: string | null;
  results: T[]
}


const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '936bdc64520142c383881ee7977ba194',
  },
});



class APIClient<T>{
// get(slug: string) {
//     throw new Error("Method not implemented.");
// }
endpoint :string;

constructor(endpoint:string){
this.endpoint = endpoint;
}
getAll = (config: AxiosRequestConfig) => {
return axiosInstance
.get<FetchResponse<T>>(this.endpoint, config)
.then(res => res.data)
};

get =  (id: number | string) => {
 return axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data)
};

}
export default APIClient;
// import {useDispatch} from 'react-redux'
// import { fetchUsers } from "../../redux/actions";

// export const useUserService = (page,choiceStore)=>{
//     const dispatch = useDispatch();
//     dispatch(
//         fetchUsers(
//           `https://randomuser.me/api/?page=${page}&results=50&nat=${choiceStore}`
//         )
//       );
// }
export const getUrl = (page,batchSize,choiceStore)=>`https://randomuser.me/api/?page=${page}&results=${batchSize}&nat=${choiceStore}`
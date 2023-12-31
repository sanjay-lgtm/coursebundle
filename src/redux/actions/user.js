import { server } from '../store/store';
import axios from 'axios';

// export  const login = (email, password) => async dispatch => {
//   try {
//     dispatch({ type: 'loginRequest' });

//     const {data} = await axios.post(
//       `${server}/login`,
//       { email, password },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       }
//     );
//    console.log(data);
//     dispatch({ type: 'loginSuccess', payload: data });
//   } catch (error) {
//     dispatch({ type: 'loginFail', payload: error.response.data.message });
//   }
// };

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const data = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: 'loginSuccess', payload:data });
  } catch (error) {
    console.log("error",error)
    //dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};
/////////////////////////////////
export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const  data  = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'loadUserSuccess', payload: data?.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error?.response?.data?.message });
  }
};



////////////////////
export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'LogoutRequest' });

    const {data} = await axios.get(
      `${server}/logout`,

      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'LogoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'LogoutFail', payload: error?.response?.data?.message });
  }
};

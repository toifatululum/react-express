import {
  REGISTER_BERHASIL,
  LOGIN__BERHASIL,
  ERROR,
  REGISTER_ERROR
} from "../action/types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_BERHASIL:
    case LOGIN__BERHASIL:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    case ERROR:
  }
}

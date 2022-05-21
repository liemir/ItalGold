const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload
            }
        case "LOGIN_FAILORE":
            return {
                user: null
            }
        case "LOGOUT":
            return {
                user: null
            }
            case "USER_UPDATE":
                return {
                    user: action.payload
                }
        default:
            return state
    }
}
export default Reducer
export const getUsers = () => (dispatch:any) => {

    dispatch({
        type: 'get_users',
        payload: [1, 2, 3]
    })

}
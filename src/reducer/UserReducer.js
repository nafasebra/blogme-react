function UserReducer(state, action){
    switch (action.type) {
        case "SignIn": return SignIn(state, action);
        case "LogIn": return LogIn(state, action);
        case "LogOut": return LogOut(state);
        default: return state;
    }
}

export default UserReducer;

function SignIn(state, action){
    let {username, email, password} = action.payload;

    console.log(state);
    return {
        user: [
            ...state.user,
            {
                name: username,
                password: password,
                email: email
            }
        ],
        currectUser: {
            name: username,
            password: password
        },
        isLogining: true
    }
}

function LogIn(state, action){
    let {username, password} = action.payload;

    state.user.forEach(item => {
        if(username === item.name && password === item.password){
            return { 
                user: [
                    ...state.user
                ],
                currectUser: {
                    name: username,
                    password: password
                },
                isLogining: true 
            }
        } else {
            alert("Please Enter current username and password");
        }
    })
}

function LogOut(state){
    return{
        user: [
            ...state.user
        ],
        currectUser: {},
        isLogining: false
    }
}
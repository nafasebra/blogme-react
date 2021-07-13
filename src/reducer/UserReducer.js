function UserReducer(state, action){
    switch (action.type) {
        case "SignIn":
            break;
        case "LogIn":
            break;
        case "LogOut":
            break;
        default:
            return state;
    }
}

export default UserReducer;

function SignIn(state, action){
    let {e, username, email, password} = action.payload;

    e.preventDefault();
    return {
        users: [
            ...state.users,
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
    let {e, username, password} = action.payload;

    e.preventDefault();
    
    state.users.forEach(item => {
        if(username === item.name && password === item.password){
            return { 
                ...state.users,
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
        ...state.users,
        currectUser: {},
        isLogining: false
    }
}
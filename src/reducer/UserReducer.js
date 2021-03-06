function UserReducer(state, action){
    switch (action.type) {
        case "SignIn": 
            return SignIn(state, action);
        case "LogOut": 
            return LogOut(state);
        case "LogIn": 
            return LogIn(state, action);
        default: 
            return state;
    }
}

export default UserReducer;

function SignIn(state, action){
    let { username, email, password } = action.payload;

    console.log("log the state when before register user...");
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
        currentUser: {
            name: username,
            password: password
        },
        isLogining: true
    }
}

function LogIn(state, action) {
    let { username, password } = action.payload;

    console.log("log the state when before log in user...");
    console.log(state);
    let isUser = false;

    state.user.find(item => {
        if(username === item.name && password === item.password) 
            isUser = true;
        else{
            alert('oooops! Please enter current username or password...')
        }
    })

    if(isUser === true) {
        return {
            user: [
                ...state.user
            ],
            currentUser: {
                name: username,
                password: password
            },
            isLogining: true
        }
    } else {
        return {
            user: [ ...state.user ],
            currentUser: {},
            isLogining: false
        }
    }
}

function LogOut(state){

    console.log("log the state when before user logout");
    console.log(state)

    return{
        user: [ ...state.user ],
        currentUser: {},
        isLogining: false
    }
}
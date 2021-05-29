import React from 'react'

class Login extends React.Component {
    // myName = "Eva"
    // constructor() {
    //     super();
    // }
    // handleClick = (myName, event) => {
    //     console.log(event.target)
    //     event.preventDefault()
    //     alert("You have clicked, " + myName + " !")
    // }
    emailRef = React.createRef();
    passwordRef = React.createRef();
    handleSubmit = event => {
        // 1.阻止默認行為
        event.preventDefault();
        // 2.獲取表單數據
        const formData = {
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value
        }
        console.log(formData)
        // 3.處理登入邏輯

        // 4.按submit後回首頁
        this.props.history.push('/');
    }
    state = {
        isUserTyping: false,
    }
    render() {
        return (
            <div className='Login-wrapper'>
                {/* <button onClick={event => this.handleClick("Eva", event)}> Buy Something! </button> */}
                <form className='box login-box' onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label className='label'>{this.state.isUserTyping ? "Typing..." : "Email"}</label>
                        <div className='cobtrol'>
                            <input className='input' type='text' placeholder='Email' ref={this.emailRef} />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Password</label>
                        <div className='control'>
                            <input className='input' type='text' placeholder='Password' ref={this.passwordRef} />
                        </div>
                    </div>
                    <div className='control'>
                        <button className='button is-fullwidth is-primary'>Submit
                        </button>
                    </div>
                </form>
            </div>)
    }
}

export default Login
let isLogin = true;


if (!localStorage.getItem('test@gmail.com')) {
    localStorage.setItem('test@gmail.com', '123456');
}

function toggleMode() {
    isLogin = !isLogin;
    document.getElementById('title').innerText = isLogin ? 'Login' : 'Register';
    document.getElementById('submit-btn').innerText = isLogin ? 'Log in' : 'Register Now';
    document.getElementById('toggle-text').innerHTML = isLogin ? 
        "Don't have an account? <span onclick='toggleMode()'>Register</span>" : 
        "Already have an account? <span onclick='toggleMode()'>Login</span>";
}

function handleAuth() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (!email || !pass) {
        alert("Please enter both fields");
        return;
    }

    if (isLogin) {
        const storedPassword = localStorage.getItem(email);
        if (storedPassword === pass) {
            document.getElementById('auth-box').style.display = 'none';
            document.getElementById('secure-box').style.display = 'block';
        } else {
            alert("Login Failed! Try test@gmail.com / 123456");
        }
    } else {
        localStorage.setItem(email, pass);
        alert("Account Created! You can now login.");
        toggleMode();
    }
}
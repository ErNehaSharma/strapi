<!DOCTYPE html>
<html>
<head>
    <title>Authorization Example</title>
</head>
<body>
    <h1>Restricted Page</h1>
    <p>You need to log in to access this page.</p>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
    <p id="errorMessage" style="color: red;"></p>

    <script src="auth.js"></script>
</body>
</html>

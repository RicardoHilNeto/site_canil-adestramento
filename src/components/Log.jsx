import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56.4vh;
  background: linear-gradient(to right, #3494e6, #ec6ead);
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #57b846, #00a99d);
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(to right, #00a99d, #57b846);
  }
`;

const RegisterLink = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const LoginScreen = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de login
  };

  const handleClearForm = () => {
    if (usernameRef.current) {
      usernameRef.current.value = '';
    }
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <Input type="text" placeholder="Username" ref={usernameRef} />
          <Input type="password" placeholder="Password" ref={passwordRef} />
          <Button type="submit" onClick={handleClearForm}>
            Login
          </Button>
        </form>
        <RegisterLink>
          Don't have an account? <a href="/register">Register here</a>
        </RegisterLink>
      </Card>
    </Container>
  );
};

export default LoginScreen;

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";
import { useAuth } from "../../Providers/Auth";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Button,
  HeaderContainer,
  MainContainer,
} from "./styles";

const Login = () => {
  const { handleLogin } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    handleLogin(data, history);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <Link to="/">
          <div className="niceMeeting">NiceMeeting</div>
        </Link>
      </HeaderContainer>
      <Container>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h1>Entrar</h1>
              <h3> Entre com seu usuário e senha</h3>
              <TextField
                id="standard-basic"
                label="Email"
                {...register("email")}
              />
              <div className="error"> {errors.email?.message}</div>

              <TextField
                id="standard-basic"
                label="Senha"
                type="password"
                {...register("password")}
              />
              <div className="error"> {errors.password?.message}</div>
              <Button type="submit"> ENTRAR </Button>
              <p>
                Não tem uma conta ? Faça seu{" "}
                <Link to="/register">Cadastro</Link>
              </p>
            </form>
            <span>Página inicial</span>
            <p>
              <Link to="/">
                <HomeIcon />
              </Link>
            </p>
          </AnimationContainer>
        </Content>
        <Background>
          <section></section>
        </Background>
      </Container>
    </MainContainer>
  );
};

export default Login;

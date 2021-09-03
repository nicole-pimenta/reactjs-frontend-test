import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Button,
  HeaderContainer,
  MainContainer,
} from "./styles";

const Register = () => {
  // const { logIn } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    //logIn(data, history);
    reset();
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <Link to="/">
          <div className="easyMeeting">EasyMeeting</div>
        </Link>
      </HeaderContainer>
      <Container>
        <Background>
          <section></section>
        </Background>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h1>Cadastre-se</h1>
              <h3> Primeiro, cadastre sua conta</h3>
              <TextField
                id="standard-basic"
                label="Nome de usuário"
                {...register("username")}
              />
              <div className="error"> {errors.username?.message}</div>
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
              <TextField
                id="standard-basic"
                label="Confirme sua senha"
                type="password"
                {...register("passwordConfirm")}
              />
              <div className="error"> {errors.passwordConfirm?.message}</div>
              <Button type="submit"> CADASTRAR </Button>
              <p>
                Já tem uma conta ? Faça o <Link to="/login">Login</Link>
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
      </Container>
    </MainContainer>
  );
};

export default Register;

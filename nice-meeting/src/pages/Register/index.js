import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
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

const Register = () => {
  const { authenticated } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "A senha deve conter no minimo 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({ username, email, password }) => {
    const newUser = { username, email, password };
    api
      .post("/register", newUser)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta ,tente outro email"));
  };

  if (authenticated) {
    return <Redirect to="/meeting" />;
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <Link to="/">
          <div className="niceMeeting">NiceMeeting</div>
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

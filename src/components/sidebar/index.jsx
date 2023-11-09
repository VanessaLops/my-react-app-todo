import { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Buttons, Button, Icon, Profile } from "./styles";

import avatar from "../../assets/avatar.svg";

import { MdAdd } from "../../styles/Icons";
import LogoDark from "../../assets/logo-dark";
import { AuthContext } from "../../contexts/auth";

const Sidebar = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <Container>
      <LogoDark alt="Gerenciamento Logo" />
      <Buttons>
        <Button>
          <span>Nova Tarefa</span>
          <Link to="/new">
            <Icon>
              <MdAdd size={24} />
            </Icon>
          </Link>
        </Button>
      </Buttons>

      <Profile>
        <div className="user-profile">
          <img src={avatar} alt="Perfil" />
          <p>Vanessa Lopes</p>
        </div>

        <div>
          <Link to="/profile">Editar perfil</Link>
          <button onClick={signOut}>Sair</button>
        </div>
      </Profile>
    </Container>
  );
};

export default Sidebar;

import { Container, CardHeader, CardBody, Info } from "./styles";
import {
  MdDateRange,
  GrLocation,
  BiEdit,
  AiOutlineDelete,
} from "../../styles/Icons";
import { Link } from "react-router-dom";

export const Card = ({ name, description, date, local, navigate,type,datat }) => {
  const data = {
    name: name,
    description: description,
    date: date,
    local: local,
    id: navigate,
    type:type,
    datat:[datat]
  };

  console.log(navigate, " navigatenavigatenavigate");
  return (
    <Container>
      <CardHeader>
        <h2>{name}</h2>
        <div style={{ display: "flex" }}>
          <Link
            to={{
              pathname: `/event/${navigate}`,
              state:data,
            }}
          >
            <BiEdit size={30} color={"#A2DE98"} />
          </Link>
          <AiOutlineDelete
            className="exclusive"
            size={30}
            color={"var(--cancel)"}
          />
        </div>
      </CardHeader>

      <CardBody>
        <p>{description}</p>

        <Info>
          <MdDateRange size={30} color={"var(--purple)"} />
          <span>{date}</span>
        </Info>

        <Info>
          <GrLocation size={32} color={"var(--purple)"} />
          <span>{local}</span>
        </Info>
      </CardBody>
    </Container>
  );
};

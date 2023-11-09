import { Container } from "./styles";

import EmptyList from "../empty-list";
import moment from "moment";
import { Table } from "../edit-event/styles";
import { CardHeader } from "../../components/card/styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const CreatedEvents = () => {
  const eventsUser = [];

  return (
    <Container>
      {eventsUser.length > 0 ? (
        <Container>
          <>
            <Table>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Local</th>
                    <th>Opçêoes</th>
                  </tr>
                </thead>
                <tbody>
                  {eventsUser.map((ev) => (
                    <tr key={ev.userid}>
                      <td>{ev.userid}</td>
                      <td>{ev.name}</td>
                      <td>{ev.description}</td>
                      <td>{moment(ev.date).format("DD/MM/YYYY")}</td>
                      <td>{ev.local}</td>
                      <td>
                        <CardHeader>
                          <h2>{name}</h2>
                          <div style={{ display: "flex" }}>
                            <Link
                              to={{
                                pathname: `/event/${ev.userid}`,
                                state: ev,
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          </>
        </Container>
      ) : (
        <EmptyList />
      )}
    </Container>
  );
};

export default CreatedEvents;

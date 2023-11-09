import moment from "moment";

import { Container, Table } from "./styles";

import { connect, useDispatch } from "react-redux";
import { deleteTaskRequest, fetchTasksRequest } from "../sagas/actions";
import { useEffect } from "react";
import EmptyList from "../pages/empty-list";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CardHeader } from "../components/card/styles";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const ActuallyEvents = ({ tasks, fetchTasksRequest, deleteTaskRequest }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch, fetchTasksRequest]);

  const currentDate = moment().format("DD/MM/YYYY");
  const filteredTasks = tasks.filter((task) => {
    const taskDate = moment(task.date).format("DD/MM/YYYY");
    return taskDate === currentDate;
  });

  function handleDeleteClick(taskId) {
    alert("You clicked me!" + taskId);
    deleteTaskRequest(taskId);
  }

  // deleteTaskRequest(taskId);
  return (
    <>
      {filteredTasks?.length > 0 ? (
        <Container>
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
                {filteredTasks.map((ev) => (
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
                          <button
                            onClick={()  => handleDeleteClick(ev.userid)}
                            style={{ background: "transparent" }}
                          >
                            <AiOutlineDelete
                              className="exclusive"
                              size={30}
                              color={"var(--cancel)"}
                            />
                          </button>
                        </div>
                      </CardHeader>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </Container>
      ) : (
        <>
          {" "}
          <EmptyList />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTaskRequest: (taskId) => dispatch(deleteTaskRequest(taskId)),
    fetchTasksRequest,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActuallyEvents);

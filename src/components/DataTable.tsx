
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const DataTable = ({data } : any) => {
  const navigate = useNavigate()
  return (
    <Table striped="columns">
    <thead>
      <tr>
        <th>City</th>
        <th>Country</th>
        <th>Timezone</th>
      </tr>
    </thead>
    <tbody>
      {
        
        data.map((res : any) => {
          return (
            <tr key={res.name} onClick={() => navigate("/citydetails" , {
              state : res.coordinates
            })}>
            <td>{res.name}</td>
            <td>{res.cou_name_en}</td>
            <td>{res.timezone}</td>
          </tr>
          )
        })
      }
     
    </tbody>
  </Table>
  );
};

export default DataTable;

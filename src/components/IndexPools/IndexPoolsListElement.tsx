import { ENetworks } from "$/store";
import { observer } from "mobx-react-lite";

interface IndexPoolsListElementProps {
  indexPoolId: string;
  activeNetwork: ENetworks;
}

const IndexPoolsListElement = observer<IndexPoolsListElementProps>(
  ({ indexPoolId, activeNetwork }) => {
    return (
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    );
  }
);

export default IndexPoolsListElement;

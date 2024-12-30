import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;

  return (
    <Table
      columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"
      role="table">
      <Table.Header role="row">
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>


<Table.Body data={cabins} render={(cabin) => (
        <CabinRow
          key={cabin.id}
          cabin={cabin}
        />
      )}/>
      
    </Table>
  );
}

export default CabinTable;
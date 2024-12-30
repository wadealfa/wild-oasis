import Spinner from "../../ui/Spinner";
import useCabins from "./useCabins";

 function CabinFiltering() {
  const {isLoading, cabins } = useCabins();

  if (isLoading) return 
  const discount =  cabins.map((cabin) => cabin.discount);
  const sorted=  discount.sort( (a,b)=>a-b)
  console.log(" discount",discount);
  console.log("sorted discount",sorted);

  return <div>CabinFiltering</div>;
}

export default CabinFiltering;

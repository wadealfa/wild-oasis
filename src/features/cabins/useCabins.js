import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../services/apiCabin";

export default function useCabins() {
  const { data: cabins, isLoading } = useQuery({
    queryKey: ["Cabins"],
    queryFn: getCabin,
  });

  return { cabins, isLoading };
}

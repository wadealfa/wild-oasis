import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";

export default function useCreateCabin() {

   

  // const { id: editId, ...editValues } = CabinToEdit;

  // const isEditSession = Boolean(editId);

  const queryClient = useQueryClient();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  //   getValues,
  // } = useForm({ defaultValues: isEditSession ? editValues : {} });

    // console.log({
    //   editId,
    //   editValues,
    //   isEditSession,
    // });
    // console.log(errors);
  

//create cabin

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("cabin has been successifully created");
        queryClient.invalidateQueries({
          queryKey: ["Cabins"],
        });
        
      },
      onError: (error) => toast.error(error.message),
    });

    //edit cabin
  
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
      mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
      onSuccess: () => {
        toast.success("cabin has been successifully Edited");
        queryClient.invalidateQueries({
          queryKey: ["Cabins"],
        });
       
      },
      onError: (error) => toast.error(error.message),
    });
    const isWorking = isCreating || isEditing;
  
   
  return {
  editCabin,isWorking,createCabin
  }
}
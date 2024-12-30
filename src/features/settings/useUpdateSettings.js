import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  // const { mutate: handleUpdateSettings, isLoading } = useMutation({
  //   mutationFn: () => {
  //     updateSetting;
  //   },
  //   onSuccess: () => {
  //     toast.success("settings succesifully updated");
  //     queryClient.invalidateQueries({
  //       queryKey: ["settings"],
  //     });
  //   },
  //   onError: (error) => toast.error(error.message),
  // });

  
    
  //edit cabin

  const { mutate: handleUpdateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("settings succesifully updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
     
    },
    onError: (error) => toast.error(error.message),
  });
  // const isWorking = isCreating || isEditing;

 

  return { handleUpdateSettings, isUpdating };
}

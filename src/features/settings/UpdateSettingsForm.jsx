import { useQuery } from "@tanstack/react-query";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { getSettings } from "../../services/apiSettings";
import Spinner from "../../ui/Spinner";

import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { handleUpdateSettings, isLoading:isUpdating } = useUpdateSettings();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const {
    minimumBookingLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakfastPrice,
  } = data;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    handleUpdateSettings({ [field]: value });
  }
  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minimumBookingLength}
          onBlur={(e) => handleUpdate(e, "minimumBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

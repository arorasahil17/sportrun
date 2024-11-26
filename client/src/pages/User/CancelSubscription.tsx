import { useParams } from "react-router";
import { createRecord } from "../../helpers/commonHelper";
import useCreateRecord from "../../hooks/useCreateRecord";
import {
  CancelSubscriptionFormData,
  cancelSubscriptionSchema,
} from "../../schemas/subscriptionSchema";
import { useEffect } from "react";
import CancelSubscriptionForm from "../../components/Dashboard/CancelSubscriptionForm";

const CancelSubscription = () => {
  const { id } = useParams();

  const { register, errors, handleSubmit, onsubmit, status, reset, watch } =
    useCreateRecord<CancelSubscriptionFormData>({
      mutationFn: createRecord,
      validationSchema: cancelSubscriptionSchema,
      path: "/cancel/subscription",
    });

  useEffect(() => {
    if (id) {
      reset({
        subscriptionId: Number(id),
      });
    }
  }, [id]);

  return (
    <CancelSubscriptionForm
      submitted={status === "success"}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onsubmit={onsubmit}
      isPending={status === "pending"}
    />
  );
};

export default CancelSubscription;

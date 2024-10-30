import { useEffect, useState } from "react";
import {
  SubscriptionInputs,
  subscriptionSchema,
} from "../schemas/subscriptionSchema";
import useCreateRecord from "../hooks/useCreateRecord";
import { createRecord, fetchRecord } from "../helpers/commonHelper";
import CheckoutForm from "../components/CheckoutForm";
import { useSelector } from "react-redux";
import { StoreState } from "../lib/redux/store";
import { useParams } from "react-router";
import useFetchRecord from "../hooks/useGetRecord";
import { Course } from "../types";

const Checkout = () => {
  const [days, setDays] = useState(10);

  const params = useParams();
  const courseId = Number(params.id);

  const { data: course } = useFetchRecord<Course>({
    queryKey: [`course/${courseId}`],
    queryFn: fetchRecord,
    id: courseId,
    path: "/course",
  });

  const userId = useSelector((state: StoreState) => state.userReducer.user?.id);

  const { handleSubmit, errors, onsubmit, isPending, reset, getValues } =
    useCreateRecord<SubscriptionInputs>({
      mutationFn: createRecord,
      validationSchema: subscriptionSchema,
      path: "/subscribe",
    });

  const handleDaysChange = (days: number) => {
    setDays(days);
  };

  useEffect(() => {
    if (course) {
      reset({
        courseId: course.id,
        userId,
        price: course.offPrice * days,
        numberOfDays: days,
      });
    }
  }, [userId, courseId, course, days]);

  return (
    <CheckoutForm
      course={course}
      days={days}
      handleDaysChange={handleDaysChange}
      errors={errors}
      handleSubmit={handleSubmit}
      onsubmit={onsubmit}
      getValue={getValues}
      isPending={isPending}
    />
  );
};

export default Checkout;

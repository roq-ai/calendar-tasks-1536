import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  due_date: yup.date().required(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});

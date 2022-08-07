export const message = {
  required: "This field should'nt be empty",
  min: (value: number) => `Minimum length this field is ${value}`,
  max: (value: number) => `Maximum length this field is ${value}`,
  email: 'Email is invalid',
  confirm: 'Password must match',
};

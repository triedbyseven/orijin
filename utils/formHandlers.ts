export const onChangeText = (event, updateValue) => {
  const {
    target: { value, name },
  } = event;

  console.log(value, name);

  updateValue((prevState) => ({ ...prevState, formValues: { [name]: value } }));
};

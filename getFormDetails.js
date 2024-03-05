const GetFormDetails = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Access form data from event.target
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    const dateObject = new Date(formDataObject['date']);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = dateObject.getMonth();
    const month = monthNames[monthIndex];

    const year = dateObject.getFullYear(); // Get the year (e.g., 2024)
    const date = dateObject.getDate(); // Get the day of the month (e.g., 1)
    console.log(month, year,date)

    formDataObject['month'] = month.toString();
    formDataObject['year'] = year.toString();  
    formDataObject['date'] = date.toString();
    props.task(formDataObject)

    // Reset form values
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required/>
      </label>
      <label>
        Date:
        <input type="date" name="date" required/>
      </label>
      <input type="submit" value="Add"  />
    </form>
  );
}
export default GetFormDetails;

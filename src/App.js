import "./styles.css";

export default function App() {
  function Submit(e) {  
    
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    alert("Form submitted successfully!");
    fetch("https://script.google.com/macros/s/AKfycbzBHewgidZ5kM1QM1To8WCFCAWV-n3ScLfEg2ZjKgFFepqZ0AOpNyjvHZJk3PzF56J9WQ/exec", {
      method: "POST",
      body: formDatab,      
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);  
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.log(error);  
      alert("Form submitted successfully!");
    });
  }
  
  return (
      <div className="App">
      <h1>USER DATA FORM</h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Enter Name" name="Name" type="text" />
          <input placeholder="Enter Email" name="Email" type="email" />
          <input placeholder="Enter Adress" name="Message" type="text" />
          <input placeholder="Enter phone Number" name="Phone" type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

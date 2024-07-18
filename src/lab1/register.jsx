import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  function validateForm() {
    if (!firstName) {
      setError({
        firstName: "firstname is required",
      });
      return;
    }

    console.log({
      firstName,
      email,
      password,
    });
  }

  return (
    <>
      <div>
        <h2>Register New User</h2>
        <form>
          <div>
            <label>
              Firstname
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              {error && error.firstName && <label style={{color:'red'}}>{error.firstName}</label>}
            </label>
          </div>
          <div>
            <label>
              Email
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button
              onClick={() => {
                validateForm();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

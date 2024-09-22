import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Modal title="Sign up account">
        <p>Enter your personal data to create your account</p>
        <label htmlFor="email">Email</label>
        <input id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <button id="submit">Sign up</button>
      </Modal>
    </>
  );
}

export default App;

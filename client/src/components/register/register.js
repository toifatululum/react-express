import React, { useState } from "react";
import { register } from "../../action/auth";
import { connect } from "react-redux";

import PropTypes from "prop-types";
const Register = (isAuthenticated, register, error) => {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const { name, email, password } = formData;
  const onChange = async e => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    register({ name, email, password });
  };

  return (
    <div>
      <div className="form-group">
        <label>Nama</label>
        <input
          value={name}
          type="text"
          name="name"
          onChange={e => onChange(e)}
          className="form-control"
          id="exampleInputNama"
          aria-describedby="namaHelp"
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          value={email}
          type="email"
          className="form-control"
          name="email"
          onChange={e => onChange(e)}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          value={password}
          name="password"
          onChange={e => onChange(e)}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        type="submit"
        onClick={() => onSubmit()}
        className="btn btn-primary"
      >
        Submit
      </button>
    </div>
  );
};
Register.propTypes = {
  register: PropTypes.func.isRequired
};
export default connect(null, { register })(Register);

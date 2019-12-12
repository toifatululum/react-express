import React from "react";
import { register } from "../../action/auth";
import { stat } from "fs";
import { connect } from "http2";
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
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nama</label>
          <input
            value={name}
            type="text"
            name="name"
            onChange={e => onChange(e)}
            class="form-control"
            id="exampleInputNama"
            aria-describedby="namaHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            value={email}
            type="email"
            class="form-control"
            name="email"
            onChange={e => onChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            value={password}
            name="password"
            onChange={e => onChange(e)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProp = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProp, { register })(Register);

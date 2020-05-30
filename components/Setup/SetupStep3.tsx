export interface SetupStep3Props {
  refs?: any;
}

const SetupStep3: React.SFC<SetupStep3Props> = ({ refs }) => {
  return (
    <div className="form-row mb-4">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>Full Name</span> <br />
          {refs.firstNameRef.current.value} {refs.lastNameRef.current.value}
        </li>
        <li className="list-group-item">
          <span>Company Name</span> <br />
          {refs.companyNameRef.current.value}
        </li>
        <li className="list-group-item">
          <span>Your Email</span> <br />
          {refs.emailRef.current.value}
        </li>
      </ul>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>Username</span> <br />
          {refs.usernameRef.current.value}
        </li>
        <li className="list-group-item">
          <span>Password</span> <br />
          {refs.passwordRef.current.value}
        </li>
      </ul>
      <style jsx>
        {`
          .list-group {
           width: 50%; 
          }
          .list-group-item {
            border: none;
            font-family: 'Montserrat';
          }
          .list-group-item span {
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}

export default SetupStep3;
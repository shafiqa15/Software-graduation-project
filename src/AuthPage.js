import axios from 'axios'
import Top from "./PAGES/Top";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/authenticate',
        {username :value}
        
        )
        .then(r=> props.onAuth({ ...r.data,secret:value }))
        .catch(e => console.log('error',e))
     
    };
  
    return (
      <div className="background">
      <Top></Top>
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome Shafiqa15👋</div>
  <p className="form-subtitle">Here u can ask the admin of the company what do u want.</p>
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
import React ,{Component} from 'react';

class BasicForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        nameError: '',
        emailError: ''
      };
    }
  
    handleNameChange = event => {
      this.setState({ name: event.target.value }, () => {
        this.validateName();
      });
    };
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value }, () => {
        this.validateEmail();
      });
    };
  
    validateName = () => {
      const { name } = this.state;
      this.setState({
        nameError:
          name.length > 3 ? null : 'Name must be longer than 3 characters'
      });
    }
  
    validateEmail = () => {
      const { email } = this.state;
      this.setState({
        emailError:
          email.length > 3 ? null : 'Email must be longer than 3 characters'
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const { name, email } = this.state;
      alert(`Your state values: \n 
              name: ${name} \n 
              email: ${email}`);
    };
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
              id='name'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.handleNameChange}
              onBlur={this.validateName}
            />
            <div className='invalid-feedback'>{this.state.nameError}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
              id='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail}
            />
            <div className='invalid-feedback'>{this.state.emailError}</div>
          </div>
          <button type='submit' className='btn btn-success btn-block'>
            Submit
          </button>
        </form>
      );
    }
  }


  export default BasicForm;
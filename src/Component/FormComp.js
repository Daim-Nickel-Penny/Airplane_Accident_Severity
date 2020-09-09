import React ,{Component} from 'react';

class FormComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        ss:'' ,
        dsi:'',
        tsf:'' ,
        cm:'',
        tforce:'' ,
        ct:'' , 
        acode:'' , 
        me:'' , 
        rules:'' , 
        wmetric:''
       
      };
    }
  
    handleNameChange = event => {
      this.setState({ name: event.target.value })
    };
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value })
    };
  
  
  
    handleSubmit = event => {
      event.preventDefault();
      const { name, email } = this.state;
      console.log(this.state.name,this.state.email)
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
              
              id='name'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.handleNameChange}
          
            />

          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              id='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          
          <button type='submit' className='btn btn-success btn-block'>
            Submit
          </button>
        </form>
      );
    }
  }


  export default FormComp;
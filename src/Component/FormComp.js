import React ,{Component} from 'react';
import axios from "axios"; 

class FormComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        ss:'' ,
        dsi:'',
        tsc:'' ,
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

    handless = event => {
        this.setState({ ss: event.target.value })
      };
    
      handledsi = event => {
        this.setState({ dsi: event.target.value })
      };
    
      handletsc = event => {
        this.setState({ tsc: event.target.value })
      };
    
      handlecm = event => {
        this.setState({ cm: event.target.value })
      };
    
      handletforce = event => {
        this.setState({ tforce: event.target.value })
      };
    
      handlect = event => {
        this.setState({ ct: event.target.value })
      };
    
      handleacode = event => {
        this.setState({ acode: event.target.value })
      };
    
      handleme = event => {
        this.setState({ me: event.target.value })
      };
    
      handlerules = event => {
        this.setState({ rules: event.target.value })
      };
    
      handlewmetric = event => {
        this.setState({ wmetric: event.target.value })
      };
    
     
    

  
  
    handleSubmit = event => {
      event.preventDefault();
      const { name, email,ss , dsi , tsc , cm , tforce , ct , acode , me , rules , wmetric } = this.state;
      console.log(this.state.name,this.state.email,this.state.ss,this.state.dsi,this.state.tsc,this.state.cm
        ,this.state.tforce,this.state.ct,this.state.acode,this.state.me,this.state.rules,this.state.wmetric)
      alert(`Your Response has been recorded`);

              axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        //window.location = "/retrieve"
      })
  
              
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
            
            

             


          <div className='form-group'>
               <label htmlFor='name'>Safety Score</label>
            <input
              name='ss'
              id='ss'
              placeholder='Enter Safety Score'
              value={this.state.ss}
              onChange={this.handless}
            />
          </div> 


<div className='form-group'>
     <label htmlFor='name'>Days Since Inspection</label>
  <input
    name='dsi'
    id='dsi'
    placeholder='Enter Days Since Inspection'
    value={this.state.dsi}
    onChange={this.handledsi}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>Total Safety Complaints</label>
  <input
    name='tsc'
    id='tsc'
    placeholder='Enter Total Safety Complaints '
    value={this.state.tsc}
    onChange={this.handletsc}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>Control Metric</label>
  <input
    name='cm'
    id='cm'
    placeholder='Enter Control Metric'
    value={this.state.cm}
    onChange={this.handlecm}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>Turbulence in G force</label>
  <input
    name='tforce'
    id='tforce'
    placeholder='Enter Turbulence'
    value={this.state.tforce}
    onChange={this.handletforce}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>Cabin Temperature</label>
  <input
    name='ct'
    id='ct'
    placeholder='Enter ct'
    value={this.state.ct}
    onChange={this.handlect}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>Accident Type Code</label>
  <input
    name='acode'
    id='acode'
    placeholder='Enter Accident Type Code'
    value={this.state.acode}
    onChange={this.handleacode}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>Max Elevation</label>
  <input
    name='me'
    id='me'
    placeholder='Enter Max Elevation'
    value={this.state.me}
    onChange={this.handleme}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>number of rules violated</label>
  <input
    name='rules'
    id='rules'
    placeholder='Enter number of rules violate'
    value={this.state.rules}
    onChange={this.handlerules}
  />
</div> 


<div className='form-group'>
     <label htmlFor='name'>weather metric</label>
  <input
    name='wmetric'
    id='wmetric'
    placeholder='Enter name'
    value={this.state.wmetric}
    onChange={this.handlewmetric}
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
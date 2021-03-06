import React, { Component } from "react";
import axios from "axios";



class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      ss: "0",
      dsi: "0",
      tsc: "0",
      cm: "0",
      tforce: "0",
      ct: "0",
      acode: "0",
      me: "0",
      rules: "0",
      wmetric: "0",
      output: "",
      condition:"",
      warn:"Submit The form to get result",
      shade:"",
      imgurl:"https://thumbs.gfycat.com/GrimyEthicalAsianpiedstarling-max-1mb.gif"
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handless = (event) => {
    this.setState({ ss: event.target.value });
  };

  handledsi = (event) => {
    this.setState({ dsi: event.target.value });
  };

  handletsc = (event) => {
    this.setState({ tsc: event.target.value });
  };

  handlecm = (event) => {
    this.setState({ cm: event.target.value });
  };

  handletforce = (event) => {
    this.setState({ tforce: event.target.value });
  };

  handlect = (event) => {
    this.setState({ ct: event.target.value });
  };

  handleacode = (event) => {
    this.setState({ acode: event.target.value });
  };

  handleme = (event) => {
    this.setState({ me: event.target.value });
  };

  handlerules = (event) => {
    this.setState({ rules: event.target.value });
  };

  handlewmetric = (event) => {
    this.setState({ wmetric: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      this.state.name,
      this.state.email,
      this.state.ss,
      this.state.dsi,
      this.state.tsc,
      this.state.cm,
      this.state.tforce,
      this.state.ct,
      this.state.acode,
      this.state.me,
      this.state.rules,
      this.state.wmetric
    );
    
    alert(`Your Response has been recorded`);

    const res = await axios.post(
      "https://accidentapi.herokuapp.com/predict",
      {
        ss: this.state.ss,
        dsi: this.state.dsi,
        tsc: this.state.tsc,
        cm: this.state.cm,
        tforce: this.state.tforce,
        ct: this.state.ct,
        acode: this.state.acode,
        me: this.state.me,
        rules: this.state.rules,
        wmetric: this.state.wmetric,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(res);
    this.setState({ output: res.data.output });


      this.state.condition=this.state.output;
      if(this.state.condition == 0){
        this.setState({warn:"highly fatal and damaging",shade:"#f32013",imgurl:"https://media2.giphy.com/media/cLqxgg4nke0iu8UpzD/giphy.gif"})
        console.log("highly fatal and damaging")
      }else if (this.state.condition == 2) {
        this.setState({warn:"significant damages and fatalities ",shade:"#ff4000",imgurl:"https://media1.giphy.com/media/B0uJ6d5OXb50k/giphy.gif"})
        console.log("significant damages and fatalities ")
      }else if (this.state.condition == 3) {
        this.setState({warn:"significant damages and serious injuries",shade:"#ffbf00",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SADC_road_sign_W346.gif/1200px-SADC_road_sign_W346.gif"})
        console.log("significant damages and serious injuries")
      }else{
        this.setState({warn:"minor damage and injury",shade:"#00cc00",imgurl:"https://thumbs.gfycat.com/UniqueSizzlingFinwhale-size_restricted.gif"})
        console.log("minor damage and injury")
      }
    

  };

  render() {
 




    return (
      <div>

<div className="container demo">
   <div className="content">
      <div id="large-header" className="large-header">
         <canvas id="demo-canvas"></canvas>
         <h1 className="main-title glow"><span className="thin">Flight Accident</span> Detector</h1>
      </div>
   </div>
</div>


        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Safety Score</label>
            <input
              id="ss"
              type="number"
              placeholder="Enter Safety Score"
              value={this.state.ss}
              onChange={this.handless}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Days Since Inspection</label>
            <input
              name="dsi"
              id="dsi"
              placeholder="Enter Days Since Inspection"
              value={this.state.dsi}
              onChange={this.handledsi}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Total Safety Complaints</label>
            <input
              name="tsc"
              id="tsc"
              placeholder="Enter Total Safety Complaints "
              value={this.state.tsc}
              onChange={this.handletsc}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Control Metric</label>
            <input
              name="cm"
              id="cm"
              placeholder="Enter Control Metric"
              value={this.state.cm}
              onChange={this.handlecm}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Turbulence in G force</label>
            <input
              name="tforce"
              id="tforce"
              placeholder="Enter Turbulence"
              value={this.state.tforce}
              onChange={this.handletforce}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Cabin Temperature</label>
            <input
              name="ct"
              id="ct"
              placeholder="Enter ct"
              value={this.state.ct}
              onChange={this.handlect}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Accident Type Code</label>
            <input
              name="acode"
              id="acode"
              placeholder="Enter Accident Type Code"
              value={this.state.acode}
              onChange={this.handleacode}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Max Elevation</label>
            <input
              name="me"
              id="me"
              placeholder="Enter Max Elevation"
              value={this.state.me}
              onChange={this.handleme}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">number of rules violated</label>
            <input
              name="rules"
              id="rules"
              placeholder="Enter number of rules violate"
              value={this.state.rules}
              onChange={this.handlerules}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">weather metric</label>
            <input
              name="wmetric"
              id="wmetric"
              placeholder="Enter name"
              value={this.state.wmetric}
              onChange={this.handlewmetric}
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            Submit
          </button>
        </form>
        <div>
              <div className="card" style={{background:this.state.shade}}>
        <img className="im" src={this.state.imgurl} alt="Warning Message" height="150px" width="150px"  />
        <div className="containers">
            {/* <h4><b>{this.state.output}</b></h4>  */}
      
           {/* {  console.log(this.state.output+"bejjjfshj")}
           {  console.log(this.state.warn+"nfsdnfjknsdjkfsdjkfhjkshfjkd")} */}
    
          <h2 className="gl" style={{
 fontSize:"40px",
 color:"white",
 textAlign:"center",
 WebkitAnimation:"gl 1s ease-in-out infinite alternate",
 MozAnimation:"gl 1s ease-in-out infinite alternate",
 animation:"glow 1s ease-in-out infinite alternate"
  
}}>{this.state.warn}</h2> 
        </div>
      </div>

    </div>
      
        
     
        
      </div>
    );
  }
}

export default FormComp;
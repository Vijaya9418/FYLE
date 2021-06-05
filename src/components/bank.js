import React, { Component } from 'react'

export default class Bank extends Component {
    state={
        ifsc:'',
        bank_id:'',branch:'',
        address:'',city:'',
        district:'',state:'',bank_name:''
    }
    getbranches=async()=>{
        try{
        var datareceived='';
        const fun=await fetch("http://localhost:8080/api/autocomplete?q="+this.props.match.params.id+"&limit=4&offset=0")
          .then((res)=>res.json())
            .then(function(data){
                datareceived=data;
            })
            .catch(error=>{
            {this.setState({data:'failed'});} 
               }
            );
            datareceived=datareceived[0]
     this.setState({ifsc:datareceived[0],bank_id:datareceived[1],
    branch:datareceived[2],address:datareceived[3]
    ,city:datareceived[4],district:datareceived[5],
    state:datareceived[6],bank_name:datareceived[7]});
     console.log(datareceived)
    }
    catch(e){
        console.log("error"+e)
    }
     }
     componentDidMount(){
         this.getbranches();
     }
    render() {
        var id=this.props.match.params.id;
        return (
            <div>
               <h1>Branch IFSC Code is:{id}</h1> 
               <table class="table text-left p-5 m-5 table-dark table-striped">
               <tr> <td>Bank Name</td><td>{this.state.bank_name}</td></tr>
               <tr> <td>Bank Id</td><td>{this.state.bank_id}</td></tr>
               <tr> <td>Branch</td><td>{this.state.branch}</td></tr>
               <tr> <td>Address</td><td>{this.state.address}</td></tr>
               <tr> <td>City</td><td>{this.state.city}</td></tr>
               <tr> <td>District</td><td>{this.state.district}</td></tr>
               <tr> <td>State</td><td>{this.state.state}</td></tr>
               
               </table>
              
            </div>
        )
    }
}

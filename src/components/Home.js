import React, { Component } from 'react'
import Table from './Table';
import Loading from './nav/Loading'
export default class Home extends Component {

    state={
        data:'',dictionary:'',start:1,limit:100,pageno:1,count:100
    }
    
  //makes table required data dictionary
  makeTable=(data)=>{
     
    // var passage=this.state.data;
   // console.log(data,boxes);
     var dictionary={};
     for(let i in data){
       //  console.log(i,boxes[i],words[i])
         dictionary[data[i][0]]=data[i][2];
     }
     dictionary= Object.entries(dictionary).sort((a,b)=>b[1]-a[1]);
     //console.log(dictionary);
     this.setState({dictionary:dictionary});
 }  
    //function fetching data form external api
     getAll=async(value,k)=>{
        if(k.target!==undefined){
          if(k.target.id==='pagination'){

            console.log("ok"+value+k.target.value)
            value=k.target.value
        
          }  }
      var count=this.state.count;
         if(value==='l100'){this.setState({count:100});count=100}
         else if(value==='l500'){this.setState({count:500});count=500}
         else if(value==='l1000'){this.setState({count:1000});count=1000}
         else if(value==='l1500'){this.setState({count:1500});count=1500}
         
        var pagenoupdated=this.state.pageno;
         if(value===1 || value=== -1){
          pagenoupdated=this.state.pageno+value*this.state.count;
          if(pagenoupdated<1)pagenoupdated=1;
          console.log(pagenoupdated)
          this.setState({pageno:pagenoupdated})}

        var datareceived='';
        const fun=await fetch("https://flye-assignment.herokuapp.com/api/all/all?start="+pagenoupdated+"&limit="+(pagenoupdated+count)+"")
          .then((res)=>res.json())
            .then(function(data){
                datareceived=data;
                //document.getElementById('getdatah').innerHTML=data;
                console.log("All in");
            })
            .catch(error=>{
            {this.setState({data:'failed'});} 
                console.log(error,"Got error");}
            );
    this.setState({data:'done'});

   this.makeTable(datareceived);
}
autocomplete=async(e)=>{
    console.log("ok")
   var datareceived='';
   const fun=await fetch("https://flye-assignment.herokuapp.com/api/branches/autocomplete?q="+e.target.value+"&limit=4&offset=0")
     .then((res)=>res.json())
       .then(function(data){
           datareceived=data;
           //document.getElementById('getdatah').innerHTML=data;
           console.log("All in");
       })
       .catch(error=>{
       {this.setState({data:'failed'});} 
           console.log(error,"Got error");}
       );
this.setState({data:'done'});
this.makeTable(datareceived);
}
getbranches=async(e)=>{
   var datareceived='';
   const fun=await fetch("https://flye-assignment.herokuapp.com/api/autocomplete?q="+e.target.value+"&limit=4&offset=0")
     .then((res)=>res.json())
       .then(function(data){
           datareceived=data;
       })
       .catch(error=>{
       {this.setState({data:'failed'});} 
          }
       );
this.setState({data:'done'});
this.makeTable(datareceived);
}
getdata=(boxes)=>{
    console.log("All ok fine")
    this.setdatatxt(boxes);

}

    componentDidMount(){
        this.getAll(0,100);
    }
    render() {
        return (
            <div>
                <h1 id='getdatah'>Bank Branches</h1>
                <div class="card text-left bg-dark text-white m-5">
                  <div class="card-body row justify-content-around">
                    <div class="form-group col-4">
                      <select onChange={this.getbranches} class="form-control" name="city" id="">
                        <option value="">All</option>
                        <option value='bangalore'>Bangalore</option>
                        <option value='mumbai'>Mumbai</option>
                        <option value='chennai'>Chennai</option>
                        <option value='hyderabad'>Hyderabad</option>
                        <option value='delhi'>Delhi</option>
                      </select>
                    </div>

                        <div class="form-group col-6 row justify-content-center">
                           
                            <input type="text" onChange={this.autocomplete.bind(this)}
                            class="form-control d-inline-block col-8" name="" id="number" aria-describedby="helpId" placeholder="Search"/>
                             <i class="fa fa-search d-inline-block pt-2 col-1" aria-hidden="true"></i>
                        </div>
                  </div>
                  <div class="row justify-content-end">
                  <div class="form-group col-lg-2 col-md-2 col-4">
                      <select onChange={this.getAll.bind(this,this.value)} class="form-control" name="paginatio" id="pagination">
                        <option value="l100">100</option>
                        <option value='l500'>500</option>
                        <option value='l100'>1000</option>
                        <option value='l1500'>1500</option>
                      </select>
                    </div>
                    <div class='col-lg-2 col-md-3 col-4'><nav aria-label="Page navigation">
                      <div class="">
                        <span class="page-item d-inline-block" onClick={this.getAll.bind(this,-1)} >
                          <div class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                          </div>
                        </span>
                        <span class="page-item active d-inline-block"><span class="page-link" href="#">{this.state.pageno}</span></span>
                        <span class="page-item" onClick={this.getAll.bind(this,1)}>
                          <div class="page-link d-inline-block"   aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                          </div>
                        </span>
                      </div>
                    </nav></div>
  
                  </div>
                 
                  <div class='align-self-center'>
                    {this.state.data==='loading....'
                    ?<Loading/>
                    : null}
                  
                  <Table data={this.state.data} dictionary={this.state.dictionary} />
                  </div>
                 </div>
            </div>
        )
    }
}

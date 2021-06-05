import React, { Component } from 'react'
import Table from './Table';
import Loading from './nav/Loading'
export default class Home extends Component {

    state={
        data:'',dictionary:''
    }
    
  //makes table required data dictionary
  makeTable=(data,boxes)=>{
    // var passage=this.state.data;
   // console.log(data,boxes);
     var words=data.split(' ');
     var dictionary={};
     for(let i in boxes){
       //  console.log(i,boxes[i],words[i])
         dictionary[boxes[i]]=words[i];
     }
     dictionary= Object.entries(dictionary).sort((a,b)=>b[1]-a[1]);
     console.log(dictionary);
     this.setState({dictionary:dictionary});
 }

 getnumbers=()=>{
    let numbers=document.getElementById('number').value;
    console.log(numbers);
    if(numbers!=undefined && numbers!="")
    {
        var noerror=true;
        var numbersarr=numbers.split(',');
        var ll=[];
        if(numbersarr.length>5)
        {
            alert("Try to get results of less than 5");
            noerror=false;
            //Else results will be fetched so late and need to make 
            //mulitple api calles one api call will time out.
        }
        for(var i in numbersarr){
            try{
                ll.push(parseInt(numbersarr[i]));
            }
          catch{
              alert('Error in input format!');
              noerror=false;
          }
        }
        if(noerror)
        {
            this.setState({data:'loading....'});
            this.getdata(ll);
           
        }
    }
    else{
        alert("Invalid Input");
    }
        }

    
    //function fetching data form external api
     setdatatxt=async(boxes)=>{
        var datareceived='';
        const fun=await fetch("https://project1812.herokuapp.com/getdata/"+JSON.stringify(boxes))
          .then((res)=>res.text())
            .then(function(data){
                datareceived=data;
                // document.getElementById('getdatah').innerHTML=data;
                console.log(data,"All in");
            })
            .catch(error=>{
            {this.setState({data:'failed'});} 
                console.log(error,"Got error");}
            );
    this.setState({data:'done'});

   this.makeTable(datareceived,boxes);
}
getdata=(boxes)=>{
    console.log("All ok fine")
    this.setdatatxt(boxes);

}

    render() {
        return (
            <div>
                <h1 id='getdatah'>Get Results</h1>
                <div class="card text-left bg-dark text-white m-5">
                  <div class="card-body">
                    <h4 class="card-title">Check your results</h4>

                        <div class="form-group">
                            <label for="">Enter  Roll numbers comma superated</label>
                            <input type="text"
                            class="form-control" name="" id="number" aria-describedby="helpId" placeholder=""/>
                             <hr></hr>
                              <button onClick={this.getnumbers} type="submit" class="btn btn-primary">Submit</button>
                        </div>
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

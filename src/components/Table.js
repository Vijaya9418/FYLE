import React, { Component } from 'react'
import './common.css'
export default class Table extends Component {

    static={
        data:"",
        dictionary:""
    }
    save=(a,b)=>{
        var value=localStorage.getItem('store');
        if(value===null){
            value=""
        }
        if(value.includes(","+a)){
            value=value.replace(","+a,"");
            console.log(value);
            localStorage.setItem('store',value);
            var element=document.getElementById(a);
            element.innerHTML=" <i class='fa fa-star-o'  aria-hidden='true'></i>";
        }
        else{
            if(value===null){value=''}
            value+=","+a;
            localStorage.setItem('store',value);
            console.log(localStorage.getItem('store'));
            console.log(b.target.id);
            var element=document.getElementById(a);
            element.innerHTML=" <i class='fa fa-star'  aria-hidden='true'></i>";
            console.log(b)
        }
      
            }
            open(a,b){
                window.location.assign('/bank/'+a);
            }
    buildtable=(dict)=>{
        var stdata=localStorage.getItem('store');
        if(stdata===null)
        {
            stdata=""
        }
        let count=1;
        var table=document.getElementById('tbody');
        table.innerHTML="";
        for(let i of dict.keys()){
            var column=document.createElement('tr');
            var th1=document.createElement('th');
            th1.className='branch'
            th1.onclick=this.open.bind(this,dict[i][0]);
            th1.innerHTML=dict[i][0];
            var th2=document.createElement('th');
            th2.innerHTML=dict[i][1];
            var th3=document.createElement('th');
            th3.innerHTML=count;
            var th4=document.createElement('th');
           // th4.addEventListener(onclick,this.save)
            th4.onclick=this.save.bind(this,dict[i][0])
            th4.id=dict[i][0];
            if(stdata.includes(dict[i][0])){
                th4.innerHTML="  <i class='fa fa-star'  aria-hidden='true'></i>";
            }
            else{
                th4.innerHTML="  <i class='fa fa-star-o'  aria-hidden='true'></i>";
            }
            column.appendChild(th3)
            column.appendChild(th1);
            column.appendChild(th2);
            column.appendChild(th4);
            count++;
            table.appendChild(column);
        }
        document.getElementById('tableview').setAttribute('class','');
    }
   
    static getDerivedStateFromProps(props, state) {
      
        return {data: props.data,dictionary:props.dictionary} 
      }
    render() {
        if(this.state.dictionary!='')
        this.buildtable(this.state.dictionary);
        return (
            <div>
                   <div class='invisible' id='tableview'>
                  <div id='words' class="container bg-dark p-2 m-5 text-white">
                      <table class="table ">
                          <thead>
                              <tr class='text-white'>
                              <th>S.No</th>
                                  <th>IFSC</th>
                                  <th>Branch Name</th>
                              </tr>
                          </thead>
                          <tbody id='tbody' class='text-white'>
                            
                          </tbody>
                      </table>
                  </div>

                  
                  </div>
            </div>
        )
    }
}

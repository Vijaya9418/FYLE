
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import './common.css';
export default class fav extends Component {
    componentDidMount(){
        this.buildtableF();
    }
    save=(a,b)=>{
        var value=localStorage.getItem('store');
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
    buildtableF=()=>{
        var stdata=localStorage.getItem('store');
        let count=1;
        var table=document.getElementById('tbody');
        table.innerHTML="";
        var dict=localStorage.getItem('store');
        var branches=dict.split(",");
        for(let i of branches){
            if(i=="")continue;
            var column=document.createElement('tr');
            var th1=document.createElement('th');
            th1.innerHTML=i;
            th1.onclick=this.open.bind(this,i);
            th1.className='branch'

            var th3=document.createElement('th');
            th3.innerHTML=count;
            var th4=document.createElement('th');
           // th4.addEventListener(onclick,this.save)
            th4.onclick=this.save.bind(this,i);

            th4.id=i;
            if(stdata.includes(i)){
                th4.innerHTML="  <i class='fa fa-star'  aria-hidden='true'></i>";
            }
            else{
                th4.innerHTML="  <i class='fa fa-star-o'  aria-hidden='true'></i>";
            }
            column.appendChild(th3)
            column.appendChild(th1);
            column.appendChild(th4);
            count++;
            table.appendChild(column);
        }
        document.getElementById('tableview').setAttribute('class','');
    }
    
    
    render() {
      
        return (
            <div class='invisible' id='tableview'>
            <div id='words' class="container bg-dark p-2 m-5 text-white">
                <table class="table ">
                    <thead>
                        <tr class='text-white'>
                        <th>S.No</th>
                            <th>IFSC</th>
                        </tr>
                    </thead>
                    <tbody id='tbody' class='text-white'>
                      
                    </tbody>
                </table>
            </div>
     
            
            </div>
        )
    }
}


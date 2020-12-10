import { UpperCasePipe } from '@angular/common';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component, Renderer2, ElementRef, OnInit, ViewChild, Input, } from '@angular/core';
import { Button } from 'protractor';
import { from } from 'rxjs';
import {ChatboxService} from '../chatbox.service';

interface IPizza {
  PizzaName:string;
  Addons:string;
  size:string;
}

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']

})
export class ChatboxComponent implements OnInit {
  
  @ViewChild('division') div: ElementRef;
  @ViewChild('messagediv') private myScrollContainer: ElementRef;

  
  constructor (private api:ChatboxService,private renderer: Renderer2){ }

  data:any=[];
  choice_of_pizza: Array<string> =[];
  index:number= 0;
  jindex:number=0;
  Emailflag:number=0;
  Mobilenoflag:number=0;
  AddressFlag:number=0;
  orderIdFlag:number=0;
  details: Array<string>=[];
  Pizzalist: { [id: number]: IPizza; }= {};
  list=0;
  userid:number=0;
  orderid:number=0;
  loginyes:number=0;
  loginno:number=0;
  loginflag:number=0;

  ngOnInit(): void {
    this.scrollToBottom(); 
  }
  
  //this function is to display buttons initially
  public ngAfterViewInit():void {
    setTimeout(() => { this.addNewButton('To Order a Pizza',1); },350);
    setTimeout(() => { this.addNewButton('Where is My Order?',2);},450);
    this.scrollToBottom();  
  }

  //text area function if user types any query 
  update(value: string) 
  { 
    if(value.length!=0)   //do not allow the empty response from the user
    {
      this.usertext(value);
      value=value.toLowerCase();

      if(this.loginflag==1)  //if user clicks the button
      {
        if(this.Emailflag==1) //if user is already existing
        {
          if((this.checkIfEmailInString(value)) )
          {
            if(this.loginyes==1)    //search for the user Emailid ,if exists
            {
              this.api.getuserid(value).subscribe(
                data=>{
                  if(data.length!=0)
                  {
                    this.details[this.list]=value;
                    this.list++;
                    setTimeout(() => { this.bottext("Select your pizza category");},300);
                    setTimeout(() => {  this.addNewButton("Veg",3); }, 400);
                    setTimeout(() => {  this.addNewButton("Non Veg",4); }, 500); 
                    this.loginflag=0;
                    this.Emailflag=0;
                  }
                  else
                  {
                    setTimeout(() => {  this.bottext("User account not found, Please Enter Correct Email Id");},600);
                  }
                }
              )
            }

            if(this.loginno==1) //if user doesn't have the account 
            {
              this.api.getuserid(value).subscribe(
                data=>{
                  if(data.length==0)
                  {
                    this.details[this.list]=value;
                    this.list++;
                    setTimeout(() => { this.bottext("Enter Your 10 Digit Mobile Number");},500);
                    this.Emailflag=0;
                    this.Mobilenoflag=1;
                  }
                  else
                  {
                    setTimeout(() => {  this.bottext("User Account Already Exists,Try With Other Email-ID");},500);
                  }
                }
              )
            }
          }
          else
          {
            setTimeout(() => { this.bottext("Enter The Valid Email Id");},500);
          }
        }
        
        if(this.AddressFlag==1)//Entering the address 
        {
          this.details[this.list]=value;
          this.list++;
          this.AddressFlag=0;
          this.loginflag=0;
          this.createuser();

          setTimeout(() => { this.bottext("Please select the category...");},300);
          setTimeout(() => {  this.addNewButton("Veg",3); }, 400);
          setTimeout(() => {  this.addNewButton("Non Veg",4); }, 500); 
          this.scrollToBottom();
        }

        if(this.Mobilenoflag==1) //user entering the mobile number
        {
          if(Number(value))
          {
              if((this.checkifMobileInString(value)) && (value.length==10))//checks if user enters the valid number
              {
                this.details[this.list]=value;
                this.list++;
                setTimeout(() => {this.bottext("Enter your deliver address");},300);
                this.AddressFlag=1;
                this.Mobilenoflag=0;
              }
              else
              {
                setTimeout(() => { this.bottext("Enter a valid 10 digit mobile number");},400);
              }
          }
          else
          {
            setTimeout(() => { this.bottext("Enter a valid mobile number");},500);
          }
        }
      }
      else if(this.orderIdFlag==1) //tracking order-ID
      {
        if(Number(value))
        {
          let orderid=Number(value);
          let pizzaname='';
          //getting pizza_name using orderid
          this.api.getpizzaorder(orderid).subscribe(   
            data1=>{
              if(data1!=0)
              {
                for(let i in data1)
                {
                  pizzaname=pizzaname+"<br>"+data1[i].pizza_name;
                }
              
                setTimeout(() => {this.bottext("Your Recent Order is <b>"+pizzaname+"</b><br>");},600);
              }
             else
             {
              setTimeout(() =>{this.bottext("Order-ID Not Exist.Enter The Correct Order-Id");},650);
             }
            }
          )
          //fetching order status
          this.api.trackorderbyorderID(orderid).subscribe(
            data=>{
              let ETA;
              let order_status;
              ETA=data[0].ETA;
              order_status=data[0].order_status;
              setTimeout(() => { this.bottext("The <b>"+order_status+"</b>, Your ordered Pizza Will Arrive in <b>"+ETA+"</b>");},700);
              this.orderIdFlag=0;
            }
          )
        }
        else
        {
          setTimeout(() => { this.bottext("Enter The Correct Format");},600);
        }
        
      }
      else
      {
        setTimeout(() => {  this.replymsg(value); }, 400);
        
      }
      this.scrollToBottom(); 
    }
    else
    {
      this.bottext("Please Select The Choices or Type In Chatbox...");
    }
  }

    //bot reply for user query
  replymsg(value: string)
  {
    this.api.getdetails(value).subscribe(
      data=>{
        if(data.length!=0)
        {
          setTimeout(() => {  this.bottext(data[0].answer); }, 500);
        }
        else
        {
          setTimeout(() => {this.bottext('Sorry I do not understand!!!<br>May i help you in some other way');},300);
          this.ngAfterViewInit();
        }
      }
    )
    // Dialog API
    // this.api.dialogreply(value).subscribe(
    //   data=>{
    //     console.log(data);
    //     data=data.toString();
    //     // if()
    //     // {
    //       this.bottext(data.toString()); 
    //     // }
    //     // else
    //     // {
    //     //   setTimeout(() => {this.bottext('Sorry I do not understand!!!<br>May i help you in some other way');},300);
    //     //   this.ngAfterViewInit();
    //     // }
    //   }
    // )
    this.scrollToBottom(); 
  }

  // To create user account
  createuser()
  {
    this.api.insertuser(this.details[0],this.details[2],this.details[1]).subscribe(
      data=>{
       
      }
    )
  }

  //store user order
  storeuserorder()
  {
    let userid=0;
    let orderid=0;
    this.api.getuserid(this.details[0]).subscribe(
    dat=>{
      userid=dat[0].userId;
      this.api.getorderid(userid).subscribe(
        data=>{
              this.api.trackorderbyuserID(userid).subscribe( //fetching orderid using userid
            data1=>{
              let orderindex;
              for(let i in data1)
              {
                orderindex=i;
              }
              orderid=data1[orderindex].order_ID;
              setTimeout(() => { this.bottext("Your order Id is: <b>"+orderid+"</b><br> Please Use The ID To Track Your Order.");},80);
              for(let i=0;i<this.jindex;i++)
              {
                this.api.insertpizza(orderid,this.Pizzalist[i].PizzaName,this.Pizzalist[i].Addons,this.Pizzalist[i].size).subscribe(
                  data2=>{    //inserting the pizza order
                  }
                )
              }
            }
          )
        }
      )    
    }
    )
  }

  //track order button
  trackorder()  
  {
    setTimeout(() => {this.usertext('Where is my order?');},500);
    setTimeout(() => {this.bottext("Kindly provide your Order-ID");},700);
    this.orderIdFlag=1;
    this.scrollToBottom(); 
  }

  //create html element for user
  usertext(value: string) 
  { 
    const div1: HTMLParagraphElement = this.renderer.createElement("div");
    div1.setAttribute("class", "container darker");
    this.renderer.appendChild(this.div.nativeElement, div1)
    const Img: HTMLParagraphElement = this.renderer.createElement("img");
    Img.setAttribute("src","/assets/userimage.jpg")
    Img.setAttribute("style","width:12%")
    this.renderer.appendChild(div1, Img)
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = value
    this.renderer.appendChild(div1, p)
    this.scrollToBottom(); 
  }

  //create html element for bot
  bottext(value: string) 
  { 
    const div1: HTMLParagraphElement = this.renderer.createElement("div");
    div1.setAttribute("class", "container");
    this.renderer.appendChild(this.div.nativeElement, div1)
    const Img: HTMLParagraphElement = this.renderer.createElement("img");
    Img.setAttribute("src","/assets/botimage1.png");
    Img.setAttribute("style","width:11%");
    Img.setAttribute("class","right");
    this.renderer.appendChild(div1, Img);
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML=value
    this.renderer.appendChild(div1, p);
    this.scrollToBottom(); 
  }
  
  //ordering pizza button
  orderpizza()
  {
    setTimeout(() => {this.usertext("To order a pizza");},300);
    setTimeout(() => { this.addNewButton("Existing user",11); },500);
    setTimeout(() => { this.addNewButton("New User",12); },550);
    this.loginflag=1;
    this.scrollToBottom(); 
  }

  //user already exists
  login_yes()
  {
    setTimeout(() => {this.usertext("Existing user");},400);
    setTimeout(() => {this.bottext("Enter your Email id");},500);
    this.loginyes=1;
    this.Emailflag=1;
  }

  //if user not exist
  login_no()
  {
    setTimeout(() => {this.usertext("New User");},400);
    setTimeout(() => {this.bottext("Enter your Email id");},500);
    this.loginno=1;
    this.Emailflag=1;
  }

  //when user clicks veg category
  veg()
  {
    this.api.getdetails('veg').subscribe(
      data=>{
        this.usertext('Veg');
        setTimeout(() => {this.bottext('We have some list of Veg pizzas');},500);
        for(let i=0;i<data.length;i++)
        {
          setTimeout(() => {this.addNewButton(data[i].answer,5);},600);
        }
      }
    )
    this.scrollToBottom(); 
  }

  //when user clicks non-veg category
  nonveg()
  {
    this.api.getdetails('non-veg').subscribe(
      data=>{
        setTimeout(() => { this.usertext('non-veg');},400);
        setTimeout(() => {this.bottext('We have some list of Non-Veg pizzas');},600);
        for(let i=0;i<data.length;i++)
        {
          setTimeout(() => {this.addNewButton(data[i].answer,5);},700);
          
        }      
      }
    )
    this.scrollToBottom(); 
  }

  //ad-ons function
  Order(value: string)
  {
    this.choice_of_pizza[this.index]=value;
    this.index=this.index+1;
    setTimeout(() => {this.usertext(value);},300);
    setTimeout(() => {this.bottext('Would you like to add Ad-Ons?');},400);
    this.api.getdetails('ad-ons').subscribe(
      data=>{
        for(let i=0;i<data.length;i++)
        {
          setTimeout(() => {this.addNewButton(data[i].answer,6);},500);
        }
      }
    )
    this.scrollToBottom(); 
  }

  //choose size of pizza
  addons(value: string)
  {
    this.choice_of_pizza[this.index]=value;
    this.index=this.index+1;
    setTimeout(() => {this.usertext(value);},300);
    setTimeout(() => { this.bottext('Choose size of your pizza?');},400);
    setTimeout(() => { this.addNewButton("Regular",7);},450);
    setTimeout(() => { this.addNewButton("Medium",7);},500);
    setTimeout(() => { this.addNewButton("Large",7);},550);
    this.scrollToBottom(); 
  }

  //another pizza order
  pizza_size(value:string)
  {
    this.choice_of_pizza[this.index]=value;
    this.index=this.index+1;
    setTimeout(() => {this.usertext(value);},300);
    setTimeout(() => { this.bottext("Do you wish to order another pizza?");},400);
    setTimeout(() => {this.addNewButton("Yes",8);},450);
    setTimeout(() => {this.addNewButton("No",9);},500);
    this.scrollToBottom(); 

  }

  //when user clicks No
  order_confirm(value:string)
  {
    setTimeout(() => {this.usertext(value);},350);
    setTimeout(() => {this.addNewButton("Veg",3);},400);
    setTimeout(() => {this.addNewButton("Non Veg",4);},450);
    this.Pizzalist[this.jindex] = { PizzaName: this.choice_of_pizza[0], Addons: this.choice_of_pizza[1], size:this.choice_of_pizza[2]};
    this.jindex=this.jindex+1;
    this.index=0;
    this.scrollToBottom(); 
  }

  //when using ordering one more pizza
  order_notconfirm(value:string)
  {
    setTimeout(() => {this.usertext(value);},100);
    this.Pizzalist[this.jindex] = { PizzaName: this.choice_of_pizza[0], Addons: this.choice_of_pizza[1], size:this.choice_of_pizza[2]};
    this.jindex=this.jindex+1;
    this.index=0;
    let orderfinal:string='';
    for(let i=0;i<this.jindex;i++)
    {
      orderfinal = orderfinal+ "<br><b> "+this.Pizzalist[i].PizzaName+"</b>  of size <b>"+this.Pizzalist[i].size+"</b>  along with Ad-ons <b>"+this.Pizzalist[i].Addons+"</b> <br>";
    }

    this.storeuserorder(); 
    setTimeout(() => { this.bottext("Your final order is "+orderfinal);},950);
    setTimeout(() => {this.bottext("Thank You for ordering in Pizza House")},1100);
    setTimeout(() => { this.addNewButton('To order a pizza',1); },1400);
    setTimeout(() => { this.addNewButton('Where is my order?',2);},1500);
    this.scrollToBottom(); 
  }

  //html create element for button tag
  addNewButton(value: string, flag: number)
  {
    const button: HTMLParagraphElement = this.renderer.createElement('button');
    button.setAttribute("class", "button");
    const spantag: HTMLParagraphElement = this.renderer.createElement('span')

    if(flag==1)  //Each button function has a flag variable
    {
      this.renderer.listen(button, 'click', () => this.orderpizza());
    }
    if(flag==2)
    {
      this.renderer.listen(button, 'click', () => this.trackorder());
    }
    if(flag==3)
    {
      this.renderer.listen(button, 'click', () => this.veg());
    }
    if(flag==4)
    {
      this.renderer.listen(button, 'click', () => this.nonveg());
    }
    if(flag==5)
    {
      this.renderer.listen(button, 'click', () => this.Order(value));
    }
    if(flag==6)
    {
      this.renderer.listen(button, 'click', () => this.addons(value));
    }
    if(flag==7)
    {
      this.renderer.listen(button, 'click', () => this.pizza_size(value));
    }
    if(flag==8)
    {
      this.renderer.listen(button, 'click', () => this.order_confirm(value));
    }
    if(flag==9)
    {
      this.renderer.listen(button, 'click', () => this.order_notconfirm(value));
    }
    if(flag==10)
    {
      this.renderer.listen(button, 'click', () => this.storeuserorder());
    }
    if(flag==11)
    {
      this.renderer.listen(button, 'click', () => this.login_yes());
    }
    if(flag==12)
    {
      this.renderer.listen(button, 'click', () => this.login_no());
    }
    spantag.innerHTML=value;
    this.renderer.appendChild(button, spantag);
    this.renderer.appendChild(this.div.nativeElement, button); 
    this.scrollToBottom();
  }

  //scroll chatbox to bottom
  scrollToBottom(): void 
  {
    try 
    {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } 
    catch(err) { }                 
  }

  //check email format
  checkIfEmailInString(text) 
  { 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
  }

  //check mobile format
  checkifMobileInString(text) 
  { 
    var re = /[0-9\+\-\ ]/;
    return re.test(text);
  }
}


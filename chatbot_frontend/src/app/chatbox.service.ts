import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


 @Injectable({
  providedIn: 'root'
})
export class ChatboxService {
  private host='18.216.200.254';
  private detailurl='http://'+this.host+':3000/event';
  private inserturl='http://'+this.host+':3000/userdetails';
  private useridurl='http://'+this.host+':3000/getbyemailid';
  private trackorderurl='http://'+this.host+':3000/trackorder';
  private trackorderbyidurl='http://'+this.host+':3000/trackorderbyid';
  private insertpizzaurl='http://'+this.host+':3000/insertpizzaorder';
  private getpizzaorderurl='http://'+this.host+':3000/getpizzaorder';
  private trackbyorderid='http://'+this.host+':3000/trackorderbyorderid';
  private dialogflowurl='http://'+this.host+':3000/getmessage';
  constructor(private http:HttpClient) { }

  // Function to select bot answer for user query
  getdetails(question:string):Observable<any>
  {
    return this.http.get(`${this.detailurl}/${question}`);
  }

  //insert user details
  insertuser(emailid:string,address:string,mobileno:string):Observable<any>
  {
    return this.http.get(`${this.inserturl}/${emailid}/${address}/${mobileno}`);
  }
  
  //select userdetails by id
  getuserid(emailId:string):Observable<any>
  {
    return this.http.get(`${this.useridurl}/${emailId}`);
  }

  //select pizza order by order id
  getpizzaorder(orderID:number)
  {
    return this.http.get(`${this.getpizzaorderurl}/${orderID}`);
  }
  
  //insert pizza status
  getorderid(userId:number)
  {
      return this.http.get(`${this.trackorderurl}/${userId}`);
  }

  //insert pizza order
  insertpizza(orderID:number,pizza_name:string,ad_ons:string,size:string)
  {
    return this.http.get(`${this.insertpizzaurl}/${orderID}/${pizza_name}/${ad_ons}/${size}`);
  }

  //get orderID by userid
  trackorderbyuserID(userid:number)
  {
    return this.http.get(`${this.trackorderbyidurl}/${userid}`);
  }

  //track pizza order using orderid
  trackorderbyorderID(orderID:number)
  {
    return this.http.get(`${this.trackbyorderid}/${orderID}`);
  }

  //dialogflow reply for user query
  dialogreply(usertext:string)
  {
    return this.http.get(`${this.dialogflowurl}/${usertext}`);
  }
}

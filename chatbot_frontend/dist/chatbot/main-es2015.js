(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ayrus/Desktop/chatbot/chatbot_angular/chatbot_finalproject/chatbot_frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "M8Ov":
/*!************************************!*\
  !*** ./src/app/chatbox.service.ts ***!
  \************************************/
/*! exports provided: ChatboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxService", function() { return ChatboxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ChatboxService {
    constructor(http) {
        this.http = http;
        this.host = '18.216.200.254';
        this.detailurl = 'http://' + this.host + ':3000/event';
        this.inserturl = 'http://' + this.host + ':3000/userdetails';
        this.useridurl = 'http://' + this.host + ':3000/getbyemailid';
        this.trackorderurl = 'http://' + this.host + ':3000/trackorder';
        this.trackorderbyidurl = 'http://' + this.host + ':3000/trackorderbyid';
        this.insertpizzaurl = 'http://' + this.host + ':3000/insertpizzaorder';
        this.getpizzaorderurl = 'http://' + this.host + ':3000/getpizzaorder';
        this.trackbyorderid = 'http://' + this.host + ':3000/trackorderbyorderid';
        this.dialogflowurl = 'http://' + this.host + ':3000/getmessage';
    }
    // Function to select bot answer for user query
    getdetails(question) {
        return this.http.get(`${this.detailurl}/${question}`);
    }
    //insert user details
    insertuser(emailid, address, mobileno) {
        return this.http.get(`${this.inserturl}/${emailid}/${address}/${mobileno}`);
    }
    //select userdetails by id
    getuserid(emailId) {
        return this.http.get(`${this.useridurl}/${emailId}`);
    }
    //select pizza order by order id
    getpizzaorder(orderID) {
        return this.http.get(`${this.getpizzaorderurl}/${orderID}`);
    }
    //insert pizza status
    getorderid(userId) {
        return this.http.get(`${this.trackorderurl}/${userId}`);
    }
    //insert pizza order
    insertpizza(orderID, pizza_name, ad_ons, size) {
        return this.http.get(`${this.insertpizzaurl}/${orderID}/${pizza_name}/${ad_ons}/${size}`);
    }
    //get orderID by userid
    trackorderbyuserID(userid) {
        return this.http.get(`${this.trackorderbyidurl}/${userid}`);
    }
    //track pizza order using orderid
    trackorderbyorderID(orderID) {
        return this.http.get(`${this.trackbyorderid}/${orderID}`);
    }
    //dialogflow reply for user query
    dialogreply(usertext) {
        return this.http.get(`${this.dialogflowurl}/${usertext}`);
    }
}
ChatboxService.ɵfac = function ChatboxService_Factory(t) { return new (t || ChatboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatboxService, factory: ChatboxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatboxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "P4GD":
/*!**********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.ts ***!
  \**********************************************/
/*! exports provided: ChatboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function() { return ChatboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chatbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chatbox.service */ "M8Ov");



const _c0 = ["division"];
const _c1 = ["messagediv"];
class ChatboxComponent {
    constructor(api, renderer) {
        this.api = api;
        this.renderer = renderer;
        this.data = [];
        this.choice_of_pizza = [];
        this.index = 0;
        this.jindex = 0;
        this.Emailflag = 0;
        this.Mobilenoflag = 0;
        this.AddressFlag = 0;
        this.orderIdFlag = 0;
        this.details = [];
        this.Pizzalist = {};
        this.list = 0;
        this.userid = 0;
        this.orderid = 0;
        this.loginyes = 0;
        this.loginno = 0;
        this.loginflag = 0;
    }
    ngOnInit() {
        this.scrollToBottom();
    }
    //this function is to display buttons initially
    ngAfterViewInit() {
        setTimeout(() => { this.addNewButton('To Order a Pizza', 1); }, 350);
        setTimeout(() => { this.addNewButton('Where is My Order?', 2); }, 450);
        this.scrollToBottom();
    }
    //text area function if user types any query 
    update(value) {
        if (value.length != 0) //do not allow the empty response from the user
         {
            this.usertext(value);
            value = value.toLowerCase();
            if (this.loginflag == 1) //if user clicks the button
             {
                if (this.Emailflag == 1) //if user is already existing
                 {
                    if ((this.checkIfEmailInString(value))) {
                        if (this.loginyes == 1) //search for the user Emailid ,if exists
                         {
                            this.api.getuserid(value).subscribe(data => {
                                if (data.length != 0) {
                                    this.details[this.list] = value;
                                    this.list++;
                                    setTimeout(() => { this.bottext("Select your pizza category"); }, 300);
                                    setTimeout(() => { this.addNewButton("Veg", 3); }, 400);
                                    setTimeout(() => { this.addNewButton("Non Veg", 4); }, 500);
                                    this.loginflag = 0;
                                    this.Emailflag = 0;
                                }
                                else {
                                    setTimeout(() => { this.bottext("User account not found, Please Enter Correct Email Id"); }, 600);
                                }
                            });
                        }
                        if (this.loginno == 1) //if user doesn't have the account 
                         {
                            this.api.getuserid(value).subscribe(data => {
                                if (data.length == 0) {
                                    this.details[this.list] = value;
                                    this.list++;
                                    setTimeout(() => { this.bottext("Enter Your 10 Digit Mobile Number"); }, 500);
                                    this.Emailflag = 0;
                                    this.Mobilenoflag = 1;
                                }
                                else {
                                    setTimeout(() => { this.bottext("User Account Already Exists,Try With Other Email-ID"); }, 500);
                                }
                            });
                        }
                    }
                    else {
                        setTimeout(() => { this.bottext("Enter The Valid Email Id"); }, 500);
                    }
                }
                if (this.AddressFlag == 1) //Entering the address 
                 {
                    this.details[this.list] = value;
                    this.list++;
                    this.AddressFlag = 0;
                    this.loginflag = 0;
                    this.createuser();
                    setTimeout(() => { this.bottext("Please select the category..."); }, 300);
                    setTimeout(() => { this.addNewButton("Veg", 3); }, 400);
                    setTimeout(() => { this.addNewButton("Non Veg", 4); }, 500);
                    this.scrollToBottom();
                }
                if (this.Mobilenoflag == 1) //user entering the mobile number
                 {
                    if (Number(value)) {
                        if ((this.checkifMobileInString(value)) && (value.length == 10)) //checks if user enters the valid number
                         {
                            this.details[this.list] = value;
                            this.list++;
                            setTimeout(() => { this.bottext("Enter your deliver address"); }, 300);
                            this.AddressFlag = 1;
                            this.Mobilenoflag = 0;
                        }
                        else {
                            setTimeout(() => { this.bottext("Enter a valid 10 digit mobile number"); }, 400);
                        }
                    }
                    else {
                        setTimeout(() => { this.bottext("Enter a valid mobile number"); }, 500);
                    }
                }
            }
            else if (this.orderIdFlag == 1) //tracking order-ID
             {
                if (Number(value)) {
                    let orderid = Number(value);
                    let pizzaname = '';
                    //getting pizza_name using orderid
                    this.api.getpizzaorder(orderid).subscribe(data1 => {
                        if (data1 != 0) {
                            for (let i in data1) {
                                pizzaname = pizzaname + "<br>" + data1[i].pizza_name;
                            }
                            setTimeout(() => { this.bottext("Your Recent Order is <b>" + pizzaname + "</b><br>"); }, 600);
                        }
                        else {
                            setTimeout(() => { this.bottext("Order-ID Not Exist.Enter The Correct Order-Id"); }, 650);
                        }
                    });
                    //fetching order status
                    this.api.trackorderbyorderID(orderid).subscribe(data => {
                        let ETA;
                        let order_status;
                        ETA = data[0].ETA;
                        order_status = data[0].order_status;
                        setTimeout(() => { this.bottext("The <b>" + order_status + "</b>, Your ordered Pizza Will Arrive in <b>" + ETA + "</b>"); }, 700);
                        this.orderIdFlag = 0;
                    });
                }
                else {
                    setTimeout(() => { this.bottext("Enter The Correct Format"); }, 600);
                }
            }
            else {
                setTimeout(() => { this.replymsg(value); }, 400);
            }
            this.scrollToBottom();
        }
        else {
            this.bottext("Please Select The Choices or Type In Chatbox...");
        }
    }
    //bot reply for user query
    replymsg(value) {
        this.api.getdetails(value).subscribe(data => {
            if (data.length != 0) {
                setTimeout(() => { this.bottext(data[0].answer); }, 500);
            }
            else {
                setTimeout(() => { this.bottext('Sorry I do not understand!!!<br>May i help you in some other way'); }, 300);
                this.ngAfterViewInit();
            }
        });
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
    createuser() {
        this.api.insertuser(this.details[0], this.details[2], this.details[1]).subscribe(data => {
        });
    }
    //store user order
    storeuserorder() {
        let userid = 0;
        let orderid = 0;
        this.api.getuserid(this.details[0]).subscribe(dat => {
            userid = dat[0].userId;
            this.api.getorderid(userid).subscribe(data => {
                this.api.trackorderbyuserID(userid).subscribe(//fetching orderid using userid
                //fetching orderid using userid
                data1 => {
                    let orderindex;
                    for (let i in data1) {
                        orderindex = i;
                    }
                    orderid = data1[orderindex].order_ID;
                    setTimeout(() => { this.bottext("Your order Id is: <b>" + orderid + "</b><br> Please Use The ID To Track Your Order."); }, 80);
                    for (let i = 0; i < this.jindex; i++) {
                        this.api.insertpizza(orderid, this.Pizzalist[i].PizzaName, this.Pizzalist[i].Addons, this.Pizzalist[i].size).subscribe(data2 => {
                        });
                    }
                });
            });
        });
    }
    //track order button
    trackorder() {
        setTimeout(() => { this.usertext('Where is my order?'); }, 500);
        setTimeout(() => { this.bottext("Kindly provide your Order-ID"); }, 700);
        this.orderIdFlag = 1;
        this.scrollToBottom();
    }
    //create html element for user
    usertext(value) {
        const div1 = this.renderer.createElement("div");
        div1.setAttribute("class", "container darker");
        this.renderer.appendChild(this.div.nativeElement, div1);
        const Img = this.renderer.createElement("img");
        Img.setAttribute("src", "/assets/userimage.jpg");
        Img.setAttribute("style", "width:12%");
        this.renderer.appendChild(div1, Img);
        const p = this.renderer.createElement('p');
        p.innerHTML = value;
        this.renderer.appendChild(div1, p);
        this.scrollToBottom();
    }
    //create html element for bot
    bottext(value) {
        const div1 = this.renderer.createElement("div");
        div1.setAttribute("class", "container");
        this.renderer.appendChild(this.div.nativeElement, div1);
        const Img = this.renderer.createElement("img");
        Img.setAttribute("src", "/assets/botimage1.png");
        Img.setAttribute("style", "width:11%");
        Img.setAttribute("class", "right");
        this.renderer.appendChild(div1, Img);
        const p = this.renderer.createElement('p');
        p.innerHTML = value;
        this.renderer.appendChild(div1, p);
        this.scrollToBottom();
    }
    //ordering pizza button
    orderpizza() {
        setTimeout(() => { this.usertext("To order a pizza"); }, 300);
        setTimeout(() => { this.addNewButton("Existing user", 11); }, 500);
        setTimeout(() => { this.addNewButton("New User", 12); }, 550);
        this.loginflag = 1;
        this.scrollToBottom();
    }
    //user already exists
    login_yes() {
        setTimeout(() => { this.usertext("Existing user"); }, 400);
        setTimeout(() => { this.bottext("Enter your Email id"); }, 500);
        this.loginyes = 1;
        this.Emailflag = 1;
    }
    //if user not exist
    login_no() {
        setTimeout(() => { this.usertext("New User"); }, 400);
        setTimeout(() => { this.bottext("Enter your Email id"); }, 500);
        this.loginno = 1;
        this.Emailflag = 1;
    }
    //when user clicks veg category
    veg() {
        this.api.getdetails('veg').subscribe(data => {
            this.usertext('Veg');
            setTimeout(() => { this.bottext('We have some list of Veg pizzas'); }, 500);
            for (let i = 0; i < data.length; i++) {
                setTimeout(() => { this.addNewButton(data[i].answer, 5); }, 600);
            }
        });
        this.scrollToBottom();
    }
    //when user clicks non-veg category
    nonveg() {
        this.api.getdetails('non-veg').subscribe(data => {
            setTimeout(() => { this.usertext('non-veg'); }, 400);
            setTimeout(() => { this.bottext('We have some list of Non-Veg pizzas'); }, 600);
            for (let i = 0; i < data.length; i++) {
                setTimeout(() => { this.addNewButton(data[i].answer, 5); }, 700);
            }
        });
        this.scrollToBottom();
    }
    //ad-ons function
    Order(value) {
        this.choice_of_pizza[this.index] = value;
        this.index = this.index + 1;
        setTimeout(() => { this.usertext(value); }, 300);
        setTimeout(() => { this.bottext('Would you like to add Ad-Ons?'); }, 400);
        this.api.getdetails('ad-ons').subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                setTimeout(() => { this.addNewButton(data[i].answer, 6); }, 500);
            }
        });
        this.scrollToBottom();
    }
    //choose size of pizza
    addons(value) {
        this.choice_of_pizza[this.index] = value;
        this.index = this.index + 1;
        setTimeout(() => { this.usertext(value); }, 300);
        setTimeout(() => { this.bottext('Choose size of your pizza?'); }, 400);
        setTimeout(() => { this.addNewButton("Regular", 7); }, 450);
        setTimeout(() => { this.addNewButton("Medium", 7); }, 500);
        setTimeout(() => { this.addNewButton("Large", 7); }, 550);
        this.scrollToBottom();
    }
    //another pizza order
    pizza_size(value) {
        this.choice_of_pizza[this.index] = value;
        this.index = this.index + 1;
        setTimeout(() => { this.usertext(value); }, 300);
        setTimeout(() => { this.bottext("Do you wish to order another pizza?"); }, 400);
        setTimeout(() => { this.addNewButton("Yes", 8); }, 450);
        setTimeout(() => { this.addNewButton("No", 9); }, 500);
        this.scrollToBottom();
    }
    //when user clicks No
    order_confirm(value) {
        setTimeout(() => { this.usertext(value); }, 350);
        setTimeout(() => { this.addNewButton("Veg", 3); }, 400);
        setTimeout(() => { this.addNewButton("Non Veg", 4); }, 450);
        this.Pizzalist[this.jindex] = { PizzaName: this.choice_of_pizza[0], Addons: this.choice_of_pizza[1], size: this.choice_of_pizza[2] };
        this.jindex = this.jindex + 1;
        this.index = 0;
        this.scrollToBottom();
    }
    //when using ordering one more pizza
    order_notconfirm(value) {
        setTimeout(() => { this.usertext(value); }, 100);
        this.Pizzalist[this.jindex] = { PizzaName: this.choice_of_pizza[0], Addons: this.choice_of_pizza[1], size: this.choice_of_pizza[2] };
        this.jindex = this.jindex + 1;
        this.index = 0;
        let orderfinal = '';
        for (let i = 0; i < this.jindex; i++) {
            orderfinal = orderfinal + "<br><b> " + this.Pizzalist[i].PizzaName + "</b>  of size <b>" + this.Pizzalist[i].size + "</b>  along with Ad-ons <b>" + this.Pizzalist[i].Addons + "</b> <br>";
        }
        this.storeuserorder();
        setTimeout(() => { this.bottext("Your final order is " + orderfinal); }, 950);
        setTimeout(() => { this.bottext("Thank You for ordering in Pizza House"); }, 1100);
        setTimeout(() => { this.addNewButton('To order a pizza', 1); }, 1400);
        setTimeout(() => { this.addNewButton('Where is my order?', 2); }, 1500);
        this.scrollToBottom();
    }
    //html create element for button tag
    addNewButton(value, flag) {
        const button = this.renderer.createElement('button');
        button.setAttribute("class", "button");
        const spantag = this.renderer.createElement('span');
        if (flag == 1) //Each button function has a flag variable
         {
            this.renderer.listen(button, 'click', () => this.orderpizza());
        }
        if (flag == 2) {
            this.renderer.listen(button, 'click', () => this.trackorder());
        }
        if (flag == 3) {
            this.renderer.listen(button, 'click', () => this.veg());
        }
        if (flag == 4) {
            this.renderer.listen(button, 'click', () => this.nonveg());
        }
        if (flag == 5) {
            this.renderer.listen(button, 'click', () => this.Order(value));
        }
        if (flag == 6) {
            this.renderer.listen(button, 'click', () => this.addons(value));
        }
        if (flag == 7) {
            this.renderer.listen(button, 'click', () => this.pizza_size(value));
        }
        if (flag == 8) {
            this.renderer.listen(button, 'click', () => this.order_confirm(value));
        }
        if (flag == 9) {
            this.renderer.listen(button, 'click', () => this.order_notconfirm(value));
        }
        if (flag == 10) {
            this.renderer.listen(button, 'click', () => this.storeuserorder());
        }
        if (flag == 11) {
            this.renderer.listen(button, 'click', () => this.login_yes());
        }
        if (flag == 12) {
            this.renderer.listen(button, 'click', () => this.login_no());
        }
        spantag.innerHTML = value;
        this.renderer.appendChild(button, spantag);
        this.renderer.appendChild(this.div.nativeElement, button);
        this.scrollToBottom();
    }
    //scroll chatbox to bottom
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    //check email format
    checkIfEmailInString(text) {
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return re.test(text);
    }
    //check mobile format
    checkifMobileInString(text) {
        var re = /[0-9\+\-\ ]/;
        return re.test(text);
    }
}
ChatboxComponent.ɵfac = function ChatboxComponent_Factory(t) { return new (t || ChatboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chatbox_service__WEBPACK_IMPORTED_MODULE_1__["ChatboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ChatboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatboxComponent, selectors: [["app-chatbox"]], viewQuery: function ChatboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.div = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 14, vars: 0, consts: [[1, "menubar"], [1, "image"], ["src", "/assets/botimage.png", "width", "70"], [1, "box1"], ["messagediv", ""], ["id", "msgboxsection", 1, "inbox"], ["division", ""], ["id", "container", 1, "container"], ["src", "/assets/botimage1.png", "alt", "chat", 2, "width", "12%"], ["id", "msginput", "type", "text", "autocomplete", "off", "placeholder", "Type your message.....", 1, "form-control", 3, "keyup.enter"], ["box", ""]], template: function ChatboxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcome To Pizza House... How May I Help You?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatboxComponent_Template_input_keyup_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.update(_r2.value); })("keyup.enter", function ChatboxComponent_Template_input_keyup_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r2.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\n  font-family: fantasy;\n  font-size:17px;\n}\n.menubar[_ngcontent-%COMP%]\n{    \n    margin-top: -10%;\n    margin-left: 86%;\n }\n.box1[_ngcontent-%COMP%]\n{\n    overflow: auto;\n    width:23%;\n    height: 600px;\n    background-color: rgba(253, 249, 249, 0.5);\n    border-radius: 20px;\n    margin-left: 76%;\n    \n}\n.button[_ngcontent-%COMP%] {\n  border-color: rgb(29, 77, 219);\n  color: rgb(29, 77, 219);\n  text-align: center;\n  font-size: 16px;\n  padding: 10px;\n  width: 200px;\n  border-radius: 20px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n  margin-left: 12%;\n  outline: none;\n}\n.button[_ngcontent-%COMP%]:hover\n{\n  background-color: rgba(224, 202, 202, 0.541);\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  transition: 0.5s;\n}\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 6;\n  right: 0;\n}\n.container[_ngcontent-%COMP%] {\n    border: 1px solid rgb(163, 157, 157);\n    background-color: #f1f1f1;\n    border-radius: 25px;\n    padding: 12px;\n    margin:2%;\n    max-width: 65%;\n  }\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 12px;\n    border-radius: 60%;\n    margin-top: -4px;\n\n  }\np[_ngcontent-%COMP%]{\n  margin: 1%;\n  }\n.darker[_ngcontent-%COMP%]\n{\n    border: 1px solid rgb(163, 157, 157);\n    background-color: rgb(179, 191, 219);\n    margin-left: auto;\n    \n  }\n#msginput[_ngcontent-%COMP%]\n{\n    padding: 10px;\n}\nh2[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.msg[_ngcontent-%COMP%]\n{\n    border-radius: 30px;\n    padding: 12px;\n}\n.inbox[_ngcontent-%COMP%]\n{\n    margin: 2%;\n\n}\n.input-group-append[_ngcontent-%COMP%]\n{\n    text-align: end;\n    margin-top: -12%;\n}\n.form-control[_ngcontent-%COMP%]\n{\n\n    width: 23%;\n    box-sizing: border-box;\n    position: absolute;\n    left:76%;\n    border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7QUFDRDs7SUFFSSxjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCO0FBR0E7RUFDQSxVQUFVO0VBQ1Y7QUFJRjs7SUFFSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjs7RUFFbkI7QUFHRjs7SUFFSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFHQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLFVBQVU7O0FBRWQ7QUFHQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBR0E7OztJQUdJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICBmb250LXNpemU6MTdweDtcbn1cbi5tZW51YmFyXG57ICAgIFxuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDg2JTtcbiB9IFxuLmJveDFcbntcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDoyMyU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMjQ5LCAyNDksIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNzYlO1xuICAgIFxufVxuLmJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDI5LCA3NywgMjE5KTtcbiAgY29sb3I6IHJnYigyOSwgNzcsIDIxOSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ1dHRvbjpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjAyLCAyMDIsIDAuNTQxKTtcbn1cbi5idXR0b24gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b24gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogNjtcbiAgcmlnaHQ6IDA7XG59XG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYzLCAxNTcsIDE1Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luOjIlO1xuICAgIG1heC13aWR0aDogNjUlO1xuICB9XG4gIC5jb250YWluZXIgaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG5cbiAgfVxuXG4gIFxuICBwe1xuICBtYXJnaW46IDElO1xuICB9XG5cblxuXG4uZGFya2VyXG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MywgMTU3LCAxNTcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE5MSwgMjE5KTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBcbiAgfVxuXG4gIFxuI21zZ2lucHV0XG57XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ubXNnXG57XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuLmluYm94XG57XG4gICAgbWFyZ2luOiAyJTtcblxufVxuXG5cbi5pbnB1dC1ncm91cC1hcHBlbmRcbntcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogLTEyJTtcbn1cblxuXG4uZm9ybS1jb250cm9sXG57XG5cbiAgICB3aWR0aDogMjMlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6NzYlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbox',
                templateUrl: './chatbox.component.html',
                styleUrls: ['./chatbox.component.css']
            }]
    }], function () { return [{ type: _chatbox_service__WEBPACK_IMPORTED_MODULE_1__["ChatboxService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { div: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['division']
        }], myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messagediv']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "P4GD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chatbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_1__["ChatboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "P4GD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_5__["ChatboxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_5__["ChatboxComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
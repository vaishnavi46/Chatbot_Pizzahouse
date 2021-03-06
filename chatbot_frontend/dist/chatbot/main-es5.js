(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/ayrus/Desktop/chatbot/chatbot_angular/chatbot_finalproject/chatbot_frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "M8Ov":
    /*!************************************!*\
      !*** ./src/app/chatbox.service.ts ***!
      \************************************/

    /*! exports provided: ChatboxService */

    /***/
    function M8Ov(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatboxService", function () {
        return ChatboxService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ChatboxService = /*#__PURE__*/function () {
        function ChatboxService(http) {
          _classCallCheck(this, ChatboxService);

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
        } // Function to select bot answer for user query


        _createClass(ChatboxService, [{
          key: "getdetails",
          value: function getdetails(question) {
            return this.http.get("".concat(this.detailurl, "/").concat(question));
          } //insert user details

        }, {
          key: "insertuser",
          value: function insertuser(emailid, address, mobileno) {
            return this.http.get("".concat(this.inserturl, "/").concat(emailid, "/").concat(address, "/").concat(mobileno));
          } //select userdetails by id

        }, {
          key: "getuserid",
          value: function getuserid(emailId) {
            return this.http.get("".concat(this.useridurl, "/").concat(emailId));
          } //select pizza order by order id

        }, {
          key: "getpizzaorder",
          value: function getpizzaorder(orderID) {
            return this.http.get("".concat(this.getpizzaorderurl, "/").concat(orderID));
          } //insert pizza status

        }, {
          key: "getorderid",
          value: function getorderid(userId) {
            return this.http.get("".concat(this.trackorderurl, "/").concat(userId));
          } //insert pizza order

        }, {
          key: "insertpizza",
          value: function insertpizza(orderID, pizza_name, ad_ons, size) {
            return this.http.get("".concat(this.insertpizzaurl, "/").concat(orderID, "/").concat(pizza_name, "/").concat(ad_ons, "/").concat(size));
          } //get orderID by userid

        }, {
          key: "trackorderbyuserID",
          value: function trackorderbyuserID(userid) {
            return this.http.get("".concat(this.trackorderbyidurl, "/").concat(userid));
          } //track pizza order using orderid

        }, {
          key: "trackorderbyorderID",
          value: function trackorderbyorderID(orderID) {
            return this.http.get("".concat(this.trackbyorderid, "/").concat(orderID));
          } //dialogflow reply for user query

        }, {
          key: "dialogreply",
          value: function dialogreply(usertext) {
            return this.http.get("".concat(this.dialogflowurl, "/").concat(usertext));
          }
        }]);

        return ChatboxService;
      }();

      ChatboxService.ɵfac = function ChatboxService_Factory(t) {
        return new (t || ChatboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ChatboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatboxService,
        factory: ChatboxService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatboxService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "P4GD":
    /*!**********************************************!*\
      !*** ./src/app/chatbox/chatbox.component.ts ***!
      \**********************************************/

    /*! exports provided: ChatboxComponent */

    /***/
    function P4GD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function () {
        return ChatboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _chatbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chatbox.service */
      "M8Ov");

      var _c0 = ["division"];
      var _c1 = ["messagediv"];

      var ChatboxComponent = /*#__PURE__*/function () {
        function ChatboxComponent(api, renderer) {
          _classCallCheck(this, ChatboxComponent);

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

        _createClass(ChatboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollToBottom();
          } //this function is to display buttons initially

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.addNewButton('To Order a Pizza', 1);
            }, 350);
            setTimeout(function () {
              _this.addNewButton('Where is My Order?', 2);
            }, 450);
            this.scrollToBottom();
          } //text area function if user types any query 

        }, {
          key: "update",
          value: function update(value) {
            var _this2 = this;

            if (value.length != 0) //do not allow the empty response from the user
              {
                this.usertext(value);
                value = value.toLowerCase();

                if (this.loginflag == 1) //if user clicks the button
                  {
                    if (this.Emailflag == 1) //if user is already existing
                      {
                        if (this.checkIfEmailInString(value)) {
                          if (this.loginyes == 1) //search for the user Emailid ,if exists
                            {
                              this.api.getuserid(value).subscribe(function (data) {
                                if (data.length != 0) {
                                  _this2.details[_this2.list] = value;
                                  _this2.list++;
                                  setTimeout(function () {
                                    _this2.bottext("Select your pizza category");
                                  }, 300);
                                  setTimeout(function () {
                                    _this2.addNewButton("Veg", 3);
                                  }, 400);
                                  setTimeout(function () {
                                    _this2.addNewButton("Non Veg", 4);
                                  }, 500);
                                  _this2.loginflag = 0;
                                  _this2.Emailflag = 0;
                                } else {
                                  setTimeout(function () {
                                    _this2.bottext("User account not found, Please Enter Correct Email Id");
                                  }, 600);
                                }
                              });
                            }

                          if (this.loginno == 1) //if user doesn't have the account 
                            {
                              this.api.getuserid(value).subscribe(function (data) {
                                if (data.length == 0) {
                                  _this2.details[_this2.list] = value;
                                  _this2.list++;
                                  setTimeout(function () {
                                    _this2.bottext("Enter Your 10 Digit Mobile Number");
                                  }, 500);
                                  _this2.Emailflag = 0;
                                  _this2.Mobilenoflag = 1;
                                } else {
                                  setTimeout(function () {
                                    _this2.bottext("User Account Already Exists,Try With Other Email-ID");
                                  }, 500);
                                }
                              });
                            }
                        } else {
                          setTimeout(function () {
                            _this2.bottext("Enter The Valid Email Id");
                          }, 500);
                        }
                      }

                    if (this.AddressFlag == 1) //Entering the address 
                      {
                        this.details[this.list] = value;
                        this.list++;
                        this.AddressFlag = 0;
                        this.loginflag = 0;
                        this.createuser();
                        setTimeout(function () {
                          _this2.bottext("Please select the category...");
                        }, 300);
                        setTimeout(function () {
                          _this2.addNewButton("Veg", 3);
                        }, 400);
                        setTimeout(function () {
                          _this2.addNewButton("Non Veg", 4);
                        }, 500);
                        this.scrollToBottom();
                      }

                    if (this.Mobilenoflag == 1) //user entering the mobile number
                      {
                        if (Number(value)) {
                          if (this.checkifMobileInString(value) && value.length == 10) //checks if user enters the valid number
                            {
                              this.details[this.list] = value;
                              this.list++;
                              setTimeout(function () {
                                _this2.bottext("Enter your deliver address");
                              }, 300);
                              this.AddressFlag = 1;
                              this.Mobilenoflag = 0;
                            } else {
                            setTimeout(function () {
                              _this2.bottext("Enter a valid 10 digit mobile number");
                            }, 400);
                          }
                        } else {
                          setTimeout(function () {
                            _this2.bottext("Enter a valid mobile number");
                          }, 500);
                        }
                      }
                  } else if (this.orderIdFlag == 1) //tracking order-ID
                  {
                    if (Number(value)) {
                      var orderid = Number(value);
                      var pizzaname = ''; //getting pizza_name using orderid

                      this.api.getpizzaorder(orderid).subscribe(function (data1) {
                        if (data1 != 0) {
                          for (var i in data1) {
                            pizzaname = pizzaname + "<br>" + data1[i].pizza_name;
                          }

                          setTimeout(function () {
                            _this2.bottext("Your Recent Order is <b>" + pizzaname + "</b><br>");
                          }, 600);
                        } else {
                          setTimeout(function () {
                            _this2.bottext("Order-ID Not Exist.Enter The Correct Order-Id");
                          }, 650);
                        }
                      }); //fetching order status

                      this.api.trackorderbyorderID(orderid).subscribe(function (data) {
                        var ETA;
                        var order_status;
                        ETA = data[0].ETA;
                        order_status = data[0].order_status;
                        setTimeout(function () {
                          _this2.bottext("The <b>" + order_status + "</b>, Your ordered Pizza Will Arrive in <b>" + ETA + "</b>");
                        }, 700);
                        _this2.orderIdFlag = 0;
                      });
                    } else {
                      setTimeout(function () {
                        _this2.bottext("Enter The Correct Format");
                      }, 600);
                    }
                  } else {
                  setTimeout(function () {
                    _this2.replymsg(value);
                  }, 400);
                }

                this.scrollToBottom();
              } else {
              this.bottext("Please Select The Choices or Type In Chatbox...");
            }
          } //bot reply for user query

        }, {
          key: "replymsg",
          value: function replymsg(value) {
            var _this3 = this;

            this.api.getdetails(value).subscribe(function (data) {
              if (data.length != 0) {
                setTimeout(function () {
                  _this3.bottext(data[0].answer);
                }, 500);
              } else {
                setTimeout(function () {
                  _this3.bottext('Sorry I do not understand!!!<br>May i help you in some other way');
                }, 300);

                _this3.ngAfterViewInit();
              }
            }); // Dialog API
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
          } // To create user account

        }, {
          key: "createuser",
          value: function createuser() {
            this.api.insertuser(this.details[0], this.details[2], this.details[1]).subscribe(function (data) {});
          } //store user order

        }, {
          key: "storeuserorder",
          value: function storeuserorder() {
            var _this4 = this;

            var userid = 0;
            var orderid = 0;
            this.api.getuserid(this.details[0]).subscribe(function (dat) {
              userid = dat[0].userId;

              _this4.api.getorderid(userid).subscribe(function (data) {
                _this4.api.trackorderbyuserID(userid).subscribe( //fetching orderid using userid
                //fetching orderid using userid
                function (data1) {
                  var orderindex;

                  for (var i in data1) {
                    orderindex = i;
                  }

                  orderid = data1[orderindex].order_ID;
                  setTimeout(function () {
                    _this4.bottext("Your order Id is: <b>" + orderid + "</b><br> Please Use The ID To Track Your Order.");
                  }, 80);

                  for (var _i = 0; _i < _this4.jindex; _i++) {
                    _this4.api.insertpizza(orderid, _this4.Pizzalist[_i].PizzaName, _this4.Pizzalist[_i].Addons, _this4.Pizzalist[_i].size).subscribe(function (data2) {});
                  }
                });
              });
            });
          } //track order button

        }, {
          key: "trackorder",
          value: function trackorder() {
            var _this5 = this;

            setTimeout(function () {
              _this5.usertext('Where is my order?');
            }, 500);
            setTimeout(function () {
              _this5.bottext("Kindly provide your Order-ID");
            }, 700);
            this.orderIdFlag = 1;
            this.scrollToBottom();
          } //create html element for user

        }, {
          key: "usertext",
          value: function usertext(value) {
            var div1 = this.renderer.createElement("div");
            div1.setAttribute("class", "container darker");
            this.renderer.appendChild(this.div.nativeElement, div1);
            var Img = this.renderer.createElement("img");
            Img.setAttribute("src", "/assets/userimage.jpg");
            Img.setAttribute("style", "width:12%");
            this.renderer.appendChild(div1, Img);
            var p = this.renderer.createElement('p');
            p.innerHTML = value;
            this.renderer.appendChild(div1, p);
            this.scrollToBottom();
          } //create html element for bot

        }, {
          key: "bottext",
          value: function bottext(value) {
            var div1 = this.renderer.createElement("div");
            div1.setAttribute("class", "container");
            this.renderer.appendChild(this.div.nativeElement, div1);
            var Img = this.renderer.createElement("img");
            Img.setAttribute("src", "/assets/botimage1.png");
            Img.setAttribute("style", "width:11%");
            Img.setAttribute("class", "right");
            this.renderer.appendChild(div1, Img);
            var p = this.renderer.createElement('p');
            p.innerHTML = value;
            this.renderer.appendChild(div1, p);
            this.scrollToBottom();
          } //ordering pizza button

        }, {
          key: "orderpizza",
          value: function orderpizza() {
            var _this6 = this;

            setTimeout(function () {
              _this6.usertext("To order a pizza");
            }, 300);
            setTimeout(function () {
              _this6.addNewButton("Existing user", 11);
            }, 500);
            setTimeout(function () {
              _this6.addNewButton("New User", 12);
            }, 550);
            this.loginflag = 1;
            this.scrollToBottom();
          } //user already exists

        }, {
          key: "login_yes",
          value: function login_yes() {
            var _this7 = this;

            setTimeout(function () {
              _this7.usertext("Existing user");
            }, 400);
            setTimeout(function () {
              _this7.bottext("Enter your Email id");
            }, 500);
            this.loginyes = 1;
            this.Emailflag = 1;
          } //if user not exist

        }, {
          key: "login_no",
          value: function login_no() {
            var _this8 = this;

            setTimeout(function () {
              _this8.usertext("New User");
            }, 400);
            setTimeout(function () {
              _this8.bottext("Enter your Email id");
            }, 500);
            this.loginno = 1;
            this.Emailflag = 1;
          } //when user clicks veg category

        }, {
          key: "veg",
          value: function veg() {
            var _this9 = this;

            this.api.getdetails('veg').subscribe(function (data) {
              _this9.usertext('Veg');

              setTimeout(function () {
                _this9.bottext('We have some list of Veg pizzas');
              }, 500);

              var _loop = function _loop(i) {
                setTimeout(function () {
                  _this9.addNewButton(data[i].answer, 5);
                }, 600);
              };

              for (var i = 0; i < data.length; i++) {
                _loop(i);
              }
            });
            this.scrollToBottom();
          } //when user clicks non-veg category

        }, {
          key: "nonveg",
          value: function nonveg() {
            var _this10 = this;

            this.api.getdetails('non-veg').subscribe(function (data) {
              setTimeout(function () {
                _this10.usertext('non-veg');
              }, 400);
              setTimeout(function () {
                _this10.bottext('We have some list of Non-Veg pizzas');
              }, 600);

              var _loop2 = function _loop2(i) {
                setTimeout(function () {
                  _this10.addNewButton(data[i].answer, 5);
                }, 700);
              };

              for (var i = 0; i < data.length; i++) {
                _loop2(i);
              }
            });
            this.scrollToBottom();
          } //ad-ons function

        }, {
          key: "Order",
          value: function Order(value) {
            var _this11 = this;

            this.choice_of_pizza[this.index] = value;
            this.index = this.index + 1;
            setTimeout(function () {
              _this11.usertext(value);
            }, 300);
            setTimeout(function () {
              _this11.bottext('Would you like to add Ad-Ons?');
            }, 400);
            this.api.getdetails('ad-ons').subscribe(function (data) {
              var _loop3 = function _loop3(i) {
                setTimeout(function () {
                  _this11.addNewButton(data[i].answer, 6);
                }, 500);
              };

              for (var i = 0; i < data.length; i++) {
                _loop3(i);
              }
            });
            this.scrollToBottom();
          } //choose size of pizza

        }, {
          key: "addons",
          value: function addons(value) {
            var _this12 = this;

            this.choice_of_pizza[this.index] = value;
            this.index = this.index + 1;
            setTimeout(function () {
              _this12.usertext(value);
            }, 300);
            setTimeout(function () {
              _this12.bottext('Choose size of your pizza?');
            }, 400);
            setTimeout(function () {
              _this12.addNewButton("Regular", 7);
            }, 450);
            setTimeout(function () {
              _this12.addNewButton("Medium", 7);
            }, 500);
            setTimeout(function () {
              _this12.addNewButton("Large", 7);
            }, 550);
            this.scrollToBottom();
          } //another pizza order

        }, {
          key: "pizza_size",
          value: function pizza_size(value) {
            var _this13 = this;

            this.choice_of_pizza[this.index] = value;
            this.index = this.index + 1;
            setTimeout(function () {
              _this13.usertext(value);
            }, 300);
            setTimeout(function () {
              _this13.bottext("Do you wish to order another pizza?");
            }, 400);
            setTimeout(function () {
              _this13.addNewButton("Yes", 8);
            }, 450);
            setTimeout(function () {
              _this13.addNewButton("No", 9);
            }, 500);
            this.scrollToBottom();
          } //when user clicks No

        }, {
          key: "order_confirm",
          value: function order_confirm(value) {
            var _this14 = this;

            setTimeout(function () {
              _this14.usertext(value);
            }, 350);
            setTimeout(function () {
              _this14.addNewButton("Veg", 3);
            }, 400);
            setTimeout(function () {
              _this14.addNewButton("Non Veg", 4);
            }, 450);
            this.Pizzalist[this.jindex] = {
              PizzaName: this.choice_of_pizza[0],
              Addons: this.choice_of_pizza[1],
              size: this.choice_of_pizza[2]
            };
            this.jindex = this.jindex + 1;
            this.index = 0;
            this.scrollToBottom();
          } //when using ordering one more pizza

        }, {
          key: "order_notconfirm",
          value: function order_notconfirm(value) {
            var _this15 = this;

            setTimeout(function () {
              _this15.usertext(value);
            }, 100);
            this.Pizzalist[this.jindex] = {
              PizzaName: this.choice_of_pizza[0],
              Addons: this.choice_of_pizza[1],
              size: this.choice_of_pizza[2]
            };
            this.jindex = this.jindex + 1;
            this.index = 0;
            var orderfinal = '';

            for (var i = 0; i < this.jindex; i++) {
              orderfinal = orderfinal + "<br><b> " + this.Pizzalist[i].PizzaName + "</b>  of size <b>" + this.Pizzalist[i].size + "</b>  along with Ad-ons <b>" + this.Pizzalist[i].Addons + "</b> <br>";
            }

            this.storeuserorder();
            setTimeout(function () {
              _this15.bottext("Your final order is " + orderfinal);
            }, 950);
            setTimeout(function () {
              _this15.bottext("Thank You for ordering in Pizza House");
            }, 1100);
            setTimeout(function () {
              _this15.addNewButton('To order a pizza', 1);
            }, 1400);
            setTimeout(function () {
              _this15.addNewButton('Where is my order?', 2);
            }, 1500);
            this.scrollToBottom();
          } //html create element for button tag

        }, {
          key: "addNewButton",
          value: function addNewButton(value, flag) {
            var _this16 = this;

            var button = this.renderer.createElement('button');
            button.setAttribute("class", "button");
            var spantag = this.renderer.createElement('span');

            if (flag == 1) //Each button function has a flag variable
              {
                this.renderer.listen(button, 'click', function () {
                  return _this16.orderpizza();
                });
              }

            if (flag == 2) {
              this.renderer.listen(button, 'click', function () {
                return _this16.trackorder();
              });
            }

            if (flag == 3) {
              this.renderer.listen(button, 'click', function () {
                return _this16.veg();
              });
            }

            if (flag == 4) {
              this.renderer.listen(button, 'click', function () {
                return _this16.nonveg();
              });
            }

            if (flag == 5) {
              this.renderer.listen(button, 'click', function () {
                return _this16.Order(value);
              });
            }

            if (flag == 6) {
              this.renderer.listen(button, 'click', function () {
                return _this16.addons(value);
              });
            }

            if (flag == 7) {
              this.renderer.listen(button, 'click', function () {
                return _this16.pizza_size(value);
              });
            }

            if (flag == 8) {
              this.renderer.listen(button, 'click', function () {
                return _this16.order_confirm(value);
              });
            }

            if (flag == 9) {
              this.renderer.listen(button, 'click', function () {
                return _this16.order_notconfirm(value);
              });
            }

            if (flag == 10) {
              this.renderer.listen(button, 'click', function () {
                return _this16.storeuserorder();
              });
            }

            if (flag == 11) {
              this.renderer.listen(button, 'click', function () {
                return _this16.login_yes();
              });
            }

            if (flag == 12) {
              this.renderer.listen(button, 'click', function () {
                return _this16.login_no();
              });
            }

            spantag.innerHTML = value;
            this.renderer.appendChild(button, spantag);
            this.renderer.appendChild(this.div.nativeElement, button);
            this.scrollToBottom();
          } //scroll chatbox to bottom

        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            try {
              this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            } catch (err) {}
          } //check email format

        }, {
          key: "checkIfEmailInString",
          value: function checkIfEmailInString(text) {
            var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
            return re.test(text);
          } //check mobile format

        }, {
          key: "checkifMobileInString",
          value: function checkifMobileInString(text) {
            var re = /[0-9\+\-\ ]/;
            return re.test(text);
          }
        }]);

        return ChatboxComponent;
      }();

      ChatboxComponent.ɵfac = function ChatboxComponent_Factory(t) {
        return new (t || ChatboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chatbox_service__WEBPACK_IMPORTED_MODULE_1__["ChatboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      ChatboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatboxComponent,
        selectors: [["app-chatbox"]],
        viewQuery: function ChatboxComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.div = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
          }
        },
        decls: 14,
        vars: 0,
        consts: [[1, "menubar"], [1, "image"], ["src", "/assets/botimage.png", "width", "70"], [1, "box1"], ["messagediv", ""], ["id", "msgboxsection", 1, "inbox"], ["division", ""], ["id", "container", 1, "container"], ["src", "/assets/botimage1.png", "alt", "chat", 2, "width", "12%"], ["id", "msginput", "type", "text", "autocomplete", "off", "placeholder", "Type your message.....", 1, "form-control", 3, "keyup.enter"], ["box", ""]],
        template: function ChatboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatboxComponent_Template_input_keyup_enter_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              return ctx.update(_r2.value);
            })("keyup.enter", function ChatboxComponent_Template_input_keyup_enter_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              return _r2.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%]{\n  font-family: fantasy;\n  font-size:17px;\n}\n.menubar[_ngcontent-%COMP%]\n{    \n    margin-top: -10%;\n    margin-left: 86%;\n }\n.box1[_ngcontent-%COMP%]\n{\n    overflow: auto;\n    width:23%;\n    height: 600px;\n    background-color: rgba(253, 249, 249, 0.5);\n    border-radius: 20px;\n    margin-left: 76%;\n    \n}\n.button[_ngcontent-%COMP%] {\n  border-color: rgb(29, 77, 219);\n  color: rgb(29, 77, 219);\n  text-align: center;\n  font-size: 16px;\n  padding: 10px;\n  width: 200px;\n  border-radius: 20px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n  margin-left: 12%;\n  outline: none;\n}\n.button[_ngcontent-%COMP%]:hover\n{\n  background-color: rgba(224, 202, 202, 0.541);\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  transition: 0.5s;\n}\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 6;\n  right: 0;\n}\n.container[_ngcontent-%COMP%] {\n    border: 1px solid rgb(163, 157, 157);\n    background-color: #f1f1f1;\n    border-radius: 25px;\n    padding: 12px;\n    margin:2%;\n    max-width: 65%;\n  }\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 12px;\n    border-radius: 60%;\n    margin-top: -4px;\n\n  }\np[_ngcontent-%COMP%]{\n  margin: 1%;\n  }\n.darker[_ngcontent-%COMP%]\n{\n    border: 1px solid rgb(163, 157, 157);\n    background-color: rgb(179, 191, 219);\n    margin-left: auto;\n    \n  }\n#msginput[_ngcontent-%COMP%]\n{\n    padding: 10px;\n}\nh2[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.msg[_ngcontent-%COMP%]\n{\n    border-radius: 30px;\n    padding: 12px;\n}\n.inbox[_ngcontent-%COMP%]\n{\n    margin: 2%;\n\n}\n.input-group-append[_ngcontent-%COMP%]\n{\n    text-align: end;\n    margin-top: -12%;\n}\n.form-control[_ngcontent-%COMP%]\n{\n\n    width: 23%;\n    box-sizing: border-box;\n    position: absolute;\n    left:76%;\n    border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7QUFDRDs7SUFFSSxjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCO0FBR0E7RUFDQSxVQUFVO0VBQ1Y7QUFJRjs7SUFFSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjs7RUFFbkI7QUFHRjs7SUFFSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFHQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLFVBQVU7O0FBRWQ7QUFHQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBR0E7OztJQUdJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICBmb250LXNpemU6MTdweDtcbn1cbi5tZW51YmFyXG57ICAgIFxuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDg2JTtcbiB9IFxuLmJveDFcbntcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDoyMyU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMjQ5LCAyNDksIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNzYlO1xuICAgIFxufVxuLmJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDI5LCA3NywgMjE5KTtcbiAgY29sb3I6IHJnYigyOSwgNzcsIDIxOSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ1dHRvbjpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjAyLCAyMDIsIDAuNTQxKTtcbn1cbi5idXR0b24gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b24gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogNjtcbiAgcmlnaHQ6IDA7XG59XG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYzLCAxNTcsIDE1Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luOjIlO1xuICAgIG1heC13aWR0aDogNjUlO1xuICB9XG4gIC5jb250YWluZXIgaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNjAlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG5cbiAgfVxuXG4gIFxuICBwe1xuICBtYXJnaW46IDElO1xuICB9XG5cblxuXG4uZGFya2VyXG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2MywgMTU3LCAxNTcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE5MSwgMjE5KTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBcbiAgfVxuXG4gIFxuI21zZ2lucHV0XG57XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ubXNnXG57XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuLmluYm94XG57XG4gICAgbWFyZ2luOiAyJTtcblxufVxuXG5cbi5pbnB1dC1ncm91cC1hcHBlbmRcbntcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogLTEyJTtcbn1cblxuXG4uZm9ybS1jb250cm9sXG57XG5cbiAgICB3aWR0aDogMjMlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6NzYlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chatbox',
            templateUrl: './chatbox.component.html',
            styleUrls: ['./chatbox.component.css']
          }]
        }], function () {
          return [{
            type: _chatbox_service__WEBPACK_IMPORTED_MODULE_1__["ChatboxService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          div: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['division']
          }],
          myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messagediv']
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chatbox/chatbox.component */
      "P4GD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chatbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_1__["ChatboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chatbox/chatbox.component */
      "P4GD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_5__["ChatboxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_5__["ChatboxComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
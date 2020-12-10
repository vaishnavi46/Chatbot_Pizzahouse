const express=require('express')
const {debugPort}=require('process')
function createRouter(db)
{
    const router=express.Router();

//select statement for user queries from bot_queries table 
router.get('/event/:question',function(req,res,next){
    db.query(
        'SELECT answer FROM bot_queries WHERE question=?',
        [req.params.question],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//insert query for user details 
router.get('/userdetails/:emailId/:address/:mobile_num',function(req,res,next){
    db.query(
        'INSERT INTO user_details(userId,emailId,address,mobile_num)VALUES(null,?,?,?)',
        [req.params.emailId,req.params.address,req.params.mobile_num],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//select query from user_details table using Email-id
router.get('/getbyemailid/:emailId',function(req,res,next){
    db.query(
        'SELECT userId FROM user_details WHERE emailId=?',
        [req.params.emailId],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//insert query for order details and status
router.get('/trackorder/:userId',function(req,res,next){
    db.query(
        'INSERT INTO order_details(order_Id,userId,order_status,ETA)VALUES(null,?,"food is being prepared","15-mins")',
        [Number(req.params.userId)],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//select query from order_Details using userID and tracking the order 
router.get('/trackorderbyid/:userID/',function(req,res,next){
    db.query(
        'SELECT order_ID FROM order_details WHERE userID=? AND order_status!="delivered"',
        [req.params.userID],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//insert query for getting pizza order
router.get('/insertpizzaorder/:orderID/:pizza_name/:ad_ons/:size',function(req,res,next){
    db.query(
        'insert into sub_order(track_ID,order_ID,pizza_name,ad_ons,size)values(null,?,?,?,?);',
        [req.params.orderID,req.params.pizza_name,req.params.ad_ons,req.params.size],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//select query from sub_order for getting pizza name  using orderID
router.get('/getpizzaorder/:orderID',function(req,res,next){
    db.query(
        'select pizza_name from sub_order where order_ID=?;',
        [req.params.orderID],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//select query from order_details using orderID to track order-status 
router.get('/trackorderbyorderid/:order_ID/',function(req,res,next){
    db.query(
        'SELECT order_ID,ETA,order_status FROM order_details WHERE order_ID=? AND order_status!="delivered"',
        [req.params.order_ID],
        (error,results)=>
        {
            if(error)
            {
                console.log(error);
                res.status(500).json({status:'error'});
            }
            else
            {
                res.status(200).json(results);
                console.log(results);
            }
        }
    );
});

//fetching the bot message from dialog flow based on user query
router.get('/getmessage/:usertext',function(req,res,next)
{
    var userquery=req.params.usertext;
    var child_process = require('child_process');

    function runCmd(cmd)
    {
        var resp = child_process.execSync(cmd);
        var result = resp.toString('UTF8');
        return result;
    }
    var str=userquery;
    var cmd = 'curl -H "Content-Type: application/json; charset=utf-8"  -H "Authorization: Bearer ya29.a0AfH6SMBO4P_OkBYGB-lDdFfyv1CdvbYRau8N_CkKLAl5iYbH5D3n7nrCllmemot3LerjOi9kaq85aODqb3IUEk0X871sx_cXme8ilbx-ZVZ2cm1W25i3FDxgqHhCLLp5lqdYDKCbOCxVuEloYSphZxYH8htotGe-a6kQFlfLBz2jdUMJkPMS"  -d "{\\"queryInput\\":{\\"text\\":{\\"text\\":\\"'+str+'\\",\\"languageCode\\":\\"en\\"}},\\"queryParams\\":{\\"source\\":\\"DIALOGFLOW_CONSOLE\\",\\"timeZone\\":\\"Asia/Calcutta\\"}}" "https://dialogflow.clients6.google.com/v2/projects/chatbot-fkvr/agent/sessions/3ccb6e00-d209-9d9d-f676-937c2ba050f8:detectIntent"';  
    var result = runCmd(cmd);
    var obj=JSON.parse(result);
    console.log(obj.queryResult.fulfillmentText);
    res.status(200).json(obj.queryResult.fulfillmentText);
    console.log(result);

});

return router;
}
module.exports=createRouter
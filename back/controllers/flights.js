const e = require('express')
const {Flight}=require('../models/flight_model')

const getFlights= async(req,res)=>{
    try{
        flights=await Flight.find()
        res.status(200).send(flights)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}


const getFlightById= async(req,res)=>{

    if(req.params.id==null | req.params.id==undefined){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    }
    try{
        flight=await Flight.findById(req.params.id)
        res.status(200).send(flight)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}

const addFlight=async(req,res)=>{
   

    flight = await Flight.find({
        "name": req.body[0].name
    })
    console.log(flight[0].name)
    console.log(req.body[0].name)
       if(flight[0].name!=req.body[0].name||
        flight[0].price!=req.body[0].price
        ){
        console.log("add new flight to the DB")
        await Flight.insertMany(req.body);
        flights=await Flight.find()
        res.status(200).send(flights)
       }else{
        res.status(200).send("Found");
       }
      
    
   
   /* const flight=Flight({
        Name:req.body.Name
    })

    flight.save((error,newFlight)=>{
        if(error){
            res.status(400).send({
                'status': 'fail',
                'error':error.message
            })

        }else{
            res.status(200).send({
                'status': 'ok',
                'flight':newFlight
            })
        }

    })*/
}

module.exports={
    getFlights,
    addFlight,
    getFlightById
}
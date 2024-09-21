const TenderModel = require("../models/Tender")

class TenderController {


    static Tender_insert = async (req, res) => {
        try {
            const {name,description,start_time,end_time,buffer_time}=req.body
            const result = new TenderModel({
                name:name,
                description:description,
                start_time:start_time,
                end_time:end_time,
                buffer_time:buffer_time,
            })
        
            const savetender = await result.save()
            res.status(200)
                .json({ status: "SUCCESS", message: "Tender Registration successfull" })
        } catch (error) {
            console.log(error)
        }
    }


    static getTender = async (req, res) => {
        try {
            const data = await TenderModel.find()
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static ViewTender = async (req, res) => {
        try {
            const data = await TenderModel.findById(req.params.id)
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static UpdateTender = async (req, res) => {
        try {
            const { name, description, start_time, end_time, buffer_time } = req.body
            const data = await TenderModel.findByIdAndUpdate(req.params.id, {
                name: name,
                description: description,
                start_time: start_time,
                end_time: end_time,
                buffer_time: buffer_time,


            })
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error });
        }
    }

    static DeleteTender= async(req,res)=>{
        try {
          const data = await TenderModel.findByIdAndDelete(req.params.id)
          res.status(200).json({message:"delete successfully"})
        }  catch (error){
          console.log(error)
          res.status(500).json({error: error});
        }
      }

}
module.exports = TenderController;
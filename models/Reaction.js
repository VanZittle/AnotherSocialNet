const { Schema, model } = require('mongoose');
const reactionsquema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectID,
            dafault:()=>Types.ObjectId()
        } , 
        reactionText:{
            type:String

        }



    }
)

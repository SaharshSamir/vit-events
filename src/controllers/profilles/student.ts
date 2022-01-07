import {model} from 'mongoose';

const Student = model('students');

export const getStudent = async (req, res) => {
    let data, error;
    console.log('inside getStudent controller');
    console.log(req.studentId);
    try {
        const existingUser = await Student.findById(req.studentId);
        // const existingUser = 'something user';
        console.log("existingUser: ")
        console.log(existingUser)
        if(existingUser){ 
            data = existingUser;
        }else{
            throw 'There is no such user';
        }
        return res.status(200).json({ok: true, user: data});

    } catch (e) {
        error = e;
        console.log(e);
        return res.status(200).json({ok: false, e});
    }
    if(error){
        return res.status(300).json({error});
    };
    console.log(data);
    res.status(200).json({data});
}
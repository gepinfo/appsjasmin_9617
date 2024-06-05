import * as mongoose from 'mongoose';
import studentsModel from '../models/daomodels/students';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class studentsDao {
    private students = studentsModel;

    

    constructor() { }
    
    public async Delete(studentsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: Delete');

    

    
    
    
    this.students.findByIdAndRemove(studentsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(studentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(studentsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.students.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(studentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: SearchForUpdate');

    

    
    
    
    this.students.findOneAndUpdate({ _id: studentsData._id }, studentsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(studentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: Update');

    

    
    
    
    this.students.findOneAndUpdate({ _id: studentsData._id }, studentsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(studentsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GetEntityById');

    

    
    
    
    this.students.findById(studentsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GetAllValues');

    

    
    
    
    this.students.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(studentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: Create');

    let temp = new studentsModel(studentsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(studentsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.students.aggregate(([
                        { $match: { $and: [{ created_by: studentsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}
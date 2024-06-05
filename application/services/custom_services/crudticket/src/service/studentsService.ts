import { Request, Response } from 'express';
import {studentsDao} from '../dao/studentsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let students = new studentsDao();

export class studentsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: Delete')
     let  studentsId = req.params.id;
     students.Delete(studentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: Search')
     let  studentsData = req.query;
     students.Search(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: SearchForUpdate')
     let  studentsData = req.body;
     students.SearchForUpdate(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: Update')
     let  studentsData = req.body;
     students.Update(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GetEntityById')
     let  studentsId = req.params.id;
     students.GetEntityById(studentsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GetAllValues')
     
     students.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: Create')
     let  studentsData = req.body;
     students.Create(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GetNounCreatedBy')
     let  studentsData = { created_by: req.query.createdby };
     students.GetNounCreatedBy(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}
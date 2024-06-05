import { Request, Response } from 'express';
import { studentsService } from '../service/studentsService';
import { CustomLogger } from '../config/Logger'
let students = new studentsService();

export class studentsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    students.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GetNounCreatedBy');
    })}


}
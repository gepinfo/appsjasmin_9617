import { Request, Response, NextFunction } from "express";
import { studentsController } from '../controller/studentsController';


export class Routes {
    private students: studentsController = new studentsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/students/:id').delete(this.students.Delete);
app.route('/students/get/search').get(this.students.Search);
app.route('/students/get/update').put(this.students.SearchForUpdate);
app.route('/students').put(this.students.Update);
app.route('/students/:id').get(this.students.GetEntityById);
app.route('/students').get(this.students.GetAllValues);
app.route('/students').post(this.students.Create);
app.route('/students/userid/created_by').get(this.students.GetNounCreatedBy);
     }

}
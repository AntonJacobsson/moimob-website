import {inject} from 'aurelia-framework';
import { ApplicationModel, ApplicationData } from '../../application-data';

@inject(ApplicationData)

export class Application {
    
    public applicationModel: ApplicationModel
    
    constructor(private _applicationData: ApplicationData) {

    }

    public activate(params: any): void {
        console.log(params);
        console.log(params.slug);

        let app = this._applicationData.applications.find(x => x.slug === params.slug);
        if(app !== undefined) {
            this.applicationModel = app;
        }
    }
}
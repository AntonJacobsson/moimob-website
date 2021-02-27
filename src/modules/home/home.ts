import {inject} from 'aurelia-framework';
import { ApplicationModel, ApplicationData } from "application-data";

@inject(ApplicationData)
export class Home {

    public selectedApplication: ApplicationModel = undefined;

    constructor(private _applicationData: ApplicationData) {
        this.selectedApplication = _applicationData.applications[0];
    }
}

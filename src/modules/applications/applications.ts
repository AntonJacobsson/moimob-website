import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ApplicationModel, ApplicationData } from '../../application-data';

@inject(ApplicationData, Router)
export class Applications {

    public featuredApplication: ApplicationModel

    constructor(private _applicationData: ApplicationData, private _router: Router) {
        this.featuredApplication = _applicationData.applications[0];
    }

    public navigateToRoute(slug: string) {
        console.log(slug);
        this._router.navigate('/applications/' + slug);
    }
}
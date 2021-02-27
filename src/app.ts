import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';

export class App {
  public router: Router;
  public isBurgerButtonOpen: boolean = false;

  public configureRouter(config: RouterConfiguration, router: Router): void {

    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('modules/home/home'), nav: true, title: 'Home' },
      { route: ['applications'], name: 'applications', moduleId: PLATFORM.moduleName('modules/applications/applications'), nav: true, title: 'Apps' },
      { route: ['applications/:slug'], name: 'application', moduleId: PLATFORM.moduleName('modules/applications/application'), nav: false, },
    ]);
    this.router = router;
  }

  public toggleBurgerButton(): void {
    this.isBurgerButtonOpen = !this.isBurgerButtonOpen;
  }
}

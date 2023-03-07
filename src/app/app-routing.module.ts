import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: MainComponent
  },
  {
    path: "introduction", component: IntroductionComponent
  },
  {
    path: "skills", component: SkillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

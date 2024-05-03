import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'container',
    loadChildren: () => import('./container/container.module').then( m => m.ContainerPageModule)
  },
  {
    path: 'waste',
    loadChildren: () => import('./waste/waste.module').then( m => m.WastePageModule)
  },
  {
    path: 'plastic',
    loadChildren: () => import('./guides/plastic/plastic.module').then( m => m.PlasticPageModule)
  },
  {
    path: 'paper',
    loadChildren: () => import('./guides/paper/paper.module').then( m => m.PaperPageModule)
  },
  {
    path: 'organic',
    loadChildren: () => import('./guides/organic/organic.module').then( m => m.OrganicPageModule)
  },
  {
    path: 'glass',
    loadChildren: () => import('./guides/glass/glass.module').then( m => m.GlassPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

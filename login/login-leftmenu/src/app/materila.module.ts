import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatGridListModule

} from '@angular/material';
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatExpansionModule,
    MatGridListModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule
   ],
})
export class CustomMaterialModule { }
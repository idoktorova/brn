import { LineChartModule } from './../../../../../shared/components/line-chart/line-chart.module';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { StatisticsInfoDialogComponent } from './components/statistics-info-dialog/statistics-info-dialog.component';
import { MonthTimeTrackComponent } from './components/month-time-track/month-time-track.component';
import { WeekTimeTrackComponent } from './components/week-time-track/week-time-track.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MonthTimeTrackItemComponent } from './components/month-time-track-item/month-time-track-item.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AdminApiService } from '@admin/services/api/admin-api.service';
import { BarChartModule } from '@shared/components/bar-chart/bar-chart.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DiagnosticsTrackComponent } from './components/diagnostics-track/diagnostics-track.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsInfoDialogComponent,
    WeekTimeTrackComponent,
    MonthTimeTrackComponent,
    MonthTimeTrackItemComponent,
    DiagnosticsTrackComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    TranslateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    BarChartModule,
    LineChartModule,
    MatTabsModule,
    MatMenuModule,
  ],
  providers: [AdminApiService],
})
export class StatisticsModule {}

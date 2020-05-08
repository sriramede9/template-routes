import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RoutesModule } from "./app.min.routes";
import { AuthService } from "./app.authservice";
import { AuthGuard } from "./app.authguard";
import { CanDeactivateGuard } from "./servers/edit-server/can_deactivate_gaurd_service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, FormsModule, RoutesModule],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

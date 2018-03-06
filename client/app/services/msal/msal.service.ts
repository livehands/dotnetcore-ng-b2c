import { Injectable } from '@angular/core';
import * as Msal from 'msal';

@Injectable()

export class MsalService {
    access_token: string;
    tenantConfig = {
        tenant: "YOURTENANT.onmicrosoft.com",
        clientID: 'YOUR APP ID',
        signUpSignInPolicy: "YOUR POLICY NAME",
        b2cScopes: ["https://YOURTENANT.onmicrosoft.com/YOUR_APP_SCOPE"]
    };

    // Configure the authority for Azure AD B2C
    authority = "https://login.microsoftonline.com/tfp/" + this.tenantConfig.tenant + "/" + this.tenantConfig.signUpSignInPolicy;

    /*
     * B2C SignIn SignUp Policy Configuration
     */
    clientApplication = new Msal.UserAgentApplication(
        this.tenantConfig.clientID, this.authority, 

        function (errorDesc: any, token: any, error: any, tokenType: any) {
            // Called after loginRedirect or acquireTokenPopup
        }
    );

    public login(): void {
       var _this = this;
        this.clientApplication.loginPopup(this.tenantConfig.b2cScopes).then(function (idToken: any) {
            _this.clientApplication.acquireTokenSilent(_this.tenantConfig.b2cScopes).then(
                function (accessToken: any) {
                    _this.access_token = accessToken;
                }, function (error: any) {
                    _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes).then(
                        function (accessToken: any) {
                            _this.access_token = accessToken;
                        }, function (error: any) {
                            alert("Error acquiring the popup:\n" + error);
                        });
                })

        }, function (error: any) {
            alert("Error during login:\n" + error);
        });
    }

    logout(): void {
        this.clientApplication.logout();
    };

    getUser(): any {
        return this.clientApplication.getUser();
    }

    isOnline(): boolean {
        return this.clientApplication.getUser() != null; 
    };
}
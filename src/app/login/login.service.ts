import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService {
    isUserLoggedIn = false;
    constructor(private http: HttpClient) {  }

    login(loginDetail:any) {
        return this.http.post('/api/login', loginDetail);
    }

    getIsUserLoggedIn() {
        console.log('get', this.isUserLoggedIn);
        return this.isUserLoggedIn;
    }

    setIsUserLoggedIn(userLoginSuccessful) {
        this.isUserLoggedIn = userLoginSuccessful
        console.log('set', this.isUserLoggedIn);
    }
}



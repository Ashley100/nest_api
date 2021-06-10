import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get("login")
    login () {
        return this.authService.hello();
    }

    @Get("login")
    register () {
        return this.authService.hello();
    }

    @Get("login")
    forgotPassword () {
        return this.authService.hello();
    }
}
import { Controller, Delete, Get, Param, Post, Req } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./users.service";


@Controller("user")
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post("signup")
    async signin(@Req() req: Request) {
        console.log(req.body);
        return await this.userService.create();
    }
    
    @Delete(":id")
    async delete(@Param("id") id) {
        console.log(id);
        return await this.userService.delete(id);
    }
    
}
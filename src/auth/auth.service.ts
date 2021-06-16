import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";


@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    getStatus(): string{
        return "User Status"
    }

    hello () {
        console.log("calling method >> hello"); 
        return "Hello worls";
    }

    async create() {
        const createdUser = new this.UserModel({
            name: "Migel 1",
            age: 24,
            email: "some@gmail.com"
        });
        return createdUser.save();
    }

    async delete(id:string) {
        await this.UserModel.deleteOne({_id: id});
        return id + ": deleted!";
    }
}